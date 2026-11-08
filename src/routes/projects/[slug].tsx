import { A, useParams } from '@solidjs/router';
import { Show } from 'solid-js';
import PageMeta from '~/components/PageMeta';
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
          <p class="mt-4">{p().kind}</p>
          <p class="mt-4">Placeholder: what it is, why I built it, how it works and its status.</p>
        </>
      )}
    </Show>
  );
}
