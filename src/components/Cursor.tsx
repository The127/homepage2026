import { onMount, onCleanup } from 'solid-js';
import styles from './Cursor.module.css';

export default function Cursor() {
  let curEl!: HTMLDivElement;
  let ringEl!: HTMLDivElement;
  let mx = -200, my = -200;
  let rx = -200, ry = -200;
  let hoverScale = 1;
  let raf: number;

  onMount(() => {
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove, { passive: true });

    document.addEventListener('mouseover', e => {
      if ((e.target as Element).closest('a, button')) {
        document.body.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', e => {
      if ((e.target as Element).closest('a, button')) {
        document.body.classList.remove('hovering');
      }
    });

    const animate = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      const target = document.body.classList.contains('hovering') ? 2.4 : 1;
      hoverScale += (target - hoverScale) * 0.15;

      curEl.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      ringEl.style.transform = `translate(${rx - 18}px, ${ry - 18}px) scale(${hoverScale})`;

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    onCleanup(() => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    });
  });

  return (
    <>
      <div ref={curEl!} class={styles.cur} />
      <div ref={ringEl!} class={styles.ring} />
    </>
  );
}
