// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';
import { THEME_KEY } from '~/components/ThemeSwitch';

// Applies a saved colour choice before the first paint, so a page doesn't flash
// in the system colours first. It must stay inline and run before the styles.
const applySavedTheme = `try{var t=localStorage.getItem(${JSON.stringify(THEME_KEY)});if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#6d28d9" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <script innerHTML={applySavedTheme} />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
