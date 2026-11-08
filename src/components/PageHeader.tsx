import { children, JSX, Show } from 'solid-js';
import Band from '~/components/Band';

/**
 * The top of a page, as a band across the full width: an optional line above
 * the title, the title, an intro paragraph and anything below it, like buttons.
 */
export default function PageHeader(props: {
  title: string;
  above?: JSX.Element;
  intro?: JSX.Element;
  children?: JSX.Element;
}) {
  // Each read of a JSX prop builds its elements again. During hydration the
  // second build finds no server elements left and crashes, so each prop is
  // resolved exactly once here and then only read through these.
  const above = children(() => props.above);
  const intro = children(() => props.intro);
  const below = children(() => props.children);

  return (
    <Band class="py-12 sm:py-16">
      <Show when={above()}>
        <div class="mb-3">{above()}</div>
      </Show>
      <h1>{props.title}</h1>
      <Show when={intro()}>
        <p class="mt-6 max-w-prose text-lg">{intro()}</p>
      </Show>
      <Show when={below()}>
        <div class="mt-8">{below()}</div>
      </Show>
    </Band>
  );
}
