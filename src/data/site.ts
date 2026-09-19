// Central site configuration. Edit values here; components read from this file.

export const site = {
  name: 'Faraz Ahmed',
  handle: '@PakCyberbot',
  title: 'PakCyberbot — Faraz Ahmed',
  role: 'Security Researcher',
  // Your current job title — shown in the hero identity card. Edit freely.
  currentRole: 'Infosec Analyst',
  pitch:
    'Red teamer, bug bounty hunter and CTF player. I break things, document them clearly, and build tooling for offensive security.',
  description:
    'Faraz Ahmed (PakCyberbot) — OSCP-certified security researcher specializing in red teaming, bug bounty, OSINT and CTFs. Achievements, projects, and write-ups.',
  url: 'https://pakcyberbot.com',
  email: 'contact@pakcyberbot.com',
  locale: 'en',
  // "View all certificates" target — the certs directory in this GitHub repo.
  certificatesUrl:
    'https://github.com/PakCyberbot/PakCyberbot.github.io/tree/main/certificates',
  mediumFeed: 'https://medium.com/feed/@pakcyberbot',
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export type Social = {
  label: string;
  href: string;
  icon: string; // astro-icon name, e.g. "simple-icons:github"
  handle: string;
};

// Primary socials (shown in header/footer and Contact).
export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/PakCyberbot', icon: 'simple-icons:github', handle: '@PakCyberbot' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pakcyberbot/', icon: 'simple-icons:linkedin', handle: 'in/pakcyberbot' },
  { label: 'Medium', href: 'https://pakcyberbot.medium.com/', icon: 'simple-icons:medium', handle: '@pakcyberbot' },
  { label: 'YouTube', href: 'https://www.youtube.com/@pakcyberbot', icon: 'simple-icons:youtube', handle: '@pakcyberbot' },
  { label: 'X', href: 'https://twitter.com/pakcyberbot', icon: 'simple-icons:x', handle: '@pakcyberbot' },
];

// Platform / CTF / profile links (Contact + About).
export const platforms: Social[] = [
  { label: 'HackTheBox', href: 'https://app.hackthebox.com/public/users/1098862', icon: 'simple-icons:hackthebox', handle: 'PakCyberbot' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/PakCyberbot', icon: 'simple-icons:tryhackme', handle: 'PakCyberbot' },
  { label: 'CTFtime', href: 'https://ctftime.org/user/138629', icon: 'lucide:flag', handle: 'PakCyberbot' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/pakcyberbot', icon: 'simple-icons:hackerrank', handle: 'pakcyberbot' },
  { label: 'CryptoHack', href: 'https://cryptohack.org/user/PakCyberbot/', icon: 'lucide:lock', handle: 'PakCyberbot' },
  { label: 'crackmes.one', href: 'https://crackmes.one/user/pakcyberbot', icon: 'lucide:file-code-2', handle: 'pakcyberbot' },
  { label: 'Pwned Labs', href: 'https://pwnedlabs.io/users/pakcyberbot', icon: 'lucide:radar', handle: 'pakcyberbot' },
  { label: 'Google Cloud', href: 'https://www.cloudskillsboost.google/public_profiles/4b4fb9c0-10b4-4d04-919e-4df9129364f8', icon: 'simple-icons:googlecloud', handle: 'PakCyberbot' },
];

// Roles cycled by the hero typing effect.
export const roles = [
  'Security Researcher',
  'Red Teamer',
  'Bug Bounty Hunter',
  'CTF Player',
  'CTF Challenge Author',
];

// Skills shown on Home / About.
export const skills = [
  { name: 'Red Teaming', level: 65, icon: 'lucide:crosshair' },
  { name: 'Bug Bounty', level: 70, icon: 'lucide:bug' },
  { name: 'OSINT', level: 85, icon: 'lucide:search' },
  { name: 'Cloud Security', level: 40, icon: 'lucide:shield' },
  { name: 'Challenge Creation', level: 75, icon: 'lucide:flag' },
  { name: 'Programming', level: 75, icon: 'lucide:code' },
];
