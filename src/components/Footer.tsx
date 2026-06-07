import { Github, Linkedin, Mail } from './icons';

const socialLinks = [
  {
    href: 'mailto:pnkotolane@gmail.com',
    label: 'Email Pitso Nkotolane',
    title: 'Email',
    Icon: Mail,
  },
  {
    href: 'https://github.com/Pitso4859',
    label: 'GitHub profile',
    title: 'GitHub',
    Icon: Github,
  },
  {
    href: 'https://linkedin.com/in/pitso-nkotolane',
    label: 'LinkedIn profile',
    title: 'LinkedIn',
    Icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <nav aria-label="Social links">
          <ul className="flex items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
                  aria-label={link.label}
                >
                  <link.Icon className="h-5 w-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Pitso Nkotolane · Built with{' '}
          <span className="text-zinc-700">React</span>,{' '}
          <span className="text-zinc-700">TypeScript</span> &{' '}
          <span className="text-zinc-700">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}