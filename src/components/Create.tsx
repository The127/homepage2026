import { Show } from 'solid-js';
import { albums } from '../data/albums';
import { useAudio } from '../context/AudioContext';
import Player from './Player';
import styles from './Create.module.css';

export default function Create() {
  const { activeAlbum, trackIdx, playing, progress, duration, volume,
          loadTrack, togglePlay, prev, next, seek, setVol } = useAudio();

  return (
    <section id="create" class={styles.section}>
      <div class={styles.music}>
        <div class={styles.eyebrow}>// outside the terminal</div>
        <h2 class={styles.title}>MUSIC</h2>
        <p class={styles.desc}>
          I make music as <strong>Lia Aura</strong>. Electronic, experimental,
          somewhere between ambient and "what even is this." Four releases out.
        </p>

        <div class={styles.records}>
          {albums.map((a, i) => (
            <div
              class={`${styles.recordWrap} rv`}
              classList={{ [styles.active]: activeAlbum()?.title === a.title }}
              style={{ 'transition-delay': `${i * 0.1}s` }}
            >
              <div class={styles.vinylSlide}>
                <div
                  class={styles.vinyl}
                  classList={{ [styles.spinning]: activeAlbum()?.title === a.title && playing() }}
                  style={{ '--vc': `conic-gradient(from 0deg, ${a.vc.join(', ')})` }}
                >
                  <div class={styles.grooves} />
                  <div class={styles.label}>
                    <img src={a.cover} alt={a.title} class={styles.labelImg} />
                  </div>
                  <div class={styles.hole} />
                </div>
              </div>

              <div class={styles.sleeve} onClick={() => loadTrack(a, 0)}>
                <img src={a.cover} alt={a.title} class={styles.sleeveImg} />
                <div class={styles.sleevePlay}>▶</div>
              </div>

              <div class={styles.recordInfo}>
                <span class={styles.recordTitle}>{a.title}</span>
                <div class={styles.recordLinks}>
                  {a.spotify && (
                    <a href={a.spotify} target="_blank" rel="noopener" class={styles.recordLink}>Spotify</a>
                  )}
                  <a href={a.bandcamp} target="_blank" rel="noopener" class={styles.recordLink}>Bandcamp</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Show when={activeAlbum()}>
          {(album) => (
            <Player
              album={album()}
              trackIdx={trackIdx}
              playing={playing}
              progress={progress}
              duration={duration}
              volume={volume}
              onTrack={(idx) => loadTrack(album(), idx)}
              onToggle={togglePlay}
              onPrev={prev}
              onNext={next}
              onSeek={seek}
              onVolume={setVol}
            />
          )}
        </Show>

        <div class={styles.barMusic} />
      </div>

      <div class={styles.art}>
        <div class={styles.miniGallery}>
          <div class={styles.miniWrap} style={{ '--img': 'url(/wh/captain.webp)' }}>
            <img src="/wh/captain.webp" alt="Ultramarines jump pack captain" class={styles.mini} loading="lazy" />
          </div>
          <div class={styles.miniWrap} style={{ '--img': 'url(/wh/buddy.webp)' }}>
            <img src="/wh/buddy.webp" alt="Ultramarines jump pack marine" class={styles.mini} loading="lazy" />
          </div>
        </div>

        <div class={styles.artText}>
          <div class={styles.eyebrow}>// analog output</div>
          <h2 class={styles.title}>PAINTING</h2>
          <p class={styles.desc}>
            Oil, acrylic, occasionally watercolor. I paint because it demands
            a kind of attention that screens don't. Mistakes stay on the canvas.
            There's no git reset for that.
            <br /><br />
            I also paint <strong>Warhammer miniatures</strong>. Space Marines,
            Necrons, Tyranids, Adepta Sororitas. It's the rare satisfaction of
            making something physical and small and finished.
          </p>
        </div>

        <div class={styles.barArt} />
      </div>
    </section>
  );
}
