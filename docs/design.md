# Design rules

These rules keep the site readable and accessible, and keep it from turning
into a collection of effects. They come from published guides, so you can
check a decision against a source instead of taste:

- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/), the W3C's
  accessibility standard. The site meets level AA.
- Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
  on typography, colour, dark mode, accessibility and motion.
- Google's [Material Design 3](https://m3.material.io/), through the tokens
  in [Material Web](https://github.com/material-components/material-web/tree/main/tokens).
- [Tailwind CSS](https://tailwindcss.com/docs/theme), whose default scales
  the site uses.

The tokens live in `src/app.css`. If you need a value that isn't there,
change the token instead of writing the value into a component.

## Type

Use one typeface for all text, plus a monospace font for code. Apple says to
keep the number of typefaces low, because mixing them blurs the hierarchy.

The text font is [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/),
and code uses its companion, Atkinson Hyperlegible Mono. The Braille
Institute designed them so that similar letters, like `l`, `I` and `1`, are
hard to confuse. Both come from Fontsource and are served from the site
itself, so no visitor data goes to a font service.

Use regular, medium, semibold and bold weights. Avoid thin and light weights,
because they're hard to read at small sizes.

Body text is 1rem (16px) with a line height of 1.5. That matches Material's
`body-large` role and Tailwind's `text-base`. Nothing on the site is smaller
than 0.875rem (14px), which is Material's `body-medium`.

| Element | Tailwind | Size / line height | Material role |
| --- | --- | --- | --- |
| `h1` | `text-4xl`, `text-5xl` from 640px | 2.25rem, then 3rem | `display-small`, then `display-medium` |
| `h2` | `text-2xl` | 1.5rem / 2rem | `headline-small` |
| `h3` | `text-xl` | 1.25rem / 1.75rem | `title-large` |
| Intro paragraph | `text-lg` | 1.125rem / 1.75rem | `title-medium` size |
| Body | `text-base` | 1rem / 1.5rem | `body-large` |
| Small | `text-sm` | 0.875rem / 1.25rem | `body-medium` |

Keep lines of text at 65 characters or less with `max-w-prose`. WCAG's limit
is 80 characters (1.4.8).

Don't set labels in uppercase with wide letter spacing. Use weight and size
for hierarchy, as Apple suggests.

## Colour

The colour names follow Material's colour roles. A role says what a colour is
for, not what it looks like:

| Token | Use | Light | Dark |
| --- | --- | --- | --- |
| `surface` | Page background | stone-50 | stone-900 |
| `surface-container` | Bands like the page header and footer | stone-100 | stone-800 |
| `on-surface` | Text | stone-900 | stone-100 |
| `on-surface-variant` | Secondary text | stone-600 | stone-400 |
| `outline` | Borders of outlined buttons | stone-500 | stone-500 |
| `outline-variant` | Dividers, card and chip borders | stone-200 | stone-700 |
| `primary` | Links, buttons and focus | violet-700 | violet-300 |
| `on-primary` | Text on filled buttons | white | stone-900 |

There is one accent colour, `primary`. Use it only for things you can click
or that have focus. Apple warns against using the same colour for different
meanings, so text that isn't a link never gets it.

Text has a contrast of at least 4.5:1 against its background (WCAG 1.4.3).
Body text aims for 7:1, as Apple recommends for custom colours. Focus rings
and borders that identify a control have at least 3:1 (WCAG 1.4.11). The
current values:

| Pair | Light | Dark |
| --- | --- | --- |
| `on-surface` on `surface` | 16.8:1 | 16.0:1 |
| `on-surface-variant` on `surface` | 7.3:1 | 6.8:1 |
| `primary` on `surface` | 7.0:1 | 9.4:1 |
| `on-surface-variant` on `surface-container` | 7.0:1 | 5.9:1 |
| `primary` on `surface-container` | 6.7:1 | 8.2:1 |
| `on-primary` on `primary` | 7.3:1 | 9.4:1 |
| `outline` on any surface | at least 4.4:1 | at least 3.2:1 |

If you change a colour, check these pairs again.

The site follows the system's light or dark setting by default. A switch in
the header lets visitors override it with light or dark, and "System" goes
back to the default. Apple advises against such a setting in apps, because
people then have to change it in two places. A website has no app settings,
though, and visitors may want different colours for one site, so the switch
stays, with the system as the default. The choice lives in `localStorage`,
not in a cookie, and an inline script in `entry-server.tsx` applies it before
the first paint.

Links in running text are underlined. Colour alone isn't enough to show that
something is a link (WCAG 1.4.1). Links in the header and footer don't need
it, because their position already shows they're links. The nav underlines
the current page instead.

## Layout and spacing

Spacing uses Tailwind's 0.25rem (4px) steps. Material uses the same 4dp grid.

The layout is editorial, like a well-set book. Pages are at most 64rem wide.
Each page starts with `PageHeader`: the title and an optional intro paragraph
in larger text. The page then continues in sections, built with `Section`.
On screens 768px and wider, a section's heading sits in a 10rem column on the
left, like a margin note, and its content on the right. A fine rule in
`outline-variant` separates the sections. On narrow screens the heading sits
on top.

Running text stays within `max-w-prose`, even where the column is wider.

The page works at 320px wide without scrolling sideways (WCAG 1.4.10), and
with text zoomed to 200% (WCAG 1.4.4).

Click targets are at least 24×24px (WCAG 2.5.8). Navigation links are 44px
tall, which is Apple's default control size on iOS. Links inside a sentence
are exempt.

Each page has a skip link to the main content, as the first thing you can
tab to (WCAG 2.4.1).

## Components

The site uses three components from Material 3, with the sizes from Material
Web's component tokens. They give the pages the look of an interface instead
of a document.

- `Button` for actions, like "All projects" or a project's docs. With `href`
  it's a link, with `onClick` a real button, and both look the same. It's 44px
  tall with fully rounded ends. Material's buttons are 40px, but our target
  size rule asks for 44px. A filled button is for the main action in a place,
  an outlined button for the others.
- `Link` for every link. Links to pages on this site go through the router.
  Links to other sites open in a new tab, with `rel="noopener noreferrer"`,
  and say so before anyone clicks: Lucide's external link icon after the text,
  and "(opens in a new tab)" for screen readers (WCAG technique G201). Don't
  write an `<a>` by hand, except for the skip link.
- `Chip` for small labels, like a language or a release type, and `Chips` for
  a row of them. Chips aren't clickable, so they must not look like buttons:
  a filled `outline-variant` background at 60%, no border, 6px corners and
  full text colour. That keeps them visible on a hovered card, too. Text on a
  chip has at least 11:1 contrast in both themes.
- `Card` for things in a grid, like projects, contributions and albums. It
  has a thin `outline-variant` border, 12px corners and no shadow. In a
  `ProjectCard`, the title link covers the whole card, and other links in the
  card sit above it.

The page header and the footer are bands across the full window width, on
`surface-container`. Their content stays in the 64rem column. `Band` draws
such a band, and the `page-grid` and `full-bleed` utilities in `src/app.css`
do the layout.

If the same classes for a visible element show up in a second place, make
them a component instead of copying them.

## Content from other services

The site itself sets no cookies and sends nothing to other services. A
player or widget from another service, like Spotify's, loads only after a
click. Until then the page shows a button and one sentence on what loading
it does. `SpotifyPlayer` works that way.

Measured in Chrome: Spotify's player sets a cookie for 365 days and reports
to Sentry, and Bandcamp's player loads Google Tag Manager. Neither may load
with the page.

## Icons

Brand logos like GitHub come from [Simple Icons](https://simpleicons.org/)
through the `BrandIcon` component. If a page needs a general icon, like a
play button, use [Lucide](https://lucide.dev/) and import each icon on its
own, as in `lucide-solid/icons/play`, so only the icons in use end up in the
bundle.

An icon always sits next to a text label and is hidden from screen readers
with `aria-hidden`. Then the link reads the same with or without the icon,
and nobody has to guess what a symbol means. Icons are 1.125em, so they
scale with the text, and use the current text colour.

## Focus

Everything you can click shows a 2px `primary` outline when it has keyboard
focus (WCAG 2.4.7 and 2.4.13). Never remove the outline without replacing it.

## Motion

Add motion only when it explains something, like where a panel came from.
Apple says not to add motion for the sake of motion.

Colour changes, like hover, use the `transition-state` utility from
`src/app.css`: 150ms, Material's `short3`. Don't write a transition by hand,
so everything changes at the same speed. When the colour switch changes the
theme, a view transition cross-fades the whole page as one picture, also in
150ms, and single elements don't fade on their own meanwhile. With reduced
motion, or in a browser without view transitions, the theme changes at once.
Other transitions take 150ms to 300ms, which is Material's `short3` to
`medium2` range. With reduced motion turned on, nothing moves (`motion-safe:` in
Tailwind, WCAG 2.3.3).

Nothing animates on scroll or plays on its own. WCAG counts content that
starts when it scrolls into view as starting automatically (2.2.2).
