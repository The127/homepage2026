import { A } from '@solidjs/router';
import ExternalLinkIcon from 'lucide-solid/icons/external-link';
import { JSX } from 'solid-js';

/** Whether a link leaves this site for another one. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/**
 * Every link on the site. Links to pages on this site go through the router.
 * Links to other sites open in a new tab, and say so before anyone clicks:
 * with an icon you can see, and with a note for screen readers (WCAG G201).
 * Other links, like mailto, stay plain.
 *
 * A link's address never changes after it renders, so the kind of link is
 * decided once, when the component is created.
 */
export default function Link(props: {
  href: string;
  class?: string;
  /** Only for links on this site: active only on the exact page. */
  end?: boolean;
  children: JSX.Element;
}) {
  const href = props.href;
  if (href.startsWith('/')) {
    return (
      <A href={href} end={props.end} class={props.class}>
        {props.children}
      </A>
    );
  }
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" class={props.class}>
        {props.children}
        {/* In running text the icon needs its own space. In a flex link, the gap does that. */}
        <ExternalLinkIcon
          aria-hidden="true"
          class="ml-1 inline-block size-[0.875em] shrink-0 align-[-0.0625em] in-[.inline-flex]:ml-0"
        />
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <a href={href} class={props.class}>
      {props.children}
    </a>
  );
}
