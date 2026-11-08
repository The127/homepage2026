import Pause from 'lucide-solid/icons/pause';
import Play from 'lucide-solid/icons/play';
import { siBandcamp, siSpotify } from 'simple-icons';
import { createEffect, createSignal, For, on, Show } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import PageMeta from '~/components/PageMeta';
import { albums, type Album } from '~/data/albums';

interface Playing {
  album: Album;
  index: number;
}

export default function Music() {
  const [current, setCurrent] = createSignal<Playing>();
  const [paused, setPaused] = createSignal(true);
  let audio: HTMLAudioElement | undefined;

  // Starts the track once its audio element has the new source. A browser
  // only allows this because it follows the click on a play button.
  createEffect(
    on(current, playing => {
      if (playing && audio) audio.play().catch(() => setPaused(true));
    }),
  );

  const isCurrent = (album: Album, index: number) =>
    current()?.album === album && current()?.index === index;

  function toggle(album: Album, index: number) {
    if (isCurrent(album, index) && audio) {
      if (audio.paused) audio.play();
      else audio.pause();
    } else {
      setCurrent({ album, index });
    }
  }

  function playNext() {
    const playing = current();
    if (playing && playing.index + 1 < playing.album.tracks.length) {
      setCurrent({ album: playing.album, index: playing.index + 1 });
    }
  }

  return (
    <>
      <PageMeta
        title="Music"
        description="Electronic music by Karolin Kostial as Lia Aura: three albums and an EP."
      />
      <h1>Music</h1>
      <p class="mt-4">
        I make electronic music as Lia Aura. Three albums and an EP came out in 2022. You can
        listen to every track here, or buy them on Bandcamp.
      </p>

      <For each={albums}>
        {album => (
          <section class="mt-16 grid gap-6 sm:grid-cols-[10rem_1fr]">
            <img
              src={album.cover}
              alt={album.coverAlt}
              width="600"
              height="600"
              loading="lazy"
              class="w-40 rounded"
            />
            <div>
              <h2>{album.title}</h2>
              <p class="mt-1 text-on-surface-variant">
                {album.kind} · {album.year}
              </p>
              <ul class="mt-2 flex flex-wrap gap-x-6 text-sm">
                <li>
                  <a href={album.bandcamp} class="inline-flex min-h-6 items-center gap-1.5">
                    <BrandIcon icon={siBandcamp} />
                    Bandcamp
                  </a>
                </li>
                <Show when={album.spotify}>
                  {spotify => (
                    <li>
                      <a href={spotify()} class="inline-flex min-h-6 items-center gap-1.5">
                        <BrandIcon icon={siSpotify} />
                        Spotify
                      </a>
                    </li>
                  )}
                </Show>
              </ul>

              <ol class="mt-4">
                <For each={album.tracks}>
                  {(track, index) => {
                    const playing = () => isCurrent(album, index()) && !paused();
                    return (
                      <li>
                        <button
                          type="button"
                          onClick={() => toggle(album, index())}
                          aria-label={`${playing() ? 'Pause' : 'Play'} ${track.title}`}
                          class="flex min-h-11 w-full items-center gap-3 text-left hover:text-primary"
                          classList={{ 'text-primary': isCurrent(album, index()) }}
                        >
                          <span class="w-5 text-right text-sm text-on-surface-variant tabular-nums">
                            {index() + 1}
                          </span>
                          <Show
                            when={playing()}
                            fallback={<Play aria-hidden="true" class="size-4 shrink-0" />}
                          >
                            <Pause aria-hidden="true" class="size-4 shrink-0" />
                          </Show>
                          {track.title}
                        </button>
                      </li>
                    );
                  }}
                </For>
              </ol>

              <Show when={current()?.album === album ? album.tracks[current()!.index] : undefined}>
                {track => (
                  <audio
                    ref={audio}
                    src={track().src}
                    controls
                    aria-label={`Player for ${track().title}`}
                    // A removed player still reports that it paused, after the new one
                    // started. Only the current player may change the state.
                    onPlay={e => e.currentTarget === audio && setPaused(false)}
                    onPause={e => e.currentTarget === audio && setPaused(true)}
                    onEnded={playNext}
                    class="mt-4 w-full"
                  />
                )}
              </Show>
            </div>
          </section>
        )}
      </For>
    </>
  );
}
