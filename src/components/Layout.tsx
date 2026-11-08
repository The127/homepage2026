import { A } from '@solidjs/router';
import { siBandcamp, siGithub } from 'simple-icons';
import { For, JSX } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import ThemeSwitch from '~/components/ThemeSwitch';

const NAV = [
  { href: '/projects', label: 'Projects' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
];

const barLink =
  'inline-flex min-h-11 items-center text-on-surface no-underline hover:text-primary hover:underline [&.active]:underline';
const footerLink =
  'inline-flex min-h-8 items-center gap-2 text-on-surface no-underline hover:text-primary hover:underline';

export default function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <a
        href="#main"
        class="sr-only bg-surface p-2 focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>

      <div class="page-grid min-h-screen grid-rows-[auto_1fr_auto]">
        <header class="full-bleed border-b border-outline-variant">
          <div class="flex flex-wrap items-center justify-between gap-x-6 py-3">
            <A href="/" end class={`${barLink} gap-3 font-semibold`}>
              <img src="/favicon.svg" alt="" width="28" height="28" class="size-7" />
              Karolin Kostial
            </A>
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
              <nav aria-label="Main">
                <ul class="flex gap-6">
                  <For each={NAV}>
                    {item => (
                      <li>
                        <A href={item.href} class={barLink}>{item.label}</A>
                      </li>
                    )}
                  </For>
                </ul>
              </nav>
              <ThemeSwitch />
            </div>
          </div>
        </header>

        <main id="main" class="full-bleed content-start pb-16">{props.children}</main>

        <footer class="full-bleed border-t border-outline-variant bg-surface-container text-sm">
          <div class="grid items-center gap-4 py-8 text-center sm:grid-cols-[1fr_auto_1fr] sm:text-left">
            <ul class="flex justify-center gap-6 sm:justify-start">
              <li>
                <a href="https://github.com/The127" class={footerLink}>
                  <BrandIcon icon={siGithub} />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://liaaura.bandcamp.com" class={footerLink}>
                  <BrandIcon icon={siBandcamp} />
                  Bandcamp
                </a>
              </li>
            </ul>
            <p class="text-center text-on-surface-variant">
              <span aria-hidden="true">🍪 </span>This site uses no cookies. For cookies, check your
              kitchen.
            </p>
            <div class="sm:text-right">
              <A href="/impressum" class={footerLink}>Impressum</A>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
