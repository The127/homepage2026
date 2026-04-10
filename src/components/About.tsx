import SectionHeader from './SectionHeader';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" class={styles.section}>
      <SectionHeader num="01" eyebrow="// who I am" title="ABOUT" />

      <div class={styles.grid}>
        <div class={`${styles.portrait} rv`}>
          <div class={styles.portraitInner}>
            <img src="/raccoon.webp" alt="A peeking raccoon" class={styles.portraitImg} />
          </div>
          <div class={styles.portraitAccent} />
          <p class={styles.portraitCredit}>
            Photo: <a href="https://commons.wikimedia.org/wiki/File:Peeking_Raccoon_(6371172113).jpg" target="_blank" rel="noopener">Neil McIntosh</a>, CC BY 2.0
          </p>
        </div>

        <div class={`${styles.copy} rv`} style={{ 'transition-delay': '0.15s' }}>
          <h2 class={styles.h2}>
            I'm <em>Karolin</em>.<br />I build things that last.
          </h2>

          <p>
            Cloud engineer at <strong>Anexia</strong>, where we run Kubernetes
            as a service for teams who need it to just work. Before that, I built{' '}
            <strong>QOperations</strong> at Phoenix GmbH / Hedgehog. Learned
            how to write software that ships.
          </p>

          <p>
            On my own time I build open-source infrastructure. Not demo projects.
            Auth servers. Error trackers. Webhook engines. Container registries.
            The primitives that production systems are built on.
          </p>

          <p>
            At home I run <strong>2 racks</strong>: Raspberry Pis, old servers,
            Juniper switches. My own AI agent. My own DNS. My own everything.
            I also built an <strong>8-bit CPU from 74LS logic chips</strong> from
            scratch, because understanding things at the base level matters.
          </p>

          <p>
            My favourite animal is the <strong>raccoon</strong>. Highly adaptable,
            nocturnal, and perpetually getting into things they probably shouldn't.
            Relatable.
          </p>

          <div class={styles.meta}>
            <div class={styles.metaItem}>
              <span class={styles.metaLabel}>Education</span>
              <span class={styles.metaValue}>M.Sc. Computer Science</span>
            </div>
            <div class={styles.metaItem}>
              <span class={styles.metaLabel}>Languages</span>
              <span class={styles.metaValue}>
                German <span class={styles.metaNote}>(native)</span>
                {' · '}
                English <span class={styles.metaNote}>(C1/C2)</span>
                {' · '}
                Chinese <span class={styles.metaNote}>(HSK2, learning)</span>
              </span>
            </div>
          </div>

          <div class={styles.tags}>
            {['Cloud Engineering', 'Distributed Systems', 'Auth / OIDC',
              'Rust', 'Go', 'C#', 'Homelab', 'Open Source', 'Compilers', 'Hardware'
            ].map(t => <span class="tag">{t}</span>)}
          </div>

        </div>
      </div>
    </section>
  );
}
