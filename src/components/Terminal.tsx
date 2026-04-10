import { createSignal, onMount, onCleanup, Show, For } from 'solid-js';
import styles from './Terminal.module.css';

interface Line {
  type: 'cmd' | 'out' | 'err' | 'info';
  text: string;
}

// ── completions ────────────────────────────────────────────────────────────────

const COMMANDS = [
  'cat', 'clear', 'curl', 'date', 'echo', 'exit', 'git', 'help', 'history',
  'htop', 'ls', 'man', 'nano', 'neofetch', 'ping', 'pwd', 'quit', 'raccoon',
  'rm', 'ssh', 'sudo', 'top', 'uname', 'vim', 'wget', 'whoami',
];

const LS_COMPLETIONS = ['infra/', 'projects/', '-la'];
const GIT_COMPLETIONS = ['log', 'status', 'diff', 'branch'];

function getCompletions(val: string): { completed: string; options: string[] } {
  const parts = val.split(/\s+/);
  const cmd = parts[0];
  const lastWord = parts[parts.length - 1];
  const prefix = lastWord === '' ? val : val.slice(0, val.lastIndexOf(lastWord));

  let candidates: string[];

  if (parts.length === 1) {
    // completing command name
    candidates = COMMANDS;
  } else {
    switch (cmd) {
      case 'cat':  candidates = Object.keys(FILES); break;
      case 'ls':   candidates = LS_COMPLETIONS; break;
      case 'git':  candidates = GIT_COMPLETIONS; break;
      case 'uname': candidates = ['-a']; break;
      default: return { completed: val, options: [] };
    }
  }

  const matches = candidates.filter(c => c.startsWith(lastWord));
  if (matches.length === 0) return { completed: val, options: [] };

  if (matches.length === 1) {
    const suffix = parts.length === 1 ? ' ' : ''; // add space after completed command
    return { completed: prefix + matches[0] + suffix, options: [] };
  }

  // multiple: fill to longest common prefix
  let common = matches[0];
  for (const m of matches.slice(1)) {
    let i = 0;
    while (i < common.length && common[i] === m[i]) i++;
    common = common.slice(0, i);
  }
  return {
    completed: common.length > lastWord.length ? prefix + common : val,
    options: matches,
  };
}

// ── file system ────────────────────────────────────────────────────────────────

const FILES: Record<string, string> = {
  'about.txt': `Name:     Karolin Kostial
Role:     Cloud Engineer @ Anexia
Location: Karlsruhe, Germany

I build infrastructure. Auth servers, error trackers, webhook engines,
container registries. Production primitives, not demos.

At home: 2 racks, Raspberry Pis, Juniper switches, my own AI agent,
my own DNS. My own everything.

Also built an 8-bit CPU from 74LS logic chips, because understanding
things at the base level matters.`,

  'stack.txt': `Languages:  Go, Rust, C#, TypeScript
Cloud:      Kubernetes (as a service, @ Anexia), Docker
Systems:    Linux, custom protocols, network engineering
Hardware:   74LS logic, Raspberry Pi, Juniper
Interests:  Compilers, Auth/OIDC, distributed systems`,

  'projects.txt': `54 public repositories on github.com/The127

Highlights:
  Keyline      — OIDC / OAuth2 server (Go)
  Meerkat      — self-hosted error tracker (Rust)
  Pigeon       — webhook delivery engine (Rust)
  Hivetrack    — task planning + AI agents (Go)
  Dockyard     — OCI container registry (Go)
  Mako         — distributed KV store (Rust)

All open-source. No demos. Real infrastructure primitives.`,

  'music.txt': `Artist:   Lia Aura
Genre:    Cinematic / Electronic / Orchestral

Albums:
  Journey      — 6 tracks
  Forces       — 6 tracks
  Opportunity  — 6 tracks
  Nightfall    — 6 tracks

Also paints Warhammer miniatures.
Most liked Reddit post: 150+ upvotes. Skill issue.`,

  'contact.txt': `GitHub:   github.com/The127
Location: Karlsruhe, Germany`,

  'raccoon.txt': `Procyon lotor — the common raccoon.

Highly adaptable. Nocturnal. Perpetually getting into things
they probably shouldn't. Excellent problem solvers. Famously
washes food — not because it needs to, but because it can.
Impressive manual dexterity for a non-primate.

Also: adorable.

Relatable.`,

  '.secrets': `no.`,
};

// ── command processor ──────────────────────────────────────────────────────────

