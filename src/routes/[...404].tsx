import { HttpStatusCode } from '@solidjs/start';
import Button from '~/components/Button';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" description="This page doesn't exist." />
      <HttpStatusCode code={404} />
      <PageHeader title="Page not found" intro="This page doesn't exist.">
        <Button href="/">Go to the home page</Button>
      </PageHeader>
    </>
  );
}
