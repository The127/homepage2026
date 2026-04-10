export interface Track {
  title: string;
  src: string;
}

export interface Album {
  title: string;
  cover: string;
  spotify: string | null;
  bandcamp: string;
  vc: string[];
  tracks: Track[];
}

export const albums: Album[] = [
  {
    title: 'Journey',
    cover: 'https://liaaura.vercel.app/journey_1400.png',
    spotify: 'https://open.spotify.com/album/1eGmsKvnZzrKwZHoUwRmEr',
    bandcamp: 'https://liaaura.bandcamp.com/album/journey',
    vc: ['#1a0a4a', '#3a10b0', '#8820d0', '#c020a0', '#3a10b0', '#1a0a4a'],
    tracks: [
      { title: 'Dark Star',            src: '/audio/journey-dark-star.mp3' },
      { title: 'Suns Colliding',       src: '/audio/journey-suns-colliding.mp3' },
      { title: 'Electronic Harmonies', src: '/audio/journey-electronic-harmonies.mp3' },
      { title: 'Never Be Alone',       src: '/audio/journey-never-be-alone.mp3' },
      { title: 'Quantum Diffuser',     src: '/audio/journey-quantum-diffuser.mp3' },
      { title: 'Drifter',              src: '/audio/journey-drifter.mp3' },
    ],
  },
  {
    title: 'Forces',
    cover: 'https://liaaura.vercel.app/Forces.png',
    spotify: 'https://open.spotify.com/album/1Hyj7yQUmlx3FeBqeCOhGi',
    bandcamp: 'https://liaaura.bandcamp.com/album/forces',
    vc: ['#0a1a1a', '#106050', '#208060', '#502890', '#801060', '#0a1a1a'],
    tracks: [
      { title: 'Awakening',        src: '/audio/forces-awakening.mp3' },
      { title: 'Reapers',          src: '/audio/forces-reapers.mp3' },
      { title: 'Shattered Worlds', src: '/audio/forces-shattered-worlds.mp3' },
      { title: 'Saviour',          src: '/audio/forces-saviour.mp3' },
      { title: 'Return',           src: '/audio/forces-return.mp3' },
      { title: 'Advancing Forces', src: '/audio/forces-advancing-forces.mp3' },
    ],
  },
  {
    title: 'Opportunity',
    cover: 'https://liaaura.vercel.app/Opportunity_EP.png',
    spotify: 'https://open.spotify.com/album/6yOsdBm9pb9S8wrVnV3q0N',
    bandcamp: 'https://liaaura.bandcamp.com/album/opportunity',
    vc: ['#1a1400', '#504000', '#908010', '#406020', '#103010', '#1a1400'],
    tracks: [
      { title: 'Opportunity',                  src: '/audio/opportunity-opportunity.mp3' },
      { title: 'Mutant Rising',                src: '/audio/opportunity-mutant-rising.mp3' },
      { title: 'Magic Rites',                  src: '/audio/opportunity-magic-rites.mp3' },
      { title: 'Dreaming Of A Place Far Away', src: '/audio/opportunity-dreaming-of-a-place-far-away.mp3' },
      { title: 'Transmission',                 src: '/audio/opportunity-transmission.mp3' },
      { title: 'Bitter End',                   src: '/audio/opportunity-bitter-end.mp3' },
    ],
  },
  {
    title: 'Nightfall',
    cover: 'https://liaaura.vercel.app/Nightfall.png',
    spotify: null,
    bandcamp: 'https://liaaura.bandcamp.com/album/nightfall',
    vc: ['#1a0020', '#600060', '#c01080', '#4020c0', '#200880', '#1a0020'],
    tracks: [
      { title: 'Blindingly Dark',     src: '/audio/nightfall-blindingly-dark.mp3' },
      { title: 'Nightfall',           src: '/audio/nightfall-nightfall.mp3' },
      { title: 'Vermillion Vortex',   src: '/audio/nightfall-vermillion-vortex.mp3' },
      { title: 'Fears And Happiness', src: '/audio/nightfall-fears-and-happiness.mp3' },
      { title: 'Seraphim',            src: '/audio/nightfall-seraphim.mp3' },
      { title: 'North',               src: '/audio/nightfall-north.mp3' },
    ],
  },
];
