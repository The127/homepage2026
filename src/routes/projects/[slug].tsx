import { A, useParams } from '@solidjs/router';
import { siGithub } from 'simple-icons';
import { JSX, Show } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import Button from '~/components/Button';
import Chips from '~/components/Chips';
import Link from '~/components/Link';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import SharedSection from '~/components/Section';
import NotFound from '~/routes/[...404]';
import { findProject, type Project } from '~/data/projects';

function Section(props: { title: string; children: JSX.Element }) {
  return (
    <SharedSection title={props.title}>
      <div class="max-w-prose space-y-4">{props.children}</div>
    </SharedSection>
  );
}

/** Points to the full documentation, so the page doesn't have to repeat it. */
function MoreLink(props: { project: Project }) {
  const target = () => {
    const site = props.project.website;
    if (site?.label === 'Docs') return { href: site.href, label: 'documentation' };
    if (props.project.repo) return { href: props.project.repo, label: 'README on GitHub' };
    return undefined;
  };
  return (
    <Show when={target()}>
      {t => (
        <div class="border-t border-outline-variant pt-10 md:pl-[12.5rem]">
          <p>
            There's more in the <Link href={t().href}>{t().label}</Link>.
          </p>
        </div>
      )}
    </Show>
  );
}

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const project = () => findProject(params.slug);

  return (
    <Show when={project()} fallback={<NotFound />}>
      {p => (
        <>
          <PageMeta title={p().name} description={p().summary} />
          <PageHeader
            title={p().name}
            above={<A href="/projects">Projects</A>}
            intro={
              <>
                {p().summary}
                <Show when={p().note}>
                  <span class="mt-1 block text-base text-on-surface-variant">{p().note}</span>
                </Show>
              </>
            }
          >
            <Chips items={[p().kind, ...p().languages]} />
            <Show when={p().repo || p().website}>
              <div class="mt-6 flex flex-wrap gap-3">
                <Show when={p().website}>
                  {site => <Button href={site().href}>{site().label}</Button>}
                </Show>
                <Show when={p().repo}>
                  {repo => (
                    <Button href={repo()} variant={p().website ? 'outlined' : 'filled'}>
                      <BrandIcon icon={siGithub} />
                      GitHub
                    </Button>
                  )}
                </Show>
              </div>
            </Show>
          </PageHeader>

          <Show when={p().problem}>
            {problem => <Section title="The problem">{problem()()}</Section>}
          </Show>
          <Show when={p().howItWorks}>
            {how => <Section title="How it works">{how()()}</Section>}
          </Show>
          <Section title="Status">{p().status()}</Section>
          <Show when={p().tryIt}>
            {tryIt => (
              <Section title="Try it">
                {tryIt().intro()}
                {/* Keyboard users can only scroll a wide code block if it can take focus. */}
                <pre tabindex="0">
                  <code>{tryIt().code}</code>
                </pre>
              </Section>
            )}
          </Show>

          <MoreLink project={p()} />
        </>
      )}
    </Show>
  );
}
