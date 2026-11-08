export interface Library {
  name: string;
  language: 'Go' | 'Rust' | 'C#';
  summary: string;
  repo: string;
}

export const libraries: Library[] = [
  {
    name: 'typed-id',
    language: 'Rust',
    summary: 'Macros for strongly typed UUID and slug IDs.',
    repo: 'https://github.com/The127/typed-id',
  },
  {
    name: 'mediator-rs',
    language: 'Rust',
    summary: 'A mediator for CQRS-style commands, with a pipeline for behaviour that applies to every command.',
    repo: 'https://github.com/The127/mediator-rs',
  },
  {
    name: 'reconstitute',
    language: 'Rust',
    summary: 'A derive macro that rebuilds aggregates from stored state without exposing their fields.',
    repo: 'https://github.com/The127/reconstitute',
  },
  {
    name: 'clock-rs',
    language: 'Rust',
    summary: 'A clock trait with a system clock, and a fake clock for tests.',
    repo: 'https://github.com/The127/clock-rs',
  },
  {
    name: 'signr',
    language: 'Go',
    summary: 'Key management and signing that works the same with any key backend.',
    repo: 'https://github.com/The127/signr',
  },
  {
    name: 'go-runner',
    language: 'Go',
    summary: 'Runs external commands with safe defaults for daemons.',
    repo: 'https://github.com/The127/go-runner',
  },
  {
    name: 'ioc',
    language: 'Go',
    summary: 'Inversion of control with scopes, and transient and singleton services.',
    repo: 'https://github.com/The127/ioc',
  },
  {
    name: 'mediatr',
    language: 'Go',
    summary: 'A mediator inspired by the C# MediatR package.',
    repo: 'https://github.com/The127/mediatr',
  },
  {
    name: 'go-clock',
    language: 'Go',
    summary: 'A clock interface with a system clock, and a mock for tests.',
    repo: 'https://github.com/The127/go-clock',
  },
  {
    name: 'go-random',
    language: 'Go',
    summary: 'An interface for random values, with a mock for tests.',
    repo: 'https://github.com/The127/go-random',
  },
  {
    name: 'FluentBlazorRouter',
    language: 'C#',
    summary: 'A router for Blazor that you configure in code instead of with @page directives.',
    repo: 'https://github.com/The127/FluentBlazorRouter',
  },
];
