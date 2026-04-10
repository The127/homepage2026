import { Show, For } from 'solid-js';
import type { Album } from '../data/albums';
import styles from './Player.module.css';

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

interface Props {
  album: Album;
  trackIdx: () => number;
  playing: () => boolean;
  progress: () => number;
  duration: () => number;
  volume: () => number;
  onTrack: (idx: number) => void;
  onToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSeek: (e: MouseEvent) => void;
  onVolume: (v: number) => void;
}

export default function Player(p: Props) {
  return (
    <div class={styles.player}>
      {/* left: vinyl + album info */}
      <div class={styles.playerLeft}>
        <div
          class={styles.playerVinyl}
          classList={{ [styles.spinning]: p.playing() }}
          style={{ '--vc': `conic-gradient(from 0deg, ${p.album.vc.join(', ')})` }}
        >
          <div class={styles.grooves} />
          <div class={styles.label}>
            <img src={p.album.cover} alt={p.album.title} class={styles.labelImg} />
          </div>
          <div class={styles.hole} />
        </div>
        <div class={styles.playerAlbumName}>{p.album.title}</div>
        <div class={styles.playerArtist}>Lia Aura</div>
      </div>

      {/* right: track list + controls */}
      <div class={styles.playerRight}>
        <div class={styles.trackList}>
          <For each={p.album.tracks}>
            {(t, i) => (
              <div
                class={styles.trackItem}
                classList={{ [styles.trackActive]: p.trackIdx() === i() }}
                onClick={() => p.onTrack(i())}
              >
                <span class={styles.trackNum}>{String(i() + 1).padStart(2, '0')}</span>
                <span class={styles.trackName}>{t.title}</span>
                <Show when={p.trackIdx() === i() && p.playing()}>
                  <span class={styles.trackBars}>
                    <span /><span /><span />
                  </span>
                </Show>
              </div>
            )}
          </For>
        </div>

        <div class={styles.controls}>
          {/* seek bar — tall hit area, thin visual */}
          <div class={styles.seekHit} onClick={p.onSeek}>
            <div class={styles.seekTrack}>
              <div class={styles.seekFill} style={{
                width: p.duration() ? `${(p.progress() / p.duration()) * 100}%` : '0%'
              }} />
            </div>
          </div>

          <div class={styles.controlRow}>
            <span class={styles.time}>{fmt(p.progress())} / {fmt(p.duration())}</span>

            <div class={styles.btns}>
              <button class={styles.btn} onClick={p.onPrev}>◄◄</button>
              <button class={`${styles.btn} ${styles.btnPlay}`} onClick={p.onToggle}>
                <span class={p.playing() ? styles.iconPause : styles.iconPlay} />
              </button>
              <button class={styles.btn} onClick={p.onNext}>►►</button>
            </div>

            <div class={styles.volumeRow}>
              {/* CSS 3-bar volume icon */}
              <div class={styles.volIcon} aria-hidden="true">
                <span /><span /><span />
              </div>
              {/* wrapper-based filled track */}
              <div class={styles.volTrack}>
                <div class={styles.volFill} style={{ width: `${p.volume() * 100}%` }} />
                <input
                  type="range"
                  class={styles.volSlider}
                  min="0" max="1" step="0.02"
                  value={p.volume()}
                  onInput={(e) => p.onVolume(parseFloat((e.target as HTMLInputElement).value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
