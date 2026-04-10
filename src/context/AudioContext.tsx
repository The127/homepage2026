import { createContext, useContext, createSignal, onCleanup, type JSX } from 'solid-js';
import type { Album } from '../data/albums';

interface AudioCtx {
  activeAlbum: () => Album | null;
  trackIdx: () => number;
  playing: () => boolean;
  progress: () => number;
  duration: () => number;
  volume: () => number;
  loadTrack: (album: Album, idx: number, autoplay?: boolean) => void;
  togglePlay: () => void;
  prev: () => void;
  next: () => void;
  seek: (e: MouseEvent) => void;
  setVol: (v: number) => void;
}

const AudioContext = createContext<AudioCtx>();

export function AudioProvider(props: { children: JSX.Element }) {
  const [activeAlbum, setActiveAlbum] = createSignal<Album | null>(null);
  const [trackIdx, setTrackIdx] = createSignal(0);
  const [playing, setPlaying] = createSignal(false);
  const [progress, setProgress] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [volume, setVolume] = createSignal(1);

  const audio = new Audio();
  audio.preload = 'none';
  audio.addEventListener('durationchange', () => setDuration(audio.duration));

  let rafId = 0;
  const startTick = () => {
    cancelAnimationFrame(rafId);
    const tick = () => { setProgress(audio.currentTime); rafId = requestAnimationFrame(tick); };
    rafId = requestAnimationFrame(tick);
  };
  const stopTick = () => cancelAnimationFrame(rafId);

  const loadTrack = (album: Album, idx: number, autoplay = true) => {
    setActiveAlbum(album);
    setTrackIdx(idx);
    audio.src = album.tracks[idx].src;
    if (autoplay) { audio.play(); setPlaying(true); startTick(); }
  };

  const togglePlay = () => {
    if (playing()) { audio.pause(); setPlaying(false); stopTick(); }
    else           { audio.play();  setPlaying(true);  startTick(); }
  };

  const prev = () => {
    const a = activeAlbum();
    if (!a) return;
    loadTrack(a, (trackIdx() - 1 + a.tracks.length) % a.tracks.length);
  };

  const next = () => {
    const a = activeAlbum();
    if (!a) return;
    loadTrack(a, (trackIdx() + 1) % a.tracks.length);
  };

  const seek = (e: MouseEvent) => {
    const bar = e.currentTarget as HTMLElement;
    audio.currentTime = (e.offsetX / bar.clientWidth) * audio.duration;
  };

  const setVol = (v: number) => {
    setVolume(v);
    audio.volume = v;
  };

  audio.addEventListener('ended', () => { stopTick(); next(); });
  onCleanup(() => { stopTick(); audio.pause(); audio.src = ''; });

  return (
    <AudioContext.Provider value={{
      activeAlbum, trackIdx, playing, progress, duration, volume,
      loadTrack, togglePlay, prev, next, seek, setVol,
    }}>
      {props.children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext)!;
}
