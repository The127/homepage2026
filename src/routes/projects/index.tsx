import { For } from 'solid-js';
import Card from '~/components/Card';
import Link from '~/components/Link';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import ProjectCard from '~/components/ProjectCard';
import Section from '~/components/Section';
import { contributions } from '~/data/contributions';
import { libraries, type Library } from '~/data/libraries';
import { projects, type Project } from '~/data/projects';

const isGame = (p: Project) => p.kind === 'Game';

function LibraryList(props: { language: Library['language'] }) {
  return (
    <>
      <h3 class="mt-8 text-base font-semibold text-on-surface-variant first:mt-0">
        {props.language}
      </h3>
      <ul class="mt-3 divide-y divide-outline-variant border-y border-outline-variant">
        <For each={libraries.filter(l => l.language === props.language)}>
          {l => (
            <li class="grid gap-x-6 gap-y-0.5 py-3 sm:grid-cols-[11rem_1fr]">
              <Link href={l.repo} class="font-semibold">{l.name}</Link>
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
      <PageHeader title="Projects" intro="Most of what I build is open source." />

      <Section title="Projects">
        <div class="grid gap-4 lg:grid-cols-2">
          <For each={projects.filter(p => !isGame(p))}>{p => <ProjectCard project={p} links />}</For>
        </div>
      </Section>

      <Section title="Games">
        <div class="grid gap-4 lg:grid-cols-2">
          <For each={projects.filter(isGame)}>{p => <ProjectCard project={p} links />}</For>
        </div>
      </Section>

      <Section title="Contributions">
        <p class="max-w-prose">Projects by other people that I've worked on.</p>
        <div class="mt-6 grid gap-4 lg:grid-cols-2">
          <For each={contributions}>
            {c => (
              <Card class="flex flex-col">
                <h3 class="text-xl">{c.name}</h3>
                <p class="mt-1 text-on-surface-variant">{c.about}</p>
                <p class="mt-3">{c.work}</p>
                <p class="mt-auto pt-4 text-sm">
                  <Link href={c.link.href}>{c.link.label}</Link>
                </p>
              </Card>
            )}
          </For>
        </div>
      </Section>

      <Section title="Libraries">
        <LibraryList language="Go" />
        <LibraryList language="Rust" />
        <LibraryList language="C#" />
      </Section>
    </>
  );
}
