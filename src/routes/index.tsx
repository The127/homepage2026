import { A } from '@solidjs/router';
import PageMeta from '~/components/PageMeta';

export default function Home() {
  return (
    <>
      <PageMeta description="Cloud engineer at Anexia. I build open-source infrastructure." />
      <h1 class="text-3xl font-semibold">Karolin Kostial</h1>
      <p class="mt-4">Placeholder: a short introduction.</p>

      <h2 class="mt-12 text-xl font-semibold">Featured projects</h2>
      <p class="mt-4">Placeholder: a few featured projects.</p>
      <p class="mt-4"><A href="/projects">All projects</A></p>
    </>
  );
}
