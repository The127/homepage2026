import { JSX, Show } from 'solid-js';

/** The title of a page, with an optional intro paragraph in larger text. */
export default function PageHeader(props: { title: string; children?: JSX.Element }) {
  return (
    <div class="pb-12">
      <h1>{props.title}</h1>
      <Show when={props.children}>
        <p class="mt-6 max-w-prose text-lg">{props.children}</p>
      </Show>
    </div>
  );
}
