import { createSignal } from 'solid-js';
import Terminal from './Terminal';
import styles from './Hero.module.css';

export default function Hero() {
  const [termOpen, setTermOpen] = createSignal(false);
  return (
    <section id="hero" class={styles.hero}>
      <div class={styles.bgGrid} />
      <div class={styles.slash} />
      <div class={`${styles.slash} ${styles.slash2}`} />
      <div class={`${styles.sq} ${styles.sq1}`} />
      <div class={`${styles.sq} ${styles.sq2}`} />
      <div class={`${styles.sq} ${styles.sq3}`} />
      <div class={`${styles.sq} ${styles.sq4}`} />
      <div class={styles.bigNum} aria-hidden="true">KK</div>

      <div class={styles.eyebrow}>// cloud engineer · builder · musician · karlsruhe</div>

      <h1 class={styles.name}>
        <span class={styles.line1}><em>KAROLIN</em></span>
        <span class={styles.line2}><em>KOSTIAL</em></span>
      </h1>

      <p class={styles.tagline}>
        I build the <strong>infrastructure that other builders rely on</strong>.<br />
        Auth systems. Error trackers. Webhook engines. Container registries.<br />
        Also: a browser DAW with a Rust/WASM engine, distributed KV stores, custom languages, and hardware CPUs made of logic chips.
      </p>

      <Terminal onExpandChange={setTermOpen} />

      <div class={styles.cta}>
        <a href="#projects" class="btn btn-y">See My Work</a>
        <a
          href="https://github.com/The127"
          class="btn btn-ghost"
          target="_blank"
          rel="noopener"
        >
          github.com/The127 ↗
        </a>
      </div>

      {!termOpen() && <div class={styles.scrollHint} aria-hidden="true">SCROLL</div>}
    </section>
  );
}
