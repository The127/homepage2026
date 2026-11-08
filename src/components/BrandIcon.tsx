import type { SimpleIcon } from 'simple-icons';

/**
 * Draws a brand logo from Simple Icons in the current text colour. It's
 * hidden from screen readers, so always put it next to a text label.
 */
export default function BrandIcon(props: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-[1.125em] shrink-0">
      <path d={props.icon.path} />
    </svg>
  );
}
