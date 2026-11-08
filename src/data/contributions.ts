export interface Contribution {
  name: string;
  /** What the project is, for readers who don't know it. */
  about: string;
  /** What I did there. */
  work: string;
  /** Where to see the work, usually a search for my merged pull requests. */
  link: { label: string; href: string };
}

function mergedPullRequests(scope: string) {
  const query = `${scope} author:The127 is:pr is:merged`;
  return {
    label: 'See the pull requests',
    href: `https://github.com/search?type=pullrequests&q=${encodeURIComponent(query)}`,
  };
}

export const contributions: Contribution[] = [
  {
    name: 'Incus',
    about: 'A manager for system containers and virtual machines.',
    work: "Fixes for network peering and QEMU's clock settings, plus tests and refactoring.",
    link: mergedPullRequests('repo:lxc/incus'),
  },
  {
    name: 'Dex',
    about: 'An OpenID Connect identity provider.',
    work: 'A fix for OIDC discovery with custom root certificates.',
    link: mergedPullRequests('repo:dexidp/dex'),
  },
  {
    name: 'Go',
    about: 'The Go programming language.',
    work:
      "A change that lets WriteMsgUnix send on connected datagram sockets. It's been open since January 2026, and I'd really like to see it merged.",
    link: { label: 'See the pull request', href: 'https://github.com/golang/go/pull/77243' },
  },
  {
    name: 'p9',
    about: 'A 9P file server and client library in Go.',
    work: 'A protocol fix for file locks.',
    link: mergedPullRequests('repo:hugelgupf/p9'),
  },
  {
    name: 'rqlite',
    about: 'A distributed database built on SQLite.',
    work: 'Refactorings, and number handling in the Go HTTP client.',
    link: mergedPullRequests('org:rqlite'),
  },
  {
    name: 'go-tc',
    about: 'A Go library for Linux traffic control.',
    work: 'ICMPv6 match keys for the flower filter.',
    link: mergedPullRequests('repo:florianl/go-tc'),
  },
];
