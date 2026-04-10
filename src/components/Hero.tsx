import { onMount } from 'solid-js';
import styles from './Hero.module.css';

export default function Hero() {
  let termContainer!: HTMLDivElement;
  let termOut!: HTMLDivElement;
  let termCursorLine!: HTMLDivElement;

  onMount(() => {
    const typeText = (el: HTMLElement, text: string, cb?: () => void) => {
      let i = 0;
      const t = setInterval(() => {
        el.textContent += text[i++];
        if (i >= text.length) {
          clearInterval(t);
          cb?.();
        }
      }, 28);
    };

    const addCommand = (cmd: string, out: string, cb?: () => void) => {
      const line = document.createElement('div');
      line.className = styles.termLine;

      const p = document.createElement('span');
      p.className = styles.prompt;
      p.textContent = '$';

      const c = document.createElement('span');
      c.className = styles.cmd;
      c.textContent = ' ' + cmd;

      const o = document.createElement('div');
      o.className = styles.out;

      line.appendChild(p);
      line.appendChild(c);
      termContainer.insertBefore(line, termCursorLine);
      termContainer.insertBefore(o, termCursorLine);

      typeText(o, out, cb);
    };

    setTimeout(() => {
      typeText(termOut, 'karolin kostial — cloud engineer, builder', () => {
        setTimeout(() => {
          addCommand('ls infra/', '2x racks  juniper  raspberry-pis  ai-agent  ...', () => {
            setTimeout(() => {
              addCommand('ls projects/ | wc -l', '54');
            }, 300);
          });
        }, 400);
      });
    }, 1100);
  });

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

      <div class={styles.eyebrow}>// cloud engineer · builder · karlsruhe</div>

      <h1 class={styles.name}>
        <span class={styles.line1}><em>KAROLIN</em></span>
        <span class={styles.line2}><em>KOSTIAL</em></span>
      </h1>

      <p class={styles.tagline}>
        I build the <strong>infrastructure that other builders rely on</strong>.<br />
        Auth systems. Error trackers. Webhook engines. Container registries.<br />
        Also: distributed KV stores, custom languages, and hardware CPUs made of logic chips.
      </p>

      <div class={styles.terminal}>
        <div ref={termContainer!} class={styles.termBody}>
          <div class={styles.termLine}>
            <span class={styles.prompt}>$</span>
            <span class={styles.cmd}> whoami</span>
          </div>
          <div ref={termOut!} class={styles.out} />
          <div ref={termCursorLine!} class={styles.termLine}>
            <span class={styles.prompt}>$</span>
            <span class={styles.blink} />
          </div>
        </div>
      </div>

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

      <div class={styles.scrollHint} aria-hidden="true">SCROLL</div>
    </section>
  );
}
