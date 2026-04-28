import SectionHeader from './SectionHeader';
import styles from './Stack.module.css';

const stats = [
  { n: '54', label: 'Public repos' },
  { n: '3', label: 'Primary languages' },
  { n: '2', label: 'Server racks' },
  { n: '1', label: 'Custom CPU' },
];

const meta = [
  {
    label: 'Stack',
    value: 'Go · Rust · C# · Vue · TypeScript · Tailwind · PostgreSQL · RabbitMQ · NATS · DDD · CQRS · Mediator · Hexagonal · Containers · BDD · TDD',
  },
  {
    label: 'AI',
    value: 'Claude Code · Agent teams · Ollama',
  },
  {
    label: 'Learning',
    value: 'Gleam',
  },
];

export default function Stack() {
  return (
    <section id="stack" class={styles.section}>
      <SectionHeader num="02" eyebrow="// what I use" title="MY STACK" />

      <div class={styles.body}>
        <div class={`${styles.intro} rv`}>
          <p>
            I gravitate toward architectures that make boundaries explicit and
            intent obvious. Hexagonal architecture keeps infrastructure out of
            the domain. CQRS and the mediator pattern keep reads and writes
            honest. DDD keeps the language of the code aligned with the problem
            being solved.
          </p>
          <p>
            On the infrastructure side I reach for PostgreSQL by default, message
            brokers when workloads need decoupling, and containers for everything
            that runs in production. I test behavior, not implementation.
            BDD for acceptance criteria, TDD for building confidence from the inside out.
          </p>
          <p>
            AI is part of my daily workflow. I run models locally with Ollama,
            use Claude Code for development, and have built multi-agent systems
            where it makes sense to.
          </p>
        </div>

        <div class={styles.sidebar}>
          <div class={`${styles.statsBlock} rv`} style={{ 'transition-delay': '0.1s' }}>
            {stats.map(s => (
              <div class={styles.stat}>
                <div class={styles.statN}>{s.n}</div>
                <div class={styles.statL}>{s.label}</div>
              </div>
            ))}
          </div>

          <div class={`${styles.metaBlock} rv`} style={{ 'transition-delay': '0.2s' }}>
            {meta.map(m => (
              <div class={styles.metaItem}>
                <span class={styles.metaLabel}>{m.label}</span>
                <span class={styles.metaValue}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
