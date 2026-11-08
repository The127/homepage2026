import { siSpotify } from 'simple-icons';
import { createSignal, Show } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import Button from '~/components/Button';
import type { Album } from '~/data/albums';

/**
 * Spotify's player for an album, loaded only after a click. Spotify's player
 * sets cookies and sends the visitor's IP address to Spotify, so it must not
 * load with the page. Until the click, nothing is requested from Spotify.
 */
export default function SpotifyPlayer(props: { album: Album }) {
  const [loaded, setLoaded] = createSignal(false);

  return (
    <Show
      when={loaded()}
      fallback={
        <div class="rounded-xl border border-dashed border-outline-variant p-4">
          <Button onClick={() => setLoaded(true)} variant="outlined">
            <BrandIcon icon={siSpotify} />
            Load Spotify player
          </Button>
          <p class="mt-3 text-sm text-on-surface-variant">
            This loads Spotify's player, which sets cookies and sends your IP address to Spotify.
          </p>
        </div>
      }
    >
      <iframe
        // The player only renders after the click. Focus moves to it, because
        // keyboard users would otherwise be left on a button that no longer exists.
        ref={el => queueMicrotask(() => el.focus())}
        src={`https://open.spotify.com/embed/album/${props.album.spotifyId}`}
        title={`Spotify player for ${props.album.title}`}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        class="rounded-xl border-0"
      />
    </Show>
  );
}
