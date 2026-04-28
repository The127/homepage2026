export interface Project {
  num: string;
  kind: string;
  name: string;
  desc: string;
  langs: string[];
  accent: string;
  repo: string | null;
  repoNote?: string;
}

export const projects: Project[] = [
  {
    num: '01',
    kind: 'Digital Audio Workstation',
    name: 'RACCOON-DAW',
    desc: 'Browser-based DAW with a Rust/WASM audio engine. Modular synthesis, full signal routing graph, multiple synth engines, complete effects suite, and viral video export. No installation. Just open and make music.',
    langs: ['Rust', 'WASM', 'SolidJS', 'WebAudio'],
    accent: 'var(--r)',
    repo: 'https://github.com/The127/raccoon-daw',
  },
  {
    num: '02',
    kind: 'Auth Infrastructure',
    name: 'KEYLINE',
    desc: "Open-source OIDC server. Full OAuth2 / OpenID Connect implementation. Self-hostable identity infrastructure, because you shouldn't have to trust a SaaS with your auth.",
    langs: ['Go', 'OIDC', 'WebAuthn'],
    accent: 'var(--y)',
    repo: 'https://github.com/The127/Keyline',
  },
  {
    num: '03',
    kind: 'Observability',
    name: 'MEERKAT',
    desc: 'Self-hosted Sentry alternative. Error events grouped by fingerprint, real-time dashboards, client keys, roles. Written in Rust for the performance it deserves.',
    langs: ['Rust', 'Error Tracking'],
    accent: 'var(--r)',
    repo: 'https://github.com/The127/meerkat',
  },
  {
    num: '04',
    kind: 'Webhook Infrastructure',
    name: 'PIGEON',
    desc: 'Reliable webhook delivery for your infrastructure. Self-hosted, observable, built for production. Send, retry, deliver. Know when something breaks.',
    langs: ['Rust', 'Webhooks'],
    accent: 'var(--b)',
    repo: 'https://github.com/The127/pigeon',
  },
  {
    num: '05',
    kind: 'Project Management',
    name: 'HIVETRACK',
    desc: 'Lean, self-hosted task planning for high-performing software teams. Sprints, epics, milestones, and AI drones that actually help. Built it to use it. Use it every day.',
    langs: ['Go', 'AI Agents'],
    accent: 'var(--g)',
    repo: 'https://github.com/The127/hivetrack',
  },
  {
    num: '06',
    kind: 'Container Infrastructure',
    name: 'DOCKYARD',
    desc: "Simple, fast, self-hostable OCI container registry written in Go. Because pulling images from Docker Hub is someone else's single point of failure.",
    langs: ['Go', 'OCI', 'Containers'],
    accent: 'var(--p)',
    repo: 'https://github.com/The127/dockyard',
  },
  {
    num: '07',
    kind: 'Distributed Storage',
    name: 'MAKO',
    desc: 'Simple, lightweight, fast key-value store with distributed storage. Written in Rust. Sometimes you need a KV store and you want to know exactly how it works.',
    langs: ['Rust', 'Distributed', 'Storage'],
    accent: 'var(--b)',
    repo: 'https://github.com/The127/mako',
  },
  {
    num: '08',
    kind: 'Language Learning',
    name: 'HSK-TRAINER',
    desc: 'HSK 2.0 / 3.0 vocabulary trainer with spaced repetition and interactive games. Built to actually learn Chinese, not just to have a side project.',
    langs: ['Rust', 'Vue 3', 'OIDC'],
    accent: 'var(--g)',
    repo: null,
    repoNote: 'self-hosting it for myself',
  },
];
