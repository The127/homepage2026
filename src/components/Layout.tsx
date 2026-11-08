import { A } from '@solidjs/router';
import { siGithub } from 'simple-icons';
import { JSX } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';

const NAV = [
  { href: '/projects', label: 'Projects' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
];

const barLink = 'inline-flex min-h-11 items-center text-on-surface no-underline hover:underline [&.active]:underline';

export default function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <a
        href="#main"
        class="sr-only bg-surface p-2 focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>

      <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-4">
        <header class="flex flex-wrap items-center justify-between gap-x-6 border-b border-outline-variant py-4">
          <A href="/" end class={`${barLink} font-semibold`}>Karolin Kostial</A>
          <nav aria-label="Main">
            <ul class="flex gap-6">
              {NAV.map(item => (
                <li>
                  <A href={item.href} class={barLink}>{item.label}</A>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="main" class="flex-1 py-12">{props.children}</main>

        <footer class="flex flex-wrap gap-x-6 border-t border-outline-variant py-4 text-sm">
          <a href="https://github.com/The127" rel="noopener" class={`${barLink} gap-2`}>
            <BrandIcon icon={siGithub} />
            GitHub
          </a>
          <a href="/impressum.html" class={barLink}>Impressum</a>
        </footer>
      </div>
    </>
  );
}
