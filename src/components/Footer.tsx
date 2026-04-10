import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.term}>
        <div class={styles.prompt}>~/karolin $</div>
        <div class={styles.cmd}>
          open{' '}
          <a href="https://github.com/The127" target="_blank" rel="noopener">
            github.com/The127
          </a>
        </div>
      </div>

      <div class={styles.links}>
        <a href="https://github.com/The127" target="_blank" rel="noopener">GitHub</a>
        <a href="https://keyline.karo.gay" target="_blank" rel="noopener">Keyline</a>
        <a href="https://meerkat.karo.gay" target="_blank" rel="noopener">Meerkat</a>
      </div>

      <div class={styles.copy}>Karolin Kostial · 2026</div>
    </footer>
  );
}
