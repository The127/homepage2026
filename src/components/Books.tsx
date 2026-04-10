import SectionHeader from './SectionHeader';
import { books } from '../data/books';
import styles from './Books.module.css';

export default function Books() {
  return (
    <section id="books" class={styles.section}>
      <SectionHeader num="04" eyebrow="// what I read" title="THE SHELF" />

      <div class={styles.shelf}>
        {books.map((b, i) => (
          <div
            class={`${styles.book} rv`}
            style={{ '--rd': `${i * 0.07}s` }}
          >
            <div
              class={styles.spine}
              style={{
                background: b.bg,
                'border-color': b.borderColor,
                '--bc': b.borderColor,
              }}
            >
              <span class={styles.bookTitle} style={{ color: b.textColor }}>
                {b.title}
              </span>
            </div>
            <div class={styles.info}>
              <div class={styles.author}>{b.author}</div>
              <div class={styles.category} style={{ color: b.textColor }}>
                {b.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
