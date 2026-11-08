import { JSX } from 'solid-js';

/**
 * A page section with its heading in a narrow left column on wide screens,
 * like the margin of a book. On narrow screens the heading sits on top.
 */
export default function Section(props: { title: string; children: JSX.Element }) {
  return (
    <section class="grid gap-x-10 gap-y-4 border-t border-outline-variant py-10 first-of-type:border-t-0 md:grid-cols-[10rem_1fr]">
      <h2 class="text-base font-semibold text-on-surface-variant md:pt-0.5">{props.title}</h2>
      <div class="min-w-0">{props.children}</div>
    </section>
  );
}
