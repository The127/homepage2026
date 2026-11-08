export interface Project {
  /** The last part of the project's URL, as in `/projects/keyline`. */
  slug: string;
  name: string;
  kind: string;
  /** One sentence for lists and link previews. */
  summary: string;
  /** Featured projects are listed on the home page. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'tidegate',
    name: 'Tidegate',
    kind: 'Privileged access management',
    summary: 'Gives people access to infrastructure only when they need it, and only as much as they need.',
    featured: true,
  },
  {
    slug: 'aibox',
    name: 'aibox',
    kind: 'Sandbox for Claude Code',
    summary: 'Runs Claude Code in a small virtual machine that only sees the folders you share and only reaches the hosts you allow.',
    featured: true,
  },
  {
    slug: 'keyline',
    name: 'Keyline',
    kind: 'Auth server',
    summary: 'An OpenID Connect server you host yourself.',
    featured: true,
  },
  {
    slug: 'raccoon-daw',
    name: 'raccoon-daw',
    kind: 'Digital audio workstation',
    summary: 'A music studio in the browser, with an audio engine in Rust and WebAssembly.',
  },
  {
    slug: 'dockyard',
    name: 'Dockyard',
    kind: 'Container registry',
    summary: 'A small, fast OCI container registry you host yourself.',
  },
  {
    slug: 'hivetrack',
    name: 'Hivetrack',
    kind: 'Project management',
    summary: 'Self-hosted task planning for software teams.',
  },
  {
    slug: 'mako',
    name: 'Mako',
    kind: 'Key-value store',
    summary: 'A lightweight key-value store with distributed storage.',
  },
  {
    slug: 'hsk-trainer',
    name: 'hsk-trainer',
    kind: 'Language learning',
    summary: 'A vocabulary trainer for the Chinese HSK exams, with spaced repetition.',
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
