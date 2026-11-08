export interface Link {
  label: string;
  href: string;
}

export interface Project {
  /** The last part of the project's URL, as in `/projects/keyline`. */
  slug: string;
  name: string;
  kind: string;
  /** One or two short sentences for lists and link previews. */
  summary: string;
  languages: string[];
  repo?: string;
  /** A live app or documentation site, if the project has one. */
  website?: Link;
  /** Featured projects are listed on the home page. */
  featured?: boolean;
  /** A short note on how active the project is, if it isn't obvious. */
  status?: string;
}

export const projects: Project[] = [
  {
    slug: 'tidegate',
    name: 'Tidegate',
    kind: 'Privileged access management',
    summary: 'Gives people access to infrastructure only when they need it, and only as much as they need.',
    languages: ['Go'],
    repo: 'https://github.com/tidegate-dev/tidegate',
    website: { label: 'Docs', href: 'https://tidegate-dev.github.io/tidegate/' },
    featured: true,
  },
  {
    slug: 'aibox',
    name: 'aibox',
    kind: 'Sandbox for Claude Code',
    summary: 'Runs Claude Code in a small virtual machine that only sees the folders you share and only reaches the hosts you allow.',
    languages: ['Go'],
    repo: 'https://github.com/The127/aibox',
    website: { label: 'Docs', href: 'https://the127.github.io/aibox/' },
    featured: true,
  },
  {
    slug: 'keyline',
    name: 'Keyline',
    kind: 'Auth server',
    summary: 'An OpenID Connect server that handles logins for your apps, on your own servers.',
    languages: ['Go', 'Vue'],
    repo: 'https://github.com/The127/Keyline',
    featured: true,
  },
  {
    slug: 'raccoon-daw',
    name: 'raccoon-daw',
    kind: 'Digital audio workstation',
    summary: 'A music studio in the browser, with an audio engine in Rust and WebAssembly.',
    languages: ['Rust', 'WebAssembly', 'SolidJS'],
    website: { label: 'Open the app', href: 'https://daw.karo.gay' },
  },
  {
    slug: 'miso',
    name: 'miso',
    kind: 'Image builder',
    summary: 'Builds images of systemd-based operating systems from a Dockerfile-style file, with caching and several output formats.',
    languages: ['Go'],
    repo: 'https://github.com/The127/miso',
  },
  {
    slug: 'dockyard',
    name: 'Dockyard',
    kind: 'Container registry',
    summary: 'A small, fast OCI container registry.',
    languages: ['Go'],
    repo: 'https://github.com/The127/dockyard',
  },
  {
    slug: 'mako',
    name: 'Mako',
    kind: 'Key-value store',
    summary: 'A lightweight key-value store with distributed storage.',
    languages: ['Rust'],
    repo: 'https://github.com/The127/mako',
  },
  {
    slug: 'hsk-trainer',
    name: 'hsk-trainer',
    kind: 'Language learning',
    summary: 'A vocabulary trainer for the Chinese HSK exams, with spaced repetition. I use it for my own Chinese.',
    languages: ['Rust', 'Vue'],
  },
  {
    slug: 'frogly',
    name: 'frogly',
    kind: 'Task planner',
    summary: 'A calm, self-hosted task planner for teams that organise themselves.',
    status: "I don't have much time for it at the moment.",
    languages: ['Go', 'Svelte'],
    repo: 'https://github.com/The127/frogly',
  },
  {
    slug: 'mscript',
    name: 'MScript',
    kind: 'Compiler',
    summary: 'A compiler for the programmable chips in the space game Stationeers. It turns a small C-like language into their MIPS-style assembly.',
    languages: ['Java'],
    repo: 'https://github.com/The127/MScript',
    website: { label: 'Docs', href: 'https://the127.github.io/MScript/mscript/module-summary.html' },
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