function runCommand(raw: string, history: string[]): { lines: Line[]; action?: 'clear' | 'exit' } {
  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0]?.toLowerCase() ?? '';
  const args = parts.slice(1);

  if (!cmd) return { lines: [] };

  const out  = (text: string): Line => ({ type: 'out',  text });
  const err  = (text: string): Line => ({ type: 'err',  text });
  const info = (text: string): Line => ({ type: 'info', text });

  switch (cmd) {
    case 'help':
      return { lines: [out(
`Available commands:
  whoami            who am I?
  ls [-la] [path]   list directory
  cat <file>        read a file
  pwd               current directory
  uname [-a]        system info
  neofetch          system info + ASCII art
  date              current date/time
  echo <text>       print text
  git log           recent commits
  history           command history
  clear             clear terminal
  exit / quit       close terminal`
      )] };

    case 'whoami':
      return { lines: [out('karolin kostial — cloud engineer, builder, raccoon enthusiast')] };

    case 'pwd':
      return { lines: [out('/home/karolin')] };

    case 'ls': {
      const flag = args.some(a => /^-[la]+$/.test(a));
      const path = args.find(a => !a.startsWith('-'));

      if (!path) {
        if (flag) {
          return { lines: [out(
`total 54
drwxr-xr-x  karolin  karolin  infra/
drwxr-xr-x  karolin  karolin  projects/
-rw-r--r--  karolin  karolin  about.txt
-rw-r--r--  karolin  karolin  stack.txt
-rw-r--r--  karolin  karolin  projects.txt
-rw-r--r--  karolin  karolin  music.txt
-rw-r--r--  karolin  karolin  contact.txt
-rw-r--r--  karolin  karolin  raccoon.txt
----------  karolin  karolin  .secrets`
          )] };
        }
        return { lines: [out('infra/  projects/  about.txt  stack.txt  projects.txt  music.txt  contact.txt  raccoon.txt')] };
      }

      if (path === 'infra/' || path === 'infra') {
        return { lines: [out('2x-racks/  juniper-switches/  raspberry-pis/  ai-agent/  dns-server/  k8s-homelab/')] };
      }

      if (path === 'projects/' || path === 'projects') {
        return { lines: [out('Keyline/  Meerkat/  Pigeon/  Hivetrack/  Dockyard/  Mako/  ...and 48 more')] };
      }

      return { lines: [err(`ls: ${path}: No such file or directory`)] };
    }

    case 'cat': {
      const file = args[0];
      if (!file) return { lines: [err('cat: missing file operand')] };
      if (file === '.secrets') return { lines: [err('cat: .secrets: Permission denied')] };
      const content = FILES[file];
      if (!content) return { lines: [err(`cat: ${file}: No such file or directory`)] };
      return { lines: [out(content)] };
    }

    case 'uname':
      if (args.includes('-a')) {
        return { lines: [out('Linux karolin-homelab 6.12.0 #1 SMP x86_64 GNU/Linux')] };
      }
      return { lines: [out('Linux')] };

    case 'neofetch':
      return { lines: [info(
`    /\\___/\\    karolin@homelab
   ( o   o )   ──────────────────
    =  ▼  =    OS:     Linux (homelab)
   /|       |\\  Host:   2× racks + Juniper
  (_|       |_) Kernel: 6.12.0
               Shell:  zsh
               CPU:    built one (74LS logic chips)
               RAM:    enough
               Uptime: years`
      )] };

    case 'date':
      return { lines: [out(new Date().toString())] };

    case 'echo':
      return { lines: [out(args.join(' '))] };

    case 'history':
      if (history.length === 0) return { lines: [out('(no history)')] };
      return { lines: [out(
        history.slice().reverse().map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`).join('\n')
      )] };

    case 'clear':
      return { lines: [], action: 'clear' };

    case 'exit':
    case 'quit':
      return { lines: [], action: 'exit' };

    case 'sudo':
      return { lines: [err(
`[sudo] password for karolin:
karolin is not in the sudoers file. This incident will be reported.`
      )] };

    case 'rm':
      if (args.some(a => a === '/') || args.some(a => a === '*')) {
        return { lines: [err('nice try.')] };
      }
      return { lines: [err('rm: refusing on principle')] };

    case 'git':
      if (args[0] === 'log') {
        return { lines: [out(
`commit a1b2c3d (HEAD -> main)
Author: Karolin Kostial
Date:   just now

    feat: add interactive terminal to hero section

commit 4e5d6c7
    fix: raccoon photo attribution

commit b8c9d0e
    feat: NowPlaying bar with rAF-driven progress

commit f1a2b3c
    feat: vinyl player with CSS-drawn geometric icons

commit d4e5f6a
    init: 8-bit CPU from 74LS logic chips`
        )] };
      }
      return { lines: [err(`git: '${args[0] ?? ''}' is not a git command. See 'git --help'.`)] };

    case 'vim':
    case 'nano':
    case 'emacs':
      return { lines: [err(`${cmd}: not available in this terminal. Try 'cat' instead.`)] };

    case 'raccoon':
      return { lines: [info(
`   /\\_____/\\
  /  o   o  \\   Procyon lotor
 ( ==  ▼  == )
  \\  \\_|_/  /   Highly adaptable.
   \\       /    Gets into everything.
    \\_____/     Relatable.`
      )] };

    case 'ssh':
      return { lines: [err(`ssh: connect to host ${args[0] ?? 'homelab'}: Not in the mood`)] };

    case 'curl':
    case 'wget':
      return { lines: [err(`${cmd}: this terminal doesn't do HTTP. Check the rest of the page.`)] };

    case 'top':
    case 'htop':
      return { lines: [out(
`PID   CMD        CPU%   MEM%
  1   karolin    99.9   all of it
  2   raccoon     0.1   the cheese`
      )] };

    case 'ping':
      return { lines: [out(
`PING ${args[0] ?? 'localhost'}: 56 data bytes
64 bytes: icmp_seq=0 ttl=64 time=0.042 ms
64 bytes: icmp_seq=1 ttl=64 time=0.039 ms
^C
--- ping statistics ---
2 packets transmitted, 2 received, 0% packet loss`
      )] };

    case 'man':
      return { lines: [err(`man: no manual entry for ${args[0] ?? '(nothing)'}. Type 'help'.`)] };

    default:
      return { lines: [err(`${cmd}: command not found. Type 'help' for available commands.`)] };
  }
}

// ── component ──────────────────────────────────────────────────────────────────

interface TerminalProps {
  onExpandChange?: (v: boolean) => void;
}

export default function Terminal(props: TerminalProps) {
  const [expanded, setExpanded] = createSignal(false);

  const expand = (v: boolean) => { setExpanded(v); props.onExpandChange?.(v); };
  const [lines, setLines] = createSignal<Line[]>([]);
  const [input, setInput] = createSignal('');
  const [cmdHistory, setCmdHistory] = createSignal<string[]>([]);
  const [histIdx, setHistIdx] = createSignal(-1);
  const [inputBeforeHist, setInputBeforeHist] = createSignal('');

  let inputEl!: HTMLInputElement;
  let outputEl!: HTMLDivElement;

  // typewriter refs (inside compact Show block — assigned on render)
  let termOut!: HTMLDivElement;
  let dynArea!: HTMLDivElement;

  // track all typewriter timers so we can cancel them
  const timers: ReturnType<typeof setTimeout>[] = [];
  const clearTimers = () => {
    let t: ReturnType<typeof setTimeout> | undefined;
    while ((t = timers.pop()) !== undefined) clearTimeout(t);
  };

  const scrollToBottom = () => {
    if (outputEl) outputEl.scrollTop = outputEl.scrollHeight;
  };

  // ── interactive shell ────────────────────────────────────────────────────────

  const submit = () => {
    const cmd = input().trim();
    setInput('');
    setHistIdx(-1);
    setInputBeforeHist('');

    if (cmd) setCmdHistory(h => [cmd, ...h]);

    const { lines: result, action } = runCommand(cmd, cmdHistory());

    if (action === 'clear') { setLines([]); return; }
    if (action === 'exit')  { collapse(); return; }

    setLines(prev => [
      ...prev,
      { type: 'cmd', text: cmd },
      ...result,
    ]);
    setTimeout(scrollToBottom, 10);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      collapse();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const { completed, options } = getCompletions(input());
      setInput(completed);
      if (options.length > 1) {
        setLines(prev => [
          ...prev,
          { type: 'cmd', text: input() },
          { type: 'out', text: options.join('  ') },
        ]);
        setTimeout(scrollToBottom, 10);
      }
    } else if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const h = cmdHistory();
      if (!h.length) return;
      if (histIdx() === -1) setInputBeforeHist(input());
      const next = histIdx() === -1 ? 0 : Math.min(histIdx() + 1, h.length - 1);
      setHistIdx(next);
      setInput(h[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx() === -1) return;
      const next = histIdx() - 1;
      if (next < 0) {
        setHistIdx(-1);
        setInput(inputBeforeHist());
      } else {
        setHistIdx(next);
        setInput(cmdHistory()[next]);
      }
    }
  };

  // ── typewriter (compact mode) ────────────────────────────────────────────────

  const startTypewriter = () => {
    clearTimers();
    if (!termOut || !dynArea) return;

    termOut.textContent = '';
    dynArea.innerHTML = '';

    const typeText = (el: HTMLElement, text: string, cb?: () => void) => {
      let i = 0;
      el.textContent = '';
      const id = setInterval(() => {
        el.textContent += text[i++];
        if (i >= text.length) { clearInterval(id); cb?.(); }
      }, 28);
      timers.push(id as unknown as ReturnType<typeof setTimeout>);
    };

    const addCommand = (cmd: string, outText: string, cb?: () => void) => {
      const line = document.createElement('div');
      line.className = styles.termLine;
      const p = document.createElement('span');
      p.className = styles.prompt;
      p.textContent = '$';
      const c = document.createElement('span');
      c.className = styles.cmd;
      line.appendChild(p);
      line.appendChild(c);
      dynArea.appendChild(line);
      // type the command first, then the output
      typeText(c, ' ' + cmd, () => {
        const o = document.createElement('div');
        o.className = styles.out;
        dynArea.appendChild(o);
        typeText(o, outText, cb);
      });
    };

    const t1 = setTimeout(() => {
      typeText(termOut, 'karolin kostial, cloud engineer, builder', () => {
        const t2 = setTimeout(() => {
          addCommand('ls infra/', '2x racks  juniper  raspberry-pis  ai-agent  ...', () => {
            const t3 = setTimeout(() => {
              addCommand('ls projects/ | wc -l', '54');
            }, 300);
            timers.push(t3);
          });
        }, 400);
        timers.push(t2);
      });
    }, 600);
    timers.push(t1);
  };

  const collapse = () => {
    expand(false);
    setLines([]);
    setInput('');
    const t = setTimeout(startTypewriter, 50);
    timers.push(t);
  };

  // ── lifecycle ────────────────────────────────────────────────────────────────

  onMount(startTypewriter);
  onCleanup(clearTimers);

  const handleExpand = () => {
    if (expanded()) return;
    clearTimers();
    expand(true);
    setTimeout(() => inputEl?.focus(), 400);
  };

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    collapse();
  };

  // ── render ───────────────────────────────────────────────────────────────────

  return (
    <div
      class={styles.terminal}
      classList={{ [styles.expanded]: expanded() }}
      onClick={handleExpand}
    >
      {/* header */}
      <div class={styles.header}>
        <div class={styles.dots} aria-hidden="true">
          <span class={styles.dot} />
          <span class={styles.dot} />
          <span class={styles.dot} />
        </div>
        <span class={styles.title}>karolin@homelab:~</span>
        <Show when={!expanded()}>
          <span class={styles.hint}>click to open</span>
        </Show>
        <Show when={expanded()}>
          <button class={styles.closeBtn} onClick={handleClose} title="close terminal">✕</button>
        </Show>
      </div>

      {/* compact typewriter */}
      <Show when={!expanded()}>
        <div class={styles.termBody}>
          <div class={styles.termLine}>
            <span class={styles.prompt}>$</span>
            <span class={styles.cmd}> whoami</span>
          </div>
          <div ref={termOut!} class={styles.out} />
          <div ref={dynArea!} />
          <div class={styles.termLine}>
            <span class={styles.prompt}>$</span>
            <span class={styles.blink} />
          </div>
        </div>
      </Show>

      {/* interactive shell */}
      <Show when={expanded()}>
        <div ref={outputEl!} class={styles.output} onClick={() => inputEl?.focus()}>
          <p class={styles.welcome}>
            Type <span class={styles.hl}>help</span> for available commands.
            Try: <span class={styles.hl}>whoami</span>,{' '}
            <span class={styles.hl}>ls</span>,{' '}
            <span class={styles.hl}>neofetch</span>
          </p>
          <For each={lines()}>
            {(line) => {
              const cls =
                line.type === 'cmd'  ? styles.cmdLine  :
                line.type === 'err'  ? styles.errLine  :
                line.type === 'info' ? styles.infoLine :
                styles.outLine;
              return (
                <div class={cls}>
                  <Show when={line.type === 'cmd'}>
                    <span class={styles.prompt}>$</span>{' '}
                  </Show>
                  <pre class={styles.pre}>{line.text}</pre>
                </div>
              );
            }}
          </For>
        </div>

        <div class={styles.inputLine}>
          <span class={styles.prompt}>$</span>
          <input
            ref={inputEl!}
            class={styles.input}
            value={input()}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            onKeyDown={handleKeyDown}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck={false}
            placeholder=""
          />
        </div>
      </Show>
    </div>
  );
}
