import { createSignal, onMount, onCleanup } from 'solid-js';
import styles from './Nav.module.css';

export default function Nav() {
  const [stuck, setStuck] = createSignal(false);

  onMount(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', onScroll));
  });

  return (
    <nav class={`${styles.nav} ${stuck() ? styles.stuck : ''}`}>
      <a href="#hero" class={styles.logo}>KK</a>
      <ul class={styles.links}>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#libs">libraries</a></li>
        <li><a href="#books">reads</a></li>
        <li><a href="#create">create</a></li>
        <li>
          <a href="https://github.com/The127" target="_blank" rel="noopener">
            github ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
