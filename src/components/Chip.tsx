import { JSX } from 'solid-js';

/** A small label, like a language or a release type. It isn't clickable. */
export default function Chip(props: { children: JSX.Element }) {
  return (
    <span class="inline-flex items-center rounded-md bg-outline-variant/60 px-2.5 py-1 text-sm text-on-surface">
      {props.children}
    </span>
  );
}
