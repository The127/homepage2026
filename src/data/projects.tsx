import type { JSX } from 'solid-js';
import Link from '~/components/Link';
import type { Image } from '~/site';

export interface Link {
  label: string;
  href: string;
}

/**
 * Rich text for a project page. It's a function, because Solid can only
 * place a rendered node once, and a page may be rendered more than once.
 */
type Content = () => JSX.Element;

export interface Project {
  /** The last part of the project's URL, as in `/projects/keyline`. */
  slug: string;
  name: string;
  kind: string;
  /** One or two short sentences for lists and link previews. */
  summary: string;
  languages: string[];
  repo?: string;
  /** A live app or documentation site, if the project has one. */
  website?: Link;
  /** Featured projects are listed on the home page. */
  featured?: boolean;
  /** A short note on how active the project is, shown in lists too. */
  note?: string;
  /** A 1200x630 picture, shown on the card and the page and used for link previews. */
  image?: Image;

  /** What goes wrong without the project. */
  problem?: Content;
  /** A few short paragraphs, not a feature list. */
  howItWorks?: Content;
  status: Content;
  /** The shortest way to try it. */
  tryIt?: { intro: Content; code: string };
}

export const projects: Project[] = [
  {
    slug: 'tidegate',
    name: 'Tidegate',
    kind: 'Privileged access management',
    summary: 'Gives people access to infrastructure only when they need it, and only as much as they need.',
    languages: ['Go'],
    repo: 'https://github.com/tidegate-dev/tidegate',
    website: { label: 'Docs', href: 'https://tidegate-dev.github.io/tidegate/' },
    featured: true,
    problem: () => (
      <p>
        Access to production systems tends to pile up. People keep rights they needed once, for
        much longer than they need them, and every one of those rights can be misused or stolen.
      </p>
    ),
    howItWorks: () => (
      <p>
        Tidegate decides who may reach your production systems, for how long and with which
        permissions. A server called the authority keeps the rules and the decisions. With a
        command-line tool on Linux, macOS or Windows, people reach servers, databases and other
        systems securely, with only the permissions they need and only while they need them.
      </p>
    ),
    status: () => (
      <p>
        In early development, with no release yet. The design is written down as{' '}
        <Link href="https://github.com/tidegate-dev/enhancements">Tidegate Enhancement Proposals</Link>.
      </p>
    ),
  },
  {
    slug: 'aibox',
    name: 'aibox',
    kind: 'Sandbox for Claude Code',
    summary: 'Runs Claude Code in a small virtual machine that only sees the folders you share and only reaches the hosts you allow.',
    languages: ['Go'],
    repo: 'https://github.com/The127/aibox',
    website: { label: 'Docs', href: 'https://the127.github.io/aibox/' },
    featured: true,
    problem: () => (
      <p>
        Claude Code can read and change files, run commands and reach the internet. That's what
        makes it useful. But a bad prompt or a malicious file in a repository can turn it against
        you, and on your machine it can see your SSH keys, your cloud logins and your other
        projects.
      </p>
    ),
    howItWorks: () => (
      <>
        <p>
          aibox runs Claude Code in a small virtual machine that only sees the folders you share.
          The VM has its own kernel and no network card. Its only way out is a proxy on your
          machine that checks every connection against the hosts you allow. It boots in about a
          second.
        </p>
        <p>
          If you use an API key, it never enters the VM. Claude Code gets a placeholder, and aibox
          puts in the real key on the way to the Claude API. A login with a Claude subscription
          goes into the VM as it is, because{' '}
          <Link href="https://code.claude.com/docs/en/legal-and-compliance#authentication-and-credential-use">
            Anthropic's terms
          </Link>{' '}
          don't allow a tool like aibox to handle it. Your git login stays on your machine, and git
          in the VM can only push to the branches you name. It can't stop a force push to one of
          those branches, though.
        </p>
        <p>
          Inside the VM, Claude Code works like it always does, and its changes show up in your
          project folder right away. With <code>aibox task</code> it can also do a job on its own
          and hand back commits for you to review.
        </p>
      </>
    ),
    status: () => (
      <p>
        Released and in active development. It runs on macOS with Apple silicon, on Linux and on
        Windows 11.
      </p>
    ),
    tryIt: {
      intro: () => <p>On macOS or Linux, install it with Homebrew and start it in your project:</p>,
      code: `brew install --cask the127/tap/aibox
cd ~/projects/my-app
aibox config suggest
aibox run`,
    },
  },
  {
    slug: 'keyline',
    name: 'Keyline',
    kind: 'Auth server',
    summary: 'An OpenID Connect server that handles logins for your apps, on your own servers.',
    languages: ['Go', 'Vue'],
    repo: 'https://github.com/The127/Keyline',
    featured: true,
    problem: () => (
      <p>
        Almost every app needs logins. Hosted identity services keep your users' accounts for
        you, and the ones you can host yourself are often large and hard to set up.
      </p>
    ),
    howItWorks: () => (
      <>
        <p>
          Keyline is an OpenID Connect provider written in Go. It handles users, roles and groups,
          and logins with passwords, one-time codes or passkeys. One Keyline can serve several
          tenants, called virtual servers.
        </p>
        <p>
          It stores its data in PostgreSQL, or in SQLite for small setups, and several instances
          can run side by side with leader election. Around it are an{' '}
          <Link href="https://github.com/The127/KeylineUi">admin UI</Link>, a{' '}
          <Link href="https://github.com/The127/keyline-operator">Kubernetes operator</Link> and a{' '}
          <Link href="https://github.com/The127/KeylineNet">.NET client</Link>.
        </p>
      </>
    ),
    status: () => (
      <p>
        In beta. It passes the basic OpenID Connect conformance tests for the features it
        supports, but it isn't ready for production yet.
      </p>
    ),
  },
  {
    slug: 'beanstack',
    name: 'Beanstack',
    kind: 'Hypervisor',
    summary: 'Runs virtual machines, microVMs and containers across several of my own machines, from one API and CLI.',
    languages: ['Go'],
    problem: () => (
      <p>
        Beanstack started because I wanted to understand how a system like Incus works from the
        ground up, so I'm building one from scratch. It treats OCI containers and microVMs as
        first-class workloads next to full virtual machines, and it's designed to scale from a
        single node to large clusters.
      </p>
    ),
    howItWorks: () => (
      <>
        <p>
          Beanstack runs full virtual machines with QEMU, microVMs with Cloud Hypervisor, and OCI
          containers, across several nodes. You drive it with the <code>beanstack</code> CLI:
          networks, address pools, volumes, instances and the cluster itself.
        </p>
        <p>
          OCI images like nginx or Postgres boot as microVMs. Beanstack flattens the image into an
          ext4 file system, and a small initramfs mounts it and starts the image's real entrypoint
          with its environment. So the image behaves like it does in Docker.
        </p>
        <p>
          A network either gets its addresses from Beanstack, or leaves that to DHCP from outside.
          Each node runs an agent that keeps its workloads running when the control plane is down.
        </p>
      </>
    ),
    status: () => <p>Private and in active development. The code isn't public yet.</p>,
  },
  {
    slug: 'raccoon-daw',
    name: 'raccoon-daw',
    kind: 'Digital audio workstation',
    summary: 'A music studio in the browser, with an audio engine in Rust and WebAssembly.',
    languages: ['Rust', 'WebAssembly', 'SolidJS'],
    website: { label: 'Open the app', href: 'https://daw.karo.gay' },
    problem: () => <p>Making music on a computer usually starts with installing a large program.</p>,
    howItWorks: () => (
      <p>
        raccoon-daw runs in the browser. Its audio engine is written in Rust and runs as
        WebAssembly. It has modular synthesis with a full signal routing graph, several synth
        engines and a set of effects, and it can export a track as a video.
      </p>
    ),
    status: () => (
      <p>
        Live at <Link href="https://daw.karo.gay">daw.karo.gay</Link>. The code isn't public.
      </p>
    ),
  },
  {
    slug: 'hotdogstand',
    name: 'hotdogstand',
    kind: 'Game',
    summary: 'A 3D game where you run a hot dog stand at night, until something about your customers starts to feel off.',
    languages: ['Godot', 'GDScript'],
    website: { label: 'Play it', href: 'https://hotdogstand.vercel.app' },
    image: {
      src: '/games/hotdogstand.jpg',
      alt: 'The title screen of Night Shift at Walter\'s: a lit hot dog stand at night with a customer at the window.',
    },
    problem: () => (
      <p>Ever wanted to serve hot dogs at night, from 10 pm to 2 am? Me neither, but I made a game about it.</p>
    ),
    howItWorks: () => (
      <>
        <p>
          Each night runs from 22:00 to 02:00 on the stall's clock, which takes eight minutes.
          Customers line up at the window and mumble their order in a speech bubble, each with a
          voice of their own. You build every hot dog by hand: sausages from the fridge onto the
          roller grill, a bun on a plate, then sauce and onions right where you squeeze and
          sprinkle them.
        </p>
        <p>
          Sausages brown after 15 seconds and burn after a minute and a half. Leave them burning
          and the stall catches fire. Buns, toppings and sauce run out, so you refill them from
          the stock room. At closing you scrub the grill, and Walter, who owns the stand, takes
          his cut.
        </p>
        <p>
          Then the regulars start coming back every night for the same order, and their skin
          turns grey. How the week ends depends on how much you go looking.
        </p>
      </>
    ),
    status: () => (
      <p>
        Finished. It runs in the browser at{' '}
        <Link href="https://hotdogstand.vercel.app">hotdogstand.vercel.app</Link>. The code isn't
        public.
      </p>
    ),
  },
  {
    slug: 'fishymarblerun-2',
    name: 'FishyMarbleRun 2',
    kind: 'Game',
    summary: 'A marble race with fish for Twitch streams. Viewers join from chat, and the fish race on the stream.',
    languages: ['Godot', 'GDScript'],
    repo: 'https://github.com/The127/fishygame2',
    website: {
      label: 'Streamer guide',
      href: 'https://github.com/The127/fishygame2/blob/main/docs/STREAMER_GUIDE.md',
    },
    image: {
      src: '/games/fishymarblerun-2.jpg',
      alt: 'The title screen of FishyMarbleRun 2: colourful fish swimming under water, with the line "Chat joins as fish. Fish race down the track."',
    },
    problem: () => (
      <p>
        Sure, marble race games for Twitch exist, but none of them are fish themed. Let me
        check… Marbles on Stream: marbles. Tumble Marble: marbles. King of the Chat: marble
        warriors. Not a single fish. Well, now there is FishyMarbleRun 2! (Don't ask about
        FishyMarbleRun 1.)
      </p>
    ),
    howItWorks: () => (
      <>
        <p>
          The game is a web page that a streamer adds to OBS as a browser source. Viewers join a
          race with a command in Twitch chat, and their fish roll down a marble run with real
          physics.
        </p>
        <p>
          On the way, fish can grab glowing treasures: a coin, a pearl or a chest. The points buy
          things in a shop. The streamer gets three powers per race: a fishing rod that yanks a
          fish back up the track, a net that holds fish in place, and a bubble blast that shoves
          them away.
        </p>
      </>
    ),
    status: () => (
      <p>
        Live at <Link href="https://the127.github.io/fishygame2/">the127.github.io/fishygame2</Link>.
        The streamer guide explains how to add it to a stream.
      </p>
    ),
  },
  {
    slug: 'miso',
    name: 'miso',
    kind: 'Image builder',
    summary: 'Builds images of systemd-based operating systems from a Dockerfile-style file, with caching and several output formats.',
    languages: ['Go'],
    repo: 'https://github.com/The127/miso',
    website: { label: 'Docs', href: 'https://the127.github.io/miso' },
    howItWorks: () => (
      <>
        <p>
          miso builds operating system images from a build file that looks like a Dockerfile.
          Each step is cached as a layer. The result comes out as standard systemd artifacts, like
          disk images, ISOs, root file systems, system extensions and the files{' '}
          <code>systemd-sysupdate</code> uses.
        </p>
        <p>
          A <code>CHECK</code> step boots the image and runs a command in it before the build
          writes anything. miso only builds images. It doesn't apply updates or configure
          machines.
        </p>
      </>
    ),
    status: () => (
      <p>
        Released. It runs on Linux on amd64 and arm64 and needs access to <code>/dev/kvm</code>.
      </p>
    ),
    tryIt: {
      intro: () => (
        <p>
          This build file makes a Debian disk with htop in it. <code>miso build -o out</code>{' '}
          builds it, boots it to check that htop is there, and writes <code>out/os.raw</code>.
        </p>
      ),
      code: `FROM debian:sid
RUN apt-get update && apt-get install -y --no-install-recommends systemd-boot-efi htop
RUN : > /etc/fstab

CMDLINE rw console=ttyS0

PARTITION esp Type=esp Format=vfat CopyFiles=/efi:/ SizeMinBytes=256M SizeMaxBytes=256M
PARTITION root Type=root Format=ext4 CopyFiles=/:/ SizeMinBytes=3G

OUTPUT disk os.raw

CHECK command -v htop`,
    },
  },
  {
    slug: 'dockyard',
    name: 'Dockyard',
    kind: 'Container registry',
    summary: 'A small, fast OCI container registry.',
    languages: ['Go'],
    repo: 'https://github.com/The127/dockyard',
    problem: () => (
      <p>
        I wanted to understand the container image format. And I wanted a registry that's very
        lightweight but still scales. It should be open source and easy to use, work well with
        OIDC, have tenants, and start up fast enough for local CI.
      </p>
    ),
    howItWorks: () => (
      <p>
        Dockyard implements the OCI Distribution Specification, so Docker, Podman and other tools
        can push and pull images from it. It has several tenants, each with its own projects and
        repositories, and an API to manage them. There's also a{' '}
        <Link href="https://github.com/The127/dockyard-ui">web UI</Link>.
      </p>
    ),
    status: () => (
      <p>Before version 1.0.</p>
    ),
    tryIt: {
      intro: () => <p>Build it from source and run it:</p>,
      code: `git clone https://github.com/The127/dockyard.git
cd dockyard
go build -o dockyard ./cmd/dockyard
./dockyard`,
    },
  },
  {
    slug: 'mako',
    name: 'Mako',
    kind: 'Configuration store',
    summary: 'A small key-value store for configuration, built on rqlite, where clients log in with OIDC tokens.',
    languages: ['Rust'],
    repo: 'https://github.com/The127/mako',
    problem: () => (
      <p>
        I wanted one simple, secure place for configuration, for any app or service, without
        the complexity of etcd or Consul.
      </p>
    ),
    howItWorks: () => (
      <>
        <p>
          Mako stores configuration as keys in namespaces. Underneath it keeps everything in{' '}
          <Link href="https://github.com/rqlite/rqlite">rqlite</Link>.
        </p>
        <p>
          Clients log in with short-lived OIDC tokens, so there are no shared passwords to leak,
          and access is set per namespace. Reads come from a cache, and clients can poll cheaply
          with ETags.
        </p>
      </>
    ),
    status: () => (
      <p>
        Feature complete and ready for production. It gets bug fixes and security updates.
      </p>
    ),
    tryIt: {
      intro: () => <p>With a server running, set and read a key with the CLI:</p>,
      code: `export MAKO_URL=http://localhost:8080
mako kv set my-app log-level debug
mako kv get my-app log-level`,
    },
  },
  {
    slug: 'frogly',
    name: 'frogly',
    kind: 'Task planner',
    summary: 'A calm, self-hosted task planner for teams that organise themselves.',
    note: "I don't have much time for it at the moment.",
    languages: ['Go', 'Svelte'],
    repo: 'https://github.com/The127/frogly',
    problem: () => (
      <p>
        Many planning tools are built for the people who watch the work. They ask for fields,
        reports and workflows that slow down the people who do it.
      </p>
    ),
    howItWorks: () => (
      <p>
        frogly keeps planning light. You write down an idea in one line. Ideas that enough people
        want become tickets on a simple board, and the rest fade on their own.
      </p>
    ),
    status: () => (
      <p>
        Early. So far you can log in, create projects and plant ideas in a project's garden. The{' '}
        <Link href="https://github.com/The127/frogly/blob/main/docs/vision.md">vision</Link> describes
        where it's going.
      </p>
    ),
  },
  {
    slug: 'mscript',
    name: 'MScript',
    kind: 'Compiler',
    summary: 'A compiler for the programmable chips in the space game Stationeers. It turns a small C-like language into their MIPS-style assembly.',
    languages: ['Java'],
    repo: 'https://github.com/The127/MScript',
    website: { label: 'Docs', href: 'https://the127.github.io/MScript/mscript/module-summary.html' },
    problem: () => (
      <p>
        In <Link href="https://store.steampowered.com/app/544550/Stationeers/">Stationeers</Link> you
        program chips in a variant of MIPS assembly. That makes scripts tedious to write and hard
        to read or reuse.
      </p>
    ),
    howItWorks: () => (
      <p>
        MScript is a small language inspired by Python, Rust and C, with variables, functions,
        loops and named devices. The compiler is written in Java with ANTLR and turns it into the
        game's assembly.
      </p>
    ),
    status: () => <p>Not actively developed. The last change was in January 2024.</p>,
    tryIt: {
      intro: () => <p>This script reads the sun's angle and turns a solar panel to match it:</p>,
      code: `def db as base;
def d0 as SolarSensor;

def $RotationDegrees as 100;
def $SolarDegrees as 180;

fn main (){
	var winkel;
	loop {
		read SolarSensor.SolarAngle into winkel;
		winkel = calc(winkel, 1);
		write winkel into base.Setting;
		yield;
	}
}

fn calc(winkel, b) {
	var result;
	result = winkel * $RotationDegrees / $SolarDegrees;
	return result;
}`,
    },
  },
];

/** Games have their own section on the home page and the projects page. */
export function isGame(project: Project): boolean {
  return project.kind === 'Game';
}

export function findProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
