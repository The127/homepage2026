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

      <div class={styles.cookie}>
        🍪 this site uses <strong>0 cookies</strong>. for cookies, check your kitchen.
      </div>

      <div class={styles.copy}>Karolin Kostial · 2026</div>
      <div class={styles.powered}>
        powered by{' '}
        <a href="https://solidjs.com" target="_blank" rel="noopener">SolidJS</a>
        {' + '}
        <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>
        {' + '}
        <a href="https://vercel.com" target="_blank" rel="noopener">Vercel</a>
        {' + '}
        <a href="https://cloudflare.com" target="_blank" rel="noopener">Cloudflare</a>
      </div>
    </footer>
  );
}
