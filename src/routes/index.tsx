import { A } from '@solidjs/router';
import { For } from 'solid-js';
import Band from '~/components/Band';
import Button from '~/components/Button';
import Link from '~/components/Link';
import PageMeta from '~/components/PageMeta';
import ProjectCard from '~/components/ProjectCard';
import Section from '~/components/Section';
import { albums } from '~/data/albums';
import { projects } from '~/data/projects';

const NOW_UPDATED = 'November 2026';

export default function Home() {
  return (
    <>
      <PageMeta description="Platform engineer at Giant Swarm. I build open-source infrastructure and make electronic music." />

      <Band class="flex flex-col gap-10 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div class="max-w-prose">
            <h1>Karolin Kostial</h1>
            <p class="mt-6 text-lg">
              I'm a platform engineer at Giant Swarm, where I work on our security platform. I'd
              call myself a git archeologist and YAML engineer, though. I live in Karlsruhe. In
              my free time I build open-source infrastructure and make electronic music.
            </p>
            <p class="mt-4 text-lg">And I love raccoons.</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">Projects</Button>
              <Button href="/about" variant="outlined">About me</Button>
            </div>
          </div>

          <figure class="w-48 shrink-0 sm:w-56">
            <img
              src="/raccoon.webp"
              width="600"
              height="399"
              alt="A raccoon peeking out of a hole in a green wall, lying in straw."
              class="aspect-square w-full rounded-xl object-cover object-[50%_55%]"
            />
            <figcaption class="mt-2 text-sm text-on-surface-variant">
              Photo by{' '}
              <Link href="https://commons.wikimedia.org/wiki/File:Peeking_Raccoon_(6371172113).jpg">
                Neil McIntosh
              </Link>
              , CC BY 2.0
            </figcaption>
          </figure>
      </Band>

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
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <For each={projects.filter(p => p.featured)}>{p => <ProjectCard project={p} />}</For>
        </div>
        <div class="mt-6">
          <Button href="/projects" variant="outlined">All projects</Button>
        </div>
      </Section>

      <Section title="Music">
        <p class="max-w-prose">
          I make electronic music as Lia Aura.
        </p>
        <div class="mt-6 grid max-w-2xl grid-cols-3 gap-3 sm:grid-cols-6">
          <For each={albums}>
            {a => (
              <img
                src={a.cover}
                alt={a.coverAlt}
                width="600"
                height="600"
                loading="lazy"
                class="aspect-square w-full rounded-lg"
              />
            )}
          </For>
        </div>
        <div class="mt-6">
          <Button href="/music" variant="outlined">Listen</Button>
        </div>
      </Section>
    </>
  );
}
