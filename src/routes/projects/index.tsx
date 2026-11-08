import { A } from '@solidjs/router';
import PageMeta from '~/components/PageMeta';
import { projects } from '~/data/projects';

export default function Projects() {
  return (
    <>
      <PageMeta title="Projects" description="Open-source projects and libraries by Karolin Kostial." />
      <h1>Projects</h1>

      <ul class="mt-8 space-y-4">
        {projects.map(p => (
          <li>
            <A href={`/projects/${p.slug}`} class="font-semibold">{p.name}</A>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>

      <h2 class="mt-12">Libraries</h2>
      <p class="mt-4">Placeholder: the Rust and Go libraries.</p>

      <h2 class="mt-12">Contributions</h2>
      <p class="mt-4">Placeholder: projects I contribute to.</p>
    </>
  );
}
