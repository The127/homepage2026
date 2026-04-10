import styles from './Create.module.css';

const albums = [
  {
    title: 'Journey',
    cover: 'https://liaaura.vercel.app/journey_1400.png',
    spotify: 'https://open.spotify.com/album/1eGmsKvnZzrKwZHoUwRmEr',
    bandcamp: 'https://liaaura.bandcamp.com/album/journey',
    vc: ['#1a0a4a', '#3a10b0', '#8820d0', '#c020a0', '#3a10b0', '#1a0a4a'],
  },
  {
    title: 'Forces',
    cover: 'https://liaaura.vercel.app/Forces.png',
    spotify: 'https://open.spotify.com/album/1Hyj7yQUmlx3FeBqeCOhGi',
    bandcamp: 'https://liaaura.bandcamp.com/album/forces',
    vc: ['#0a1a1a', '#106050', '#208060', '#502890', '#801060', '#0a1a1a'],
  },
  {
    title: 'Opportunity',
    cover: 'https://liaaura.vercel.app/Opportunity_EP.png',
    spotify: 'https://open.spotify.com/album/6yOsdBm9pb9S8wrVnV3q0N',
    bandcamp: 'https://liaaura.bandcamp.com/album/opportunity',
    vc: ['#1a1400', '#504000', '#908010', '#406020', '#103010', '#1a1400'],
  },
  {
    title: 'Nightfall',
    cover: 'https://liaaura.vercel.app/Nightfall.png',
    spotify: null,
    bandcamp: 'https://liaaura.bandcamp.com/album/nightfall',
    vc: ['#1a0020', '#600060', '#c01080', '#4020c0', '#200880', '#1a0020'],
  },
];

export default function Create() {
  return (
    <section id="create" class={styles.section}>

      <div class={styles.music}>
        <div class={styles.bgText} aria-hidden="true">♫</div>
        <div class={styles.eyebrow}>// outside the terminal</div>
        <h2 class={styles.title}>MUSIC</h2>
        <p class={styles.desc}>
          I make music as <strong>Lia Aura</strong>. Electronic, experimental,
          somewhere between ambient and "what even is this." Four releases out
          so far. Hover to play.
        </p>

        <div class={styles.records}>
          {albums.map((a, i) => (
            <div class={`${styles.recordWrap} rv`} style={{ 'transition-delay': `${i * 0.1}s` }}>
              {/* vinyl sits behind sleeve, slides out on hover */}
              <div class={styles.vinylSlide}>
                <div class={styles.vinyl} style={{
                  '--vc': `conic-gradient(from 0deg, ${a.vc.join(', ')})`
                }}>
                  <div class={styles.grooves} />
                  <div class={styles.label}>
                    <img src={a.cover} alt={a.title} class={styles.labelImg} />
                  </div>
                  <div class={styles.hole} />
                </div>
              </div>

              {/* sleeve on top */}
              <div class={styles.sleeve}>
                <img src={a.cover} alt={a.title} class={styles.sleeveImg} />
              </div>

              <div class={styles.recordInfo}>
                <span class={styles.recordTitle}>{a.title}</span>
                <div class={styles.recordLinks}>
                  {a.spotify && (
                    <a href={a.spotify} target="_blank" rel="noopener" class={styles.recordLink}>
                      Spotify
                    </a>
                  )}
                  <a href={a.bandcamp} target="_blank" rel="noopener" class={styles.recordLink}>
                    Bandcamp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class={styles.barMusic} />
      </div>

      <div class={styles.art}>
        <div class={styles.bgText} aria-hidden="true">◉</div>
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
