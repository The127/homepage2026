import { A } from '@solidjs/router';
import { For, Show } from 'solid-js';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import ProjectLinks from '~/components/ProjectLinks';
import Section from '~/components/Section';
import { contributions } from '~/data/contributions';
import { libraries, type Library } from '~/data/libraries';
import { projects } from '~/data/projects';

function LibraryList(props: { language: Library['language'] }) {
  return (
    <>
      <h3 class="mt-8 text-base font-semibold text-on-surface-variant first:mt-0">
        {props.language}
      </h3>
      <ul class="mt-3 space-y-3">
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
      <PageHeader title="Projects">Most of what I build is open source.</PageHeader>

      <For each={projects}>
        {p => (
          <section class="grid gap-x-10 gap-y-2 border-t border-outline-variant py-8 md:grid-cols-[10rem_1fr]">
            <div>
              <h2 class="text-xl">
                <A href={`/projects/${p.slug}`}>{p.name}</A>
              </h2>
              <p class="mt-1 text-sm text-on-surface-variant">{p.languages.join(' · ')}</p>
            </div>
            <div class="max-w-prose">
              <p>{p.summary}</p>
              <Show when={p.note}>
                <p class="mt-1 text-on-surface-variant">{p.note}</p>
              </Show>
              <ProjectLinks project={p} class="mt-2 text-sm" />
            </div>
          </section>
        )}
      </For>

      <Section title="Contributions">
        <p>Projects by other people that I've worked on.</p>
        <ul class="mt-6 space-y-6">
          <For each={contributions}>
            {c => (
              <li>
                <span class="font-semibold">{c.name}</span>
                <span class="text-on-surface-variant">, {c.about.charAt(0).toLowerCase() + c.about.slice(1)}</span>
                <p class="mt-1">
                  {c.work} <a href={c.link.href}>{c.link.label}</a>
                </p>
              </li>
            )}
          </For>
        </ul>
      </Section>

      <Section title="Libraries">
        <LibraryList language="Go" />
        <LibraryList language="Rust" />
        <LibraryList language="C#" />
      </Section>
    </>
  );
}
