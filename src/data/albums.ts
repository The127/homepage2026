export interface Track {
  title: string;
  src: string;
}

export interface Album {
  title: string;
  kind: 'Album' | 'EP';
  year: number;
  cover: string;
  coverAlt: string;
  bandcamp: string;
  spotify?: string;
  tracks: Track[];
}

export const albums: Album[] = [
  {
    title: 'Nightfall',
    kind: 'Album',
    year: 2022,
    cover: '/covers/nightfall.jpg',
    coverAlt: 'Cover of Nightfall: a digitally edited pencil drawing of a screaming creature with tentacles, in purple and pink.',
    bandcamp: 'https://liaaura.bandcamp.com/album/nightfall',
    tracks: [
      { title: 'Blindingly Dark', src: '/audio/nightfall-blindingly-dark.mp3' },
      { title: 'Nightfall', src: '/audio/nightfall-nightfall.mp3' },
      { title: 'Vermillion Vortex', src: '/audio/nightfall-vermillion-vortex.mp3' },
      { title: 'Fears And Happiness', src: '/audio/nightfall-fears-and-happiness.mp3' },
      { title: 'Seraphim', src: '/audio/nightfall-seraphim.mp3' },
      { title: 'North', src: '/audio/nightfall-north.mp3' },
    ],
  },
  {
    title: 'Opportunity',
    kind: 'EP',
    year: 2022,
    cover: '/covers/opportunity.jpg',
    coverAlt: 'Cover of Opportunity: a digitally edited pencil drawing of an insect-like creature and a trumpet flower, in yellow and green.',
    bandcamp: 'https://liaaura.bandcamp.com/album/opportunity',
    spotify: 'https://open.spotify.com/album/6yOsdBm9pb9S8wrVnV3q0N',
    tracks: [
      { title: 'Opportunity', src: '/audio/opportunity-opportunity.mp3' },
      { title: 'Mutant Rising', src: '/audio/opportunity-mutant-rising.mp3' },
      { title: 'Magic Rites', src: '/audio/opportunity-magic-rites.mp3' },
      { title: 'Dreaming Of A Place Far Away', src: '/audio/opportunity-dreaming-of-a-place-far-away.mp3' },
      { title: 'Transmission', src: '/audio/opportunity-transmission.mp3' },
      { title: 'Bitter End', src: '/audio/opportunity-bitter-end.mp3' },
    ],
  },
  {
    title: 'Forces',
    kind: 'Album',
    year: 2022,
    cover: '/covers/forces.jpg',
    coverAlt: 'Cover of Forces: a digitally edited pencil drawing of tangled creatures with skulls, in dark purple and green.',
    bandcamp: 'https://liaaura.bandcamp.com/album/forces',
    spotify: 'https://open.spotify.com/album/1Hyj7yQUmlx3FeBqeCOhGi',
    tracks: [
      { title: 'Awakening', src: '/audio/forces-awakening.mp3' },
      { title: 'Reapers', src: '/audio/forces-reapers.mp3' },
      { title: 'Shattered Worlds', src: '/audio/forces-shattered-worlds.mp3' },
      { title: 'Saviour', src: '/audio/forces-saviour.mp3' },
      { title: 'Return', src: '/audio/forces-return.mp3' },
      { title: 'Advancing Forces', src: '/audio/forces-advancing-forces.mp3' },
    ],
  },
  {
    title: 'Journey',
    kind: 'Album',
    year: 2022,
    cover: '/covers/journey.jpg',
    coverAlt: 'Cover of Journey: a digitally edited pencil drawing of a twisted tree, in blue and purple.',
    bandcamp: 'https://liaaura.bandcamp.com/album/journey',
    spotify: 'https://open.spotify.com/album/1eGmsKvnZzrKwZHoUwRmEr',
    tracks: [
      { title: 'Dark Star', src: '/audio/journey-dark-star.mp3' },
      { title: 'Suns Colliding', src: '/audio/journey-suns-colliding.mp3' },
      { title: 'Electronic Harmonies', src: '/audio/journey-electronic-harmonies.mp3' },
      { title: 'Never Be Alone', src: '/audio/journey-never-be-alone.mp3' },
      { title: 'Quantum Diffuser', src: '/audio/journey-quantum-diffuser.mp3' },
      { title: 'Drifter', src: '/audio/journey-drifter.mp3' },
    ],
  },
];
