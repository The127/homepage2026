import { JSX } from 'solid-js';

/**
 * A band across the full window width on `surface-container`, like the top of
 * a page. Its content stays in the page's content column.
 */
export default function Band(props: { class?: string; children: JSX.Element }) {
  return (
    <div class="full-bleed border-b border-outline-variant bg-surface-container">
      <div class={props.class}>{props.children}</div>
    </div>
  );
}
