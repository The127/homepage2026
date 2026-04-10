import SectionHeader from './SectionHeader';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" class={styles.section}>
      <SectionHeader num="03" eyebrow="// what I build" title="PROJECTS" />

      <div class={styles.grid}>
        {projects.map((p, i) => (
          <div
            class={`${styles.card} rv`}
            style={{ '--ca': p.accent, 'transition-delay': `${i * 0.08}s` }}
          >
            <div class={styles.cardNum}>{p.num}</div>
            <div class={styles.kind}>{p.kind}</div>
            <div class={styles.name}>{p.name}</div>
            <p class={styles.desc}>{p.desc}</p>
            <div class={styles.langs}>
              {p.langs.map(l => <span class={styles.lang}>{l}</span>)}
            </div>
            <a
              href={p.repo}
              class={styles.link}
              target="_blank"
              rel="noopener"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
