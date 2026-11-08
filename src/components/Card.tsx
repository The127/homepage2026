import { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

/**
 * A Material outlined card: a thin border, 12px corners and no shadow. Pass
 * layout classes like a grid through `class`.
 */
export default function Card(props: {
  as?: 'article' | 'section' | 'div';
  class?: string;
  children: JSX.Element;
}) {
  return (
    <Dynamic
      component={props.as ?? 'article'}
      class={`rounded-xl border border-outline-variant bg-surface p-6 ${props.class ?? ''}`}
    >
      {props.children}
    </Dynamic>
  );
}
