import { JSX } from 'solid-js';
import styles from './SectionHeader.module.css';

interface Props {
  num: string;
  eyebrow: string;
  title: JSX.Element;
}

export default function SectionHeader(props: Props) {
  return (
    <div class={`${styles.head} rv`}>
      <div class={styles.num}>{props.num}</div>
      <div class={styles.group}>
        <div class={styles.eye}>{props.eyebrow}</div>
        <h2 class={styles.title}>{props.title}</h2>
        <div class={styles.rule} />
      </div>
    </div>
  );
}
