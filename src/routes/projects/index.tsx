import { A } from '@solidjs/router';
import { For, Show } from 'solid-js';
import PageMeta from '~/components/PageMeta';
import ProjectLinks from '~/components/ProjectLinks';
import { contributions } from '~/data/contributions';
import { libraries, type Library } from '~/data/libraries';
import { projects } from '~/data/projects';

function LibraryList(props: { language: Library['language'] }) {
  return (
    <>
      <h3 class="mt-8">{props.language}</h3>
      <ul class="mt-4 space-y-3">
        <For each={libraries.filter(l => l.language === props.language)}>
          {l => (
            <li>
              <a href={l.repo} class="font-semibold">{l.name}</a>
              <p>{l.summary}</p>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <PageMeta
        title="Projects"
        description="Open-source projects, libraries and contributions by Karolin Kostial."
      />
      <h1>Projects</h1>
      <p class="mt-4">
        Most of what I build is open source. Some of it I build at work, most of it in my free
        time.
      </p>

      <ul class="mt-6 space-y-8">
        <For each={projects}>
          {p => (
            <li>
              <div class="flex flex-wrap items-baseline gap-x-3">
                <A href={`/projects/${p.slug}`} class="text-xl font-semibold">{p.name}</A>
                <span class="text-sm text-on-surface-variant">{p.languages.join(' · ')}</span>
              </div>
              <p class="mt-1">{p.summary}</p>
              <Show when={p.status}>
                <p class="mt-1 text-on-surface-variant">{p.status}</p>
              </Show>
              <ProjectLinks project={p} class="mt-1 text-sm" />
            </li>
          )}
        </For>
      </ul>

      <h2 class="mt-16">Contributions</h2>
      <p class="mt-4">Projects by other people that I've worked on.</p>
      <ul class="mt-6 space-y-6">
        <For each={contributions}>
          {c => (
            <li>
              <span class="font-semibold">{c.name}</span>
              <p class="mt-1 text-on-surface-variant">{c.about}</p>
              <p class="mt-1">
                {c.work} <a href={c.link.href}>{c.link.label}</a>
              </p>
            </li>
          )}
        </For>
      </ul>

      <h2 class="mt-16">Libraries</h2>
      <p class="mt-4">Small libraries that came out of my projects.</p>
      <LibraryList language="Go" />
      <LibraryList language="Rust" />
      <LibraryList language="C#" />
    </>
  );
}
