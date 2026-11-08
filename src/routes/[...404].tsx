import { A } from '@solidjs/router';
import { HttpStatusCode } from '@solidjs/start';
import PageMeta from '~/components/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" description="This page doesn't exist." />
      <HttpStatusCode code={404} />
      <h1 class="text-3xl font-semibold">Page not found</h1>
      <p class="mt-4">This page doesn't exist. <A href="/">Go to the home page</A>.</p>
    </>
  );
}
