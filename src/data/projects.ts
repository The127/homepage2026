export interface Project {
  /** The last part of the project's URL, as in `/projects/keyline`. */
  slug: string;
  name: string;
  kind: string;
}

export const projects: Project[] = [
  { slug: 'raccoon-daw', name: 'raccoon-daw', kind: 'Digital audio workstation' },
  { slug: 'keyline', name: 'Keyline', kind: 'Auth server' },
  { slug: 'meerkat', name: 'Meerkat', kind: 'Error tracker' },
  { slug: 'pigeon', name: 'Pigeon', kind: 'Webhook delivery' },
  { slug: 'hivetrack', name: 'Hivetrack', kind: 'Project management' },
  { slug: 'dockyard', name: 'Dockyard', kind: 'Container registry' },
  { slug: 'mako', name: 'Mako', kind: 'Key-value store' },
  { slug: 'hsk-trainer', name: 'hsk-trainer', kind: 'Language learning' },
];

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
