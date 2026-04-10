export interface Library {
  lang: string;
  name: string;
  desc: string;
  accent: string;
  link: string;
}

export const libraries: Library[] = [
  {
    lang: 'Rust',
    name: 'typed-id',
    desc: 'Proc macros for strongly-typed UUID and slug newtypes. uuid_id!(FooId) generates wrappers with serde, Debug, Hash, and utoipa schema support.',
    accent: 'var(--r)',
    link: 'https://github.com/The127/typed-id',
  },
  {
    lang: 'Rust',
    name: 'mediator-rs',
    desc: 'CQRS-style mediator with type-safe command dispatch, composable pipeline behaviors, and a TypeId-keyed extensions map for cross-cutting metadata.',
    accent: 'var(--r)',
    link: 'https://github.com/The127/mediator-rs',
  },
  {
    lang: 'Rust',
    name: 'reconstitute',
    desc: 'Derive macro for aggregate hydration. Generates a {Name}State struct and reconstitute() constructor for rebuilding aggregates from persistent state.',
    accent: 'var(--r)',
    link: 'https://github.com/The127/reconstitute',
  },
  {
    lang: 'Rust',
    name: 'clock-rs',
    desc: 'Minimal Clock trait over DateTime<Utc>. Ships a SystemClock for production and a FakeClock (behind test-utils feature) for deterministic time control.',
    accent: 'var(--r)',
    link: 'https://github.com/The127/clock-rs',
  },
  {
    lang: 'Go',
    name: 'ioc',
    desc: 'Lightweight inversion of control for Go with scopes, transient and singleton services, and typed resolution functions. No reflection magic.',
    accent: 'var(--y)',
    link: 'https://github.com/The127/ioc',
  },
  {
    lang: 'Go',
    name: 'mediatr',
    desc: 'Go mediator implementation inspired by C# MediatR. CQRS patterns without the ceremony. Commands, queries, handlers. Clean and idiomatic.',
    accent: 'var(--y)',
    link: 'https://github.com/The127/mediatr',
  },
  {
    lang: 'Go',
    name: 'signr',
    desc: 'Backend-agnostic key management, rotation, creation, signing and signature verification for Go. Crypto infrastructure that gets out of your way.',
    accent: 'var(--y)',
    link: 'https://github.com/The127/signr',
  },
  {
    lang: 'Rust · Go',
    name: 'raccoonlang',
    desc: 'A custom programming language, because sometimes the best way to understand a compiler is to write one. Also the raccoon branding is non-negotiable.',
    accent: 'var(--b)',
    link: 'https://github.com/The127/raccoonlangRS',
  },
];
