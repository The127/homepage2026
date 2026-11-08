export interface Album {
  title: string;
  /** The release type as Spotify lists it. */
  kind: 'Album' | 'EP' | 'Single';
  year: number;
  cover: string;
  coverAlt: string;
  /** The ID in the album's Spotify URL, used for the link and the player. */
  spotifyId: string;
  bandcamp?: string;
  tracks: string[];
}

export const albums: Album[] = [
  {
    title: 'Placeholder Graphic',
    kind: 'Single',
    year: 2025,
    cover: '/covers/placeholder-graphic.jpg',
    coverAlt: 'Cover of Placeholder Graphic: pixelated shapes in blue, orange and red on a grey background.',
    spotifyId: '1Nt2ukjNNqzaeX31zhABKb',
    tracks: ['Outlaw', 'Brainhack'],
  },
  {
    title: '404 Album not found',
    kind: 'Album',
    year: 2022,
    cover: '/covers/404-album-not-found.jpg',
    coverAlt: 'Cover of 404 Album not found: a drawing of hanging vines and roots, in blue and turquoise.',
    spotifyId: '1l9LlUd9ctbrlTorH6ZfP4',
    bandcamp: 'https://liaaura.bandcamp.com/album/404-album-not-found',
    tracks: [
      'Connection Lost',
      'Unresolved Dependencies',
      'VTable',
      'Installation Failure',
      'I Bricked My Boot Process',
      'Coroutine',
      'Interrupt',
    ],
  },
  {
    title: 'Nightfall',
    kind: 'EP',
    year: 2022,
    cover: '/covers/nightfall.jpg',
    coverAlt: 'Cover of Nightfall: a digitally edited pencil drawing of a screaming creature with tentacles, in purple and pink.',
    spotifyId: '2vTQFkMUieDZobF6QOsw8L',
    bandcamp: 'https://liaaura.bandcamp.com/album/nightfall',
    tracks: ['Blindingly Dark', 'Nightfall', 'Vermillion Vortex', 'Fears And Happiness', 'Seraphim', 'North'],
  },
  {
    title: 'Opportunity',
    kind: 'EP',
    year: 2022,
    cover: '/covers/opportunity.jpg',
    coverAlt: 'Cover of Opportunity: a digitally edited pencil drawing of an insect-like creature and a trumpet flower, in yellow and green.',
    spotifyId: '6yOsdBm9pb9S8wrVnV3q0N',
    bandcamp: 'https://liaaura.bandcamp.com/album/opportunity',
    tracks: [
      'Opportunity',
      'Mutant Rising',
      'Magic Rites',
      'Dreaming Of A Place Far Away',
      'Transmission',
      'Bitter End',
    ],
  },
  {
    title: 'Forces',
    kind: 'EP',
    year: 2022,
    cover: '/covers/forces.jpg',
    coverAlt: 'Cover of Forces: a digitally edited pencil drawing of tangled creatures with skulls, in dark purple and green.',
    spotifyId: '1Hyj7yQUmlx3FeBqeCOhGi',
    bandcamp: 'https://liaaura.bandcamp.com/album/forces',
    tracks: ['Awakening', 'Reapers', 'Shattered Worlds', 'Saviour', 'Return', 'Advancing Forces'],
  },
  {
    title: 'Journey',
    kind: 'EP',
    year: 2022,
    cover: '/covers/journey.jpg',
    coverAlt: 'Cover of Journey: a digitally edited pencil drawing of a twisted tree, in blue and purple.',
    spotifyId: '1eGmsKvnZzrKwZHoUwRmEr',
    bandcamp: 'https://liaaura.bandcamp.com/album/journey',
    tracks: [
      'Dark Star',
      'Suns Colliding',
      'Electronic Harmonies',
      'Never Be Alone',
      'Quantum Diffuser',
      'Drifter',
    ],
  },
];

export function spotifyUrl(album: Album): string {
  return `https://open.spotify.com/album/${album.spotifyId}`;
}
