import styles from './Ticker.module.css';

const items = [
  { text: 'RUST', hi: true },
  { text: '·' },
  { text: 'GO', hi: true },
  { text: '·' },
  { text: 'C#' },
  { text: '·' },
  { text: 'OIDC' },
  { text: '·' },
  { text: 'KUBERNETES' },
  { text: '·' },
  { text: 'DISTRIBUTED SYSTEMS' },
  { text: '·' },
  { text: 'POSTGRESQL', hi: true },
  { text: '·' },
  { text: 'JUNIPER' },
  { text: '·' },
  { text: 'RASPBERRY PI' },
  { text: '·' },
  { text: 'SELF-HOSTED', hi: true },
  { text: '·' },
  { text: 'PROC MACROS' },
  { text: '·' },
  { text: 'COMPILERS' },
  { text: '·' },
  { text: '74LS TTL CHIPS', hi: true },
  { text: '·' },
  { text: 'CQRS' },
  { text: '·' },
  { text: 'WEBAUTHN' },
  { text: '·' },
  { text: 'OCI REGISTRIES' },
  { text: '·' },
  { text: 'ERROR TRACKING' },
  { text: '·' },
];

export default function Ticker() {
  return (
    <div class={styles.wrap}>
      <div class={styles.track}>
        {/* duplicated for seamless loop */}
        {[...items, ...items].map(item => (
          <span class={item.hi ? styles.hi : styles.item}>{item.text}</span>
        ))}
      </div>
    </div>
  );
}
