import { A } from '@solidjs/router';
import { JSX, Match, Switch } from 'solid-js';

const base =
  'relative inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 font-semibold no-underline transition-state';

const variants = {
  filled: 'bg-primary text-on-primary hover:bg-primary/85',
  outlined: 'border border-outline text-primary hover:bg-primary/10',
};

type Props = {
  variant?: keyof typeof variants;
  children: JSX.Element;
} & ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

/**
 * A Material button. With `href` it's a link, and links to pages on this site
 * go through the router, so they don't reload the page. With `onClick` it's a
 * real button, for actions that don't go anywhere.
 */
export default function Button(props: Props) {
  const classes = () => `${base} ${variants[props.variant ?? 'filled']}`;
  return (
    <Switch>
      <Match when={props.onClick}>
        {onClick => (
          <button type="button" onClick={() => onClick()()} class={classes()}>
            {props.children}
          </button>
        )}
      </Match>
      <Match when={props.href?.startsWith('/')}>
        <A href={props.href!} class={classes()}>
          {props.children}
        </A>
      </Match>
      <Match when={props.href}>
        {href => (
          <a href={href()} class={classes()}>
            {props.children}
          </a>
        )}
      </Match>
    </Switch>
  );
}
