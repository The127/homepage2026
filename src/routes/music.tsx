import { siBandcamp, siSpotify } from 'simple-icons';
import { For, Show } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Chips from '~/components/Chips';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import SpotifyPlayer from '~/components/SpotifyPlayer';
import { albums, spotifyUrl } from '~/data/albums';

export default function Music() {
  return (
    <>
      <PageMeta
        title="Music"
        description="Electronic music by Karolin Kostial as Lia Aura."
      />
      <PageHeader
        title="Music"
        intro="I make electronic music as Lia Aura. You can listen to it on Bandcamp and Spotify."
      />

      <div class="mt-10 space-y-6">
        <For each={albums}>
          {album => (
            <Card as="section" class="grid gap-x-10 gap-y-6 sm:grid-cols-[12rem_1fr] sm:p-8">
              <img
                src={album.cover}
                alt={album.coverAlt}
                width="600"
                height="600"
                loading="lazy"
                class="w-48 rounded-lg"
              />
              <div class="min-w-0">
                <h2>{album.title}</h2>
                <Chips items={[album.kind, album.year]} class="mt-3" />
                <div class="mt-4 flex flex-wrap gap-3">
                  <Button href={spotifyUrl(album)} variant="outlined">
                    <BrandIcon icon={siSpotify} />
                    Spotify
                  </Button>
                  <Show when={album.bandcamp}>
                    {bandcamp => (
                      <Button href={bandcamp()} variant="outlined">
                        <BrandIcon icon={siBandcamp} />
                        Bandcamp
                      </Button>
                    )}
                  </Show>
                </div>

                <ol class="mt-6 list-decimal space-y-1 pl-6 marker:text-on-surface-variant">
                  <For each={album.tracks}>{track => <li>{track}</li>}</For>
                </ol>

                <div class="mt-6">
                  <SpotifyPlayer album={album} />
                </div>
              </div>
            </Card>
          )}
        </For>
      </div>
    </>
  );
}
