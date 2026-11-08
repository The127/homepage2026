import Link from '~/components/Link';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import Section from '~/components/Section';

const EMAIL = 'karolinkostial@gmail.com';

export default function Impressum() {
  return (
    <div lang="de" class="full-bleed">
      <PageMeta title="Impressum" description="Impressum und Datenschutzhinweis." />
      <PageHeader
        title="Impressum"
        intro={<span lang="en">I'm doxxing myself so I don't get sued, as § 5 DDG requires.</span>}
      />

      <Section title="Angaben gemäß § 5 DDG">
        <address class="not-italic">
          Karolin Suzanna Illy Kostial
          <br />
          Leopold Straße 51
          <br />
          76133 Karlsruhe
          <br />
          Deutschland
        </address>
      </Section>

      <Section title="Kontakt">
        <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
      </Section>

      <Section title="Datenschutz">
        <div class="max-w-prose space-y-4">
          <p>
            Diese Website ist ein privates, nicht-kommerzielles Projekt. Sie selbst setzt keine
            Cookies, erhebt keine personenbezogenen Daten und nutzt keine Tracking-Dienste.
          </p>
          <p>
            Auf der Seite „Music“ lässt sich für jede Veröffentlichung der Player von Spotify
            laden. Er lädt erst, wenn Sie auf „Load Spotify player“ klicken. Danach setzt Spotify
            Cookies und erhält Ihre IP-Adresse. Dafür gilt die{' '}
            <Link href="https://www.spotify.com/de/legal/privacy-policy/">
              Datenschutzerklärung von Spotify
            </Link>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}
