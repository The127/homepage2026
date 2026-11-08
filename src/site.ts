/** The public address of the site. Link previews need absolute URLs. */
export const SITE_URL = 'https://homepage2026.vercel.app';

export const SITE_NAME = 'Karolin Kostial';

export interface Image {
  /** A path on this site, like `/og.jpg`. */
  src: string;
  alt: string;
}

/** The preview image for pages without one of their own, 1200x630. */
export const DEFAULT_IMAGE: Image = {
  src: '/og.jpg',
  alt: 'Karolin Kostial: platform engineer at Giant Swarm, builds open-source infrastructure and makes electronic music.',
};
