import { A } from '@solidjs/router';
import PageMeta from '~/components/PageMeta';

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="How Karolin Kostial got from making games to building infrastructure, and life outside of code."
      />
      <h1>About</h1>

      <h2 class="mt-12">How I got here</h2>
      <p class="mt-4">
        I wanted to make my own computer games, so at school I joined the computer science club.
        There I learned Object Pascal and PHP, and at home I taught myself Java and wrote a 2D
        game engine.
      </p>
      <p class="mt-4">
        I went on to study applied computer science at Offenburg University, mostly because it
        interested me. During the bachelor's it turned into something I love. Part of the degree
        was half a year at COS in Oberkirch, where I met the person who became my mentor. A lot of
        how I work and think goes back to him. I stayed for a master's and wrote my thesis on
        private cloud setups, together with a local company that runs its own data center.
      </p>
      <p class="mt-4">
        My first job was at Phoenis, with an s, which later became Hedgehog. When I started, we
        were about eleven people. Over six years I moved our servers from Windows to Linux and
        brought in Docker. I left Kubernetes out on purpose, because that would have been too
        much new at once for a team that size. After that I spent two years in the Kubernetes
        team at Anexia. Since August 2026 I've been on the security team at Giant Swarm, where
        I'm the main developer of Tidegate.
      </p>

      <h2 class="mt-12">What I care about</h2>
      <p class="mt-4">
        I don't actually like infrastructure. I just like bad infrastructure even less, and the
        same goes for security. I cared about both enough that I ended up specialising in them,
        because nobody around me did.
      </p>
      <p class="mt-4">
        At heart I'm a developer. I bring developer thinking, automation and engineering to
        operations. Some people call that DevOps, but the word often just means a sysadmin with a
        new title. What I care about most is that software stays cheap to change, because it will
        have to change. A clear structure and well-known patterns go a long way there.
      </p>

      <h2 class="mt-12">Outside of code</h2>
      <p class="mt-4">
        When something makes me curious, I try it out. That's how I ended up building an 8-bit
        CPU from logic chips. I also make a lot of my own clothes, from skirts and dresses to
        jackets and button-down shirts.
      </p>
      <p class="mt-4">
        I make electronic music as <A href="/music">Lia Aura</A> and run a small homelab. When I
        find the time, I go back to Offenburg, an hour from Karlsruhe, for the Chaos Computer Club
        there.
      </p>
    </>
  );
}
