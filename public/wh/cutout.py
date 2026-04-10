"""
Remove near-white backgrounds from miniature photos.
Flood-fills from every edge pixel that is near-white,
then feathers the alpha edge for a clean cutout.
"""
from PIL import Image, ImageFilter
import sys, os

THRESHOLD = 210   # pixels brighter than this on all channels are "background"
FUZZ      = 40    # flood-fill colour tolerance
FEATHER   = 1.2   # gaussian blur radius on alpha channel for soft edges
OUT_WIDTH = 540   # resize output to this width

def is_bg(r, g, b, threshold=THRESHOLD):
    return r >= threshold and g >= threshold and b >= threshold

def flood_fill(pixels, w, h, sx, sy, fuzz):
    """BFS flood fill from (sx,sy), marking near-white connected pixels."""
    sr, sg, sb, _ = pixels[sx, sy]
    if not is_bg(sr, sg, sb):
        return set()

    visited = set()
    queue   = [(sx, sy)]
    while queue:
        x, y = queue.pop()
        if (x, y) in visited:
            continue
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        r, g, b, _ = pixels[x, y]
        if abs(r - sr) > fuzz or abs(g - sg) > fuzz or abs(b - sb) > fuzz:
            continue
        if not is_bg(r, g, b, THRESHOLD - fuzz):
            continue
        visited.add((x, y))
        queue.extend([(x+1,y),(x-1,y),(x,y+1),(x,y-1)])
    return visited

def remove_bg(path_in, path_out):
    img = Image.open(path_in).convert('RGBA')
    w, h = img.size
    pixels = img.load()

    # collect all edge pixels
    edge_seeds = (
        [(x, 0)   for x in range(w)] +
        [(x, h-1) for x in range(w)] +
        [(0, y)   for y in range(h)] +
        [(w-1, y) for y in range(h)]
    )

    # extra interior seeds for disconnected background islands
    interior_seeds = {
        'buddy.webp': [(30, 60), (60, 100), (20, 120)],  # top-left intruder
    }
    extra = interior_seeds.get(os.path.basename(path_out), [])
    edge_seeds = edge_seeds + extra

    bg = set()
    seen_seeds = set()
    for sx, sy in edge_seeds:
        if (sx, sy) in bg or (sx, sy) in seen_seeds:
            continue
        seen_seeds.add((sx, sy))
        r, g, b, _ = pixels[sx, sy]
        if is_bg(r, g, b):
            bg |= flood_fill(pixels, w, h, sx, sy, FUZZ)

    # hard-erase known intruder regions before alpha punch
    intruder_boxes = {
        'buddy.webp': (0, 0, 85, 240),   # top-left stray mini, diagonal ~(0,222)→(74,0)
    }
    if os.path.basename(path_out) in intruder_boxes:
        x0, y0, x1, y1 = intruder_boxes[os.path.basename(path_out)]
        for ix in range(x0, x1):
            for iy in range(y0, y1):
                pixels[ix, iy] = (0, 0, 0, 0)

    # punch out background pixels
    for (x, y) in bg:
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)

    # feather alpha edges
    alpha = img.split()[3]
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=FEATHER))
    img.putalpha(alpha)

    # resize
    ratio = OUT_WIDTH / w
    img = img.resize((OUT_WIDTH, int(h * ratio)), Image.LANCZOS)

    img.save(path_out, 'WEBP', quality=85, method=6)
    size = os.path.getsize(path_out)
    print(f'{path_out}: {img.size[0]}x{img.size[1]}, {size//1024}KB')

base = os.path.dirname(__file__)
files = [
    ('ultramarines-jumppack-captain-and-his-buddy-v0-f4xp1rhout4c1.webp', 'captain.webp'),
    ('ultramarines-jumppack-captain-and-his-buddy-v0-v9mztmmout4c1.webp', 'buddy.webp'),
]
for src, dst in files:
    remove_bg(os.path.join(base, src), os.path.join(base, dst))
