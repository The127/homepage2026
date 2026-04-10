import { useAudio } from '../context/AudioContext';
import styles from './NowPlaying.module.css';

export default function NowPlaying() {
  const { activeAlbum, trackIdx, playing, progress, duration, togglePlay, prev, next } = useAudio();

  const pct = () => duration() ? (progress() / duration()) * 100 : 0;

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div class={styles.bar} classList={{ [styles.visible]: !!activeAlbum() }}>
      {/* progress line across the top */}
      <div class={styles.progress} style={{ width: `${pct()}%` }} />

      {/* album art */}
      <img
        class={styles.thumb}
        src={activeAlbum()?.cover ?? ''}
        alt={activeAlbum()?.title ?? ''}
      />

      {/* track info */}
      <div class={styles.info}>
        <span class={styles.label}>NOW PLAYING</span>
        <span class={styles.track}>{activeAlbum()?.tracks[trackIdx()]?.title ?? ''}</span>
        <span class={styles.album}>{activeAlbum()?.title ?? ''} / Lia Aura</span>
      </div>

      {/* equaliser */}
      <div class={styles.eq} classList={{ [styles.eqActive]: playing() }} aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      {/* transport */}
      <div class={styles.controls}>
        <button class={styles.btn} onClick={prev}>◄◄</button>
        <button class={`${styles.btn} ${styles.btnPlay}`} onClick={togglePlay}>
          {playing() ? '▐▐' : '▶'}
        </button>
        <button class={styles.btn} onClick={next}>►►</button>
      </div>

      {/* time */}
      <span class={styles.time}>{fmt(progress())} / {fmt(duration())}</span>
    </div>
  );
}
