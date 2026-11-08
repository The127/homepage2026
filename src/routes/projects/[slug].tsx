import { A, useParams } from '@solidjs/router';
import { Show } from 'solid-js';
import PageMeta from '~/components/PageMeta';
import ProjectLinks from '~/components/ProjectLinks';
import NotFound from '~/routes/[...404]';
import { findProject } from '~/data/projects';

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const project = () => findProject(params.slug);

  return (
    <Show when={project()} fallback={<NotFound />}>
      {p => (
        <>
          <PageMeta title={p().name} description={p().summary} />
          <p><A href="/projects">Projects</A></p>
          <h1 class="mt-2">{p().name}</h1>
          <p class="mt-1 text-on-surface-variant">
            {p().kind} · {p().languages.join(' · ')}
          </p>
          <p class="mt-4">{p().summary}</p>
          <Show when={p().status}>
            <p class="mt-1 text-on-surface-variant">{p().status}</p>
          </Show>
          <ProjectLinks project={p()} class="mt-4" />
          <p class="mt-8">Placeholder: why I built it, how it works and its status.</p>
        </>
      )}
    </Show>
  );
}
