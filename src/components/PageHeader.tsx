import { JSX, Show } from 'solid-js';
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
  return (
    <Band class="py-12 sm:py-16">
      <Show when={props.above}>
        <div class="mb-3">{props.above}</div>
      </Show>
      <h1>{props.title}</h1>
      <Show when={props.intro}>
        <p class="mt-6 max-w-prose text-lg">{props.intro}</p>
      </Show>
      <Show when={props.children}>
        <div class="mt-8">{props.children}</div>
      </Show>
    </Band>
  );
}
