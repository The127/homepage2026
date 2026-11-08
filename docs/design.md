# Design rules

These rules keep the site readable and accessible, and keep it from turning
into a collection of effects. They come from published guides, so you can
check a decision against a source instead of taste:

- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/), the W3C's
  accessibility standard. The site meets level AA.
- Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
  on typography, colour, dark mode, accessibility and motion.
- Google's [Material Design 3](https://m3.material.io/), through the tokens
  in [Material Web](https://github.com/material-components/material-web/tree/main/tokens).
- [Tailwind CSS](https://tailwindcss.com/docs/theme), whose default scales
  the site uses.

The tokens live in `src/app.css`. If you need a value that isn't there,
change the token instead of writing the value into a component.

## Type

Use one typeface for all text, plus a monospace font for code. Apple says to
keep the number of typefaces low, because mixing them blurs the hierarchy.

The text font is [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/),
and code uses its companion, Atkinson Hyperlegible Mono. The Braille
Institute designed them so that similar letters, like `l`, `I` and `1`, are
hard to confuse. Both come from Fontsource and are served from the site
itself, so no visitor data goes to a font service.

Use regular, medium, semibold and bold weights. Avoid thin and light weights,
because they're hard to read at small sizes.

Body text is 1rem (16px) with a line height of 1.5. That matches Material's
`body-large` role and Tailwind's `text-base`. Nothing on the site is smaller
than 0.875rem (14px), which is Material's `body-medium`.

| Element | Tailwind | Size / line height | Material role |
| --- | --- | --- | --- |
| `h1` | `text-4xl` | 2.25rem / 2.5rem | `display-small` |
| `h2` | `text-2xl` | 1.5rem / 2rem | `headline-small` |
| `h3` | `text-xl` | 1.25rem / 1.75rem | `title-large` |
| Body | `text-base` | 1rem / 1.5rem | `body-large` |
| Small | `text-sm` | 0.875rem / 1.25rem | `body-medium` |

Keep lines of text at 65 characters or less with `max-w-prose`. WCAG's limit
is 80 characters (1.4.8).

Don't set labels in uppercase with wide letter spacing. Use weight and size
for hierarchy, as Apple suggests.

## Colour

The colour names follow Material's colour roles. A role says what a colour is
for, not what it looks like:

| Token | Use | Light | Dark |
| --- | --- | --- | --- |
| `surface` | Page background | stone-50 | stone-900 |
| `on-surface` | Text | stone-900 | stone-100 |
| `on-surface-variant` | Secondary text | stone-600 | stone-400 |
| `outline-variant` | Dividers | stone-200 | stone-800 |
| `primary` | Links and focus | violet-700 | violet-300 |

There is one accent colour, `primary`. Use it only for things you can click
or that have focus. Apple warns against using the same colour for different
meanings, so text that isn't a link never gets it.

Text has a contrast of at least 4.5:1 against its background (WCAG 1.4.3).
Body text aims for 7:1, as Apple recommends for custom colours. Focus rings
and borders that identify a control have at least 3:1 (WCAG 1.4.11). The
current values:

| Pair | Light | Dark |
| --- | --- | --- |
| `on-surface` on `surface` | 16.8:1 | 16.0:1 |
| `on-surface-variant` on `surface` | 7.3:1 | 6.8:1 |
| `primary` on `surface` | 7.0:1 | 9.4:1 |

If you change a colour, check these pairs again.

The site follows the system's light or dark setting and has no toggle of its
own. Apple advises against an app-specific setting, because people then have
to change it in two places.

Links in running text are underlined. Colour alone isn't enough to show that
something is a link (WCAG 1.4.1). Links in the header and footer don't need
it, because their position already shows they're links. The nav underlines
the current page instead.

## Layout and spacing

Spacing uses Tailwind's 0.25rem (4px) steps. Material uses the same 4dp grid.

The page works at 320px wide without scrolling sideways (WCAG 1.4.10), and
with text zoomed to 200% (WCAG 1.4.4).

Click targets are at least 24×24px (WCAG 2.5.8). Navigation links are 44px
tall, which is Apple's default control size on iOS. Links inside a sentence
are exempt.

Each page has a skip link to the main content, as the first thing you can
tab to (WCAG 2.4.1).

## Focus

Everything you can click shows a 2px `primary` outline when it has keyboard
focus (WCAG 2.4.7 and 2.4.13). Never remove the outline without replacing it.

## Motion

Add motion only when it explains something, like where a panel came from.
Apple says not to add motion for the sake of motion.

Transitions take 150ms to 300ms, which is Material's `short3` to `medium2`
range. With reduced motion turned on, nothing moves (`motion-safe:` in
Tailwind, WCAG 2.3.3).

Nothing animates on scroll or plays on its own. WCAG counts content that
starts when it scrolls into view as starting automatically (2.2.2).
