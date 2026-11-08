import PageMeta from '~/components/PageMeta';

const EMAIL = 'karolinkostial@gmail.com';

export default function Impressum() {
  return (
    <div lang="de">
      <PageMeta title="Impressum" description="Impressum und Datenschutzhinweis." />
      <h1>Impressum</h1>
      <p lang="en" class="mt-4 text-on-surface-variant">
        I'm doxxing myself so I don't get sued, as § 5 DDG requires.
      </p>

      <h2 class="mt-12">Angaben gemäß § 5 DDG</h2>
      <address class="mt-4 not-italic">
        Karolin Suzanna Illy Kostial
        <br />
        Leopold Straße 51
        <br />
        76133 Karlsruhe
        <br />
        Deutschland
      </address>

      <h2 class="mt-12">Kontakt</h2>
      <p class="mt-4">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>

      <h2 class="mt-12">Datenschutz</h2>
      <p class="mt-4">
        Diese Website ist ein privates, nicht-kommerzielles Projekt. Es werden keine Cookies
        gesetzt, keine personenbezogenen Daten erhoben und keine Tracking-Dienste eingesetzt.
      </p>
    </div>
  );
}
