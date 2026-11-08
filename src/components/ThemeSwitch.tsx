import Monitor from 'lucide-solid/icons/monitor';
import Moon from 'lucide-solid/icons/moon';
import Sun from 'lucide-solid/icons/sun';
import { createSignal, For, onMount } from 'solid-js';
import { Dynamic } from 'solid-js/web';

type Theme = 'system' | 'light' | 'dark';

/** The localStorage key. The script in entry-server.tsx reads it too. */
export const THEME_KEY = 'theme';

const OPTIONS = [
  { value: 'system', label: 'System colours', icon: Monitor },
  { value: 'light', label: 'Light colours', icon: Sun },
  { value: 'dark', label: 'Dark colours', icon: Moon },
] as const;

function savedTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'system';
  } catch {
    // Storage can be blocked, for example in some private windows.
    return 'system';
  }
}

/**
 * Lets visitors override their system's light or dark setting for this site.
 * The choice is stored in the browser, not in a cookie.
 */
export default function ThemeSwitch() {
  const [theme, setTheme] = createSignal<Theme>('system');
  onMount(() => setTheme(savedTheme()));

  function choose(next: Theme) {
    setTheme(next);
    const root = document.documentElement;
    const apply = () => {
      if (next === 'system') delete root.dataset.theme;
      else root.dataset.theme = next;
    };
    // Single elements must not fade on their own while the page changes theme.
    root.dataset.themeSwitching = '';
    const done = () => delete root.dataset.themeSwitching;

    // A view transition cross-fades the whole page as one picture, so every
    // colour changes at the same speed. Without it, or with reduced motion,
    // the theme changes at once.
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(apply).finished.finally(done);
    } else {
      apply();
      requestAnimationFrame(() => requestAnimationFrame(done));
    }
    try {
      if (next === 'system') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, next);
    } catch {
      // Without storage the choice only lasts until the next page load.
    }
  }

  return (
    <div role="group" aria-label="Colours" class="inline-flex rounded-full border border-outline-variant p-0.5">
      <For each={OPTIONS}>
        {option => (
          <button
            type="button"
            aria-label={option.label}
            title={option.label}
            aria-pressed={theme() === option.value}
            onClick={() => choose(option.value)}
            class="inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-state hover:text-primary aria-pressed:bg-surface-container aria-pressed:text-on-surface"
          >
            <Dynamic component={option.icon} aria-hidden="true" class="size-4" />
          </button>
        )}
      </For>
    </div>
  );
}
