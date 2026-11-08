import { A } from '@solidjs/router';
import { JSX } from 'solid-js';

const NAV = [
  { href: '/projects', label: 'Projects' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
];

export default function Layout(props: { children: JSX.Element }) {
  return (
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-4">
      <header class="flex flex-wrap items-baseline justify-between gap-4 py-6">
        <A href="/" class="font-semibold">Karolin Kostial</A>
        <nav aria-label="Main">
          <ul class="flex gap-6">
            {NAV.map(item => (
              <li>
                <A href={item.href} activeClass="underline">{item.label}</A>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main class="flex-1 py-8">{props.children}</main>

      <footer class="flex flex-wrap gap-6 py-6 text-sm">
        <a href="https://github.com/The127" rel="noopener">GitHub</a>
        <a href="/impressum.html">Impressum</a>
      </footer>
    </div>
  );
}
