import styles from './Create.module.css';

export default function Create() {
  return (
    <section id="create" class={styles.section}>
      <div class={styles.music}>
        <div class={styles.bgText} aria-hidden="true">♫</div>
        <div class={styles.icon}>🎛</div>
        <div class={styles.eyebrow}>// outside the terminal</div>
        <h2 class={styles.title}>MUSIC</h2>
        <p class={styles.desc}>
          I make music every once in a while — electronic, experimental,
          somewhere between ambient and "what even is this." It's a good
          way to think about structure and flow without a compiler
          telling you you're wrong.
        </p>
        <div class={styles.barMusic} />
      </div>

      <div class={styles.art}>
        <div class={styles.bgText} aria-hidden="true">◉</div>
        <div class={styles.icon}>🎨</div>
        <div class={styles.eyebrow}>// analog output</div>
        <h2 class={styles.title}>PAINTING</h2>
        <p class={styles.desc}>
          Oil, acrylic, occasionally watercolor. I paint because it demands
          a kind of attention that screens don't. Mistakes stay on the canvas.
          There's no git reset for that.
        </p>
        <div class={styles.barArt} />
      </div>
    </section>
  );
}
