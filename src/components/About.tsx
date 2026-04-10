import SectionHeader from './SectionHeader';
import styles from './About.module.css';

const stats = [
  { n: '54', label: 'Public repos' },
  { n: '3', label: 'Primary languages' },
  { n: '2', label: 'Server racks' },
  { n: '1', label: 'Custom CPU' },
];

const tags = [
  'Cloud Engineering', 'Distributed Systems', 'Auth / OIDC',
  'Rust', 'Go', 'C#', 'Homelab', 'Open Source', 'Compilers', 'Hardware',
];

export default function About() {
  return (
    <section id="about" class={styles.section}>
      <SectionHeader num="01" eyebrow="// who I am" title="ABOUT" />

      <div class={styles.grid}>
        <div class={`${styles.portrait} rv`}>
          <div class={styles.portraitInner} />
          <div class={styles.portraitAccent} />
        </div>

        <div class={`${styles.copy} rv`} style={{ 'transition-delay': '0.15s' }}>
          <h2 class={styles.h2}>
            I'm <em>Karolin</em>.<br />I build things that last.
          </h2>

          <p>
            Cloud engineer at <strong>Anexia</strong>, where we run Kubernetes
            as a service for teams who need it to just work. Before that, I built{' '}
            <strong>QOperations</strong> at Phoenix GmbH / Hedgehog — learned
            how to write software that ships.
          </p>

          <p>
            On my own time I build open-source infrastructure. Not demo projects.
            Auth servers. Error trackers. Webhook engines. Container registries.
            The primitives that production systems are built on.
          </p>

          <p>
            At home I run <strong>2 racks</strong> — Raspberry Pis, old servers,
            Juniper switches. My own AI agent. My own DNS. My own everything.
            I also built an <strong>8-bit CPU from 74LS logic chips</strong> from
            scratch, because understanding things at the base level matters.
          </p>

          <div class={styles.stats}>
            {stats.map(s => (
              <div>
                <div class={styles.statN}>{s.n}</div>
                <div class={styles.statL}>{s.label}</div>
              </div>
            ))}
          </div>

          <div class={styles.tags}>
            {tags.map(t => <span class="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
