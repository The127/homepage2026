import { A, useParams } from '@solidjs/router';
import { JSX, Show } from 'solid-js';
import PageMeta from '~/components/PageMeta';
import ProjectLinks from '~/components/ProjectLinks';
import NotFound from '~/routes/[...404]';
import { findProject, type Project } from '~/data/projects';

function Section(props: { title: string; children: JSX.Element }) {
  return (
    <section class="mt-12">
      <h2>{props.title}</h2>
      <div class="mt-4 space-y-4">{props.children}</div>
    </section>
  );
}

/** Points to the full documentation, so the page doesn't have to repeat it. */
function MoreLink(props: { project: Project }) {
  const docs = () => (props.project.website?.label === 'Docs' ? props.project.website : undefined);
  return (
    <Show
      when={docs()}
      fallback={
        <Show when={props.project.repo}>
          {repo => (
            <p class="mt-12">
              There's more in the <a href={repo()}>README on GitHub</a>.
            </p>
          )}
        </Show>
      }
    >
      {d => (
        <p class="mt-12">
          There's more in the <a href={d().href}>documentation</a>.
        </p>
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
          <p><A href="/projects">Projects</A></p>
          <h1 class="mt-2">{p().name}</h1>
          <p class="mt-1 text-on-surface-variant">
            {p().kind} · {p().languages.join(' · ')}
          </p>
          <p class="mt-4">{p().summary}</p>
          <Show when={p().note}>
            <p class="mt-1 text-on-surface-variant">{p().note}</p>
          </Show>
          <ProjectLinks project={p()} class="mt-4" />

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
