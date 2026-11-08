import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import Section from '~/components/Section';

const EMAIL = 'karolinkostial@gmail.com';

export default function Impressum() {
  return (
    <div lang="de">
      <PageMeta title="Impressum" description="Impressum und Datenschutzhinweis." />
      <PageHeader title="Impressum">
        <span lang="en">I'm doxxing myself so I don't get sued, as § 5 DDG requires.</span>
      </PageHeader>

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
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </Section>

      <Section title="Datenschutz">
        <p class="max-w-prose">
          Diese Website ist ein privates, nicht-kommerzielles Projekt. Es werden keine Cookies
          gesetzt, keine personenbezogenen Daten erhoben und keine Tracking-Dienste eingesetzt.
        </p>
      </Section>
    </div>
  );
}
