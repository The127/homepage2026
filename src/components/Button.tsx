import { JSX } from 'solid-js';
import Link from '~/components/Link';

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
 * A Material button. With `href` it's a link, rendered by `Link`, so it handles
 * pages on this site and other sites the same way every other link does. With
 * `onClick` it's a real button, for actions that don't go anywhere.
 */
export default function Button(props: Props) {
  const classes = () => `${base} ${variants[props.variant ?? 'filled']}`;
  // Whether it's a link or a button never changes after it renders, so it's
  // decided once, when the component is created.
  const onClick = props.onClick;
  if (onClick) {
    return (
      <button type="button" onClick={() => onClick()} class={classes()}>
        {props.children}
      </button>
    );
  }
  return (
    <Link href={props.href!} class={classes()}>
      {props.children}
    </Link>
  );
}
