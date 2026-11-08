import { A } from '@solidjs/router';
import PageHeader from '~/components/PageHeader';
import PageMeta from '~/components/PageMeta';
import Section from '~/components/Section';

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="How Karolin Kostial got from making games to building infrastructure, and life outside of code."
      />
      <PageHeader title="About" />

      <Section title="How I got here">
        <div class="max-w-prose space-y-4">
          <p>
            I wanted to make my own computer games, so at school I joined the computer science
            club. There I learned Object Pascal and PHP, and at home I taught myself Java and wrote
            a 2D game engine.
          </p>
          <p>
            I went on to study applied computer science at Offenburg University, mostly because it
            interested me. During the bachelor's it turned into something I love. Part of the
            degree was half a year at COS in Oberkirch, where I met the person who became my
            mentor. A lot of how I work and think goes back to him. I stayed for a master's and
            wrote my thesis on private cloud setups, together with a local company that runs its
            own data center.
          </p>
          <p>
            My first job was at Phoenis, with an s, which later became Hedgehog. When I started, we
            were about eleven people. Over six years I moved our servers from Windows to Linux and
            brought in Docker. I left Kubernetes out on purpose, because that would have been too
            much new at once for a team that size. After that I spent two years in the Kubernetes
            team at Anexia. Since August 2026 I've been on the security team at Giant Swarm, where
            I'm the main developer of Tidegate.
          </p>
        </div>
      </Section>

      <Section title="What I care about">
        <div class="max-w-prose space-y-4">
          <p>
            I don't actually like infrastructure. I just like bad infrastructure even less, and
            the same goes for security. I cared about both enough that I ended up specialising in
            them, because nobody around me did.
          </p>
          <p>
            At heart I'm a developer. I bring developer thinking, automation and engineering to
            operations. That's DevOps, but not the kind where sysadmins just got a new title. What
            I care about most is that software stays cheap to change, because it will have to
            change. Good structure and well-known patterns help with that.
          </p>
        </div>
      </Section>

      <Section title="Outside of code">
        <div class="max-w-prose space-y-4">
          <p>
            When something makes me curious, I try it out. That's how I ended up building an 8-bit
            CPU from logic chips. I also make a lot of my own clothes, from skirts and dresses to
            jackets and button-down shirts.
          </p>
          <p>
            I make electronic music as <A href="/music">Lia Aura</A> and run a small homelab. When I
            find the time, I go back to Offenburg, an hour from Karlsruhe, for the Chaos Computer
            Club there.
          </p>
        </div>
      </Section>
    </>
  );
}
