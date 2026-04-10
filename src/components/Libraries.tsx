import SectionHeader from './SectionHeader';
import { libraries } from '../data/libraries';
import styles from './Libraries.module.css';

export default function Libraries() {
  return (
    <section id="libs" class={styles.section}>
      <SectionHeader num="04" eyebrow="// the ecosystem" title="LIBRARIES" />

      <div class={styles.grid}>
        {libraries.map((lib, i) => (
          <div
            class={`${styles.card} rv`}
            style={{ '--ca': lib.accent, 'transition-delay': `${i * 0.06}s` }}
          >
            <div class={styles.lang}>{lib.lang}</div>
            <div class={styles.name}>{lib.name}</div>
            <p class={styles.desc}>{lib.desc}</p>
            <a href={lib.link} class={styles.link} target="_blank" rel="noopener">
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
