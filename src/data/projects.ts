export interface Project {
  num: string;
  kind: string;
  name: string;
  desc: string;
  langs: string[];
  accent: string;
  repo: string;
}

export const projects: Project[] = [
  {
    num: '01',
    kind: 'Auth Infrastructure',
    name: 'KEYLINE',
    desc: "Open-source OIDC server. Full OAuth2 / OpenID Connect implementation. Self-hostable identity infrastructure — because you shouldn't have to trust a SaaS with your auth.",
    langs: ['Go', 'OIDC', 'WebAuthn'],
    accent: 'var(--y)',
    repo: 'https://github.com/The127/Keyline',
  },
  {
    num: '02',
    kind: 'Observability',
    name: 'MEERKAT',
    desc: 'Self-hosted Sentry alternative. Error events grouped by fingerprint, real-time dashboards, client keys, roles. Written in Rust for the performance it deserves.',
    langs: ['Rust', 'Error Tracking'],
    accent: 'var(--r)',
    repo: 'https://github.com/The127/meerkat',
  },
  {
    num: '03',
    kind: 'Webhook Infrastructure',
    name: 'PIGEON',
    desc: 'Reliable webhook delivery for your infrastructure. Self-hosted, observable, built for production. Send, retry, deliver — and know when something breaks.',
    langs: ['Rust', 'Webhooks'],
    accent: 'var(--b)',
    repo: 'https://github.com/The127/pigeon',
  },
  {
    num: '04',
    kind: 'Project Management',
    name: 'HIVETRACK',
    desc: 'Lean, self-hosted task planning for high-performing software teams. Sprints, epics, milestones, and AI drones that actually help. Built it to use it. Use it every day.',
    langs: ['Go', 'AI Agents'],
    accent: 'var(--g)',
    repo: 'https://github.com/The127/hivetrack',
  },
  {
    num: '05',
    kind: 'Container Infrastructure',
    name: 'DOCKYARD',
    desc: "Simple, fast, self-hostable OCI container registry written in Go. Because pulling images from Docker Hub is someone else's single point of failure.",
    langs: ['Go', 'OCI', 'Containers'],
    accent: 'var(--p)',
    repo: 'https://github.com/The127/dockyard',
  },
  {
    num: '06',
    kind: 'Distributed Storage',
    name: 'MAKO',
    desc: 'Simple, lightweight, fast key-value store with distributed storage. Written in Rust. Sometimes you need a KV store and you want to know exactly how it works.',
    langs: ['Rust', 'Distributed', 'Storage'],
    accent: 'var(--b)',
    repo: 'https://github.com/The127/mako',
  },
];
