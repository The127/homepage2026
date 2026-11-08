import { For } from 'solid-js';
import Chip from '~/components/Chip';

/** A row of chips, like a project's languages. */
export default function Chips(props: { items: (string | number)[]; class?: string }) {
  return (
    <div class={`flex flex-wrap gap-2 ${props.class ?? ''}`}>
      <For each={props.items}>{item => <Chip>{item}</Chip>}</For>
    </div>
  );
}
