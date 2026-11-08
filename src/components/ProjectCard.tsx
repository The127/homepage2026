import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import Card from '~/components/Card';
import Chips from '~/components/Chips';
import ProjectLinks from '~/components/ProjectLinks';
import type { Project } from '~/data/projects';

/**
 * A project as an outlined card. The title link covers the whole card, so a
 * click anywhere opens the project. The links at the bottom sit above it.
 */
export default function ProjectCard(props: { project: Project; links?: boolean }) {
  const p = () => props.project;
  return (
    <Card class="relative flex flex-col transition-state hover:bg-surface-container">
      <h3 class="text-xl">
        <A
          href={`/projects/${p().slug}`}
          class="text-on-surface no-underline after:absolute after:inset-0 after:rounded-xl hover:text-primary hover:underline"
        >
          {p().name}
        </A>
      </h3>
      <p class="mt-2">{p().summary}</p>
      <Show when={p().note}>
        <p class="mt-1 text-on-surface-variant">{p().note}</p>
      </Show>
      <Chips items={p().languages} class="mt-auto pt-4" />
      <Show when={props.links}>
        <ProjectLinks project={p()} class="relative z-10 mt-3 text-sm" />
      </Show>
    </Card>
  );
}
