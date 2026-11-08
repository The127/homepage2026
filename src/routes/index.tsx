import { A } from '@solidjs/router';
import { For } from 'solid-js';
import PageMeta from '~/components/PageMeta';
import Section from '~/components/Section';
import { projects } from '~/data/projects';

const NOW_UPDATED = 'November 2026';

export default function Home() {
  return (
    <>
      <PageMeta description="Platform engineer at Giant Swarm. I build open-source infrastructure and make electronic music." />

      <div class="flex flex-col-reverse gap-8 pb-12 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-prose">
          <h1>Karolin Kostial</h1>
          <p class="mt-6 text-lg">
            I'm a platform engineer at Giant Swarm, where I work on our security platform. I'd
            call myself a git archeologist and YAML engineer, though. I live in Karlsruhe. In my
            free time I build open-source infrastructure and make electronic music.
          </p>
          <p class="mt-4 text-lg">And I love raccoons.</p>
        </div>

        <figure class="w-40 shrink-0">
          <img
            src="/raccoon.webp"
            width="600"
            height="399"
            alt="A raccoon peeking out of a hole in a green wall, lying in straw."
            class="aspect-square w-full rounded object-cover object-[50%_55%]"
          />
          <figcaption class="mt-1 text-sm text-on-surface-variant">
            Photo by{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Peeking_Raccoon_(6371172113).jpg">
              Neil McIntosh
            </a>
            , CC BY 2.0
          </figcaption>
        </figure>
      </div>

      <Section title="Now">
        <ul class="list-disc space-y-2 pl-5">
          <li>
            I'm building <A href="/projects/tidegate">Tidegate</A>, which is in early development.
          </li>
          <li>I'm learning to scuba dive and I'm doing my PADI Open Water Diver course.</li>
          <li>I'm learning Chinese and studying for HSK&nbsp;3.</li>
          <li>I'm learning Japanese with an online tutor.</li>
        </ul>
        <p class="mt-4 text-sm text-on-surface-variant">Updated {NOW_UPDATED}</p>
      </Section>

      <Section title="Projects">
        <ul class="space-y-5">
          <For each={projects.filter(p => p.featured)}>
            {p => (
              <li>
                <A href={`/projects/${p.slug}`} class="font-semibold">{p.name}</A>
                <p class="mt-0.5">{p.summary}</p>
              </li>
            )}
          </For>
        </ul>
        <p class="mt-6"><A href="/projects">All projects</A></p>
      </Section>

      <Section title="Music">
        <p>
          I make electronic music as Lia Aura. There are four releases so far.{' '}
          <A href="/music">Listen to them</A>.
        </p>
      </Section>
    </>
  );
}
