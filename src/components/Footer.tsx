import type { MouseEvent } from 'react';
import { ArrowUpRight } from './icons';
import PictureIcon from './ui/PictureIcon';

const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/Pitso4859', label: 'GitHub', image: '/icon-logo/github_logo.png' },
  { href: 'https://linkedin.com/in/pitso-nkotolane', label: 'LinkedIn', image: '/icon-logo/linkedin_logo.png' },
];

export default function Footer() {
  const goToBooking = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document
      .getElementById('booking-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-[#243043] bg-[#0c1320] text-[#c7ced8]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-8 lg:py-14">
        <div className="grid gap-10 border-b border-[#263247] pb-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr] lg:gap-14">
          <div className="max-w-xl">
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1320]"
              aria-label="Go to the top of the portfolio"
            >
              <img
                src="/favicon-48x48.png"
                alt=""
                className="h-11 w-11 rounded-lg border border-[#344158] object-cover"
              />
              <span>
                <span className="block text-[15px] font-semibold text-white">
                  Pitso Nkotolane
                </span>
                <span className="mt-0.5 block text-xs text-[#8f9bad]">
                  Software Developer
                </span>
              </span>
            </a>

            <h2 className="mt-6 max-w-lg text-xl font-semibold leading-8 tracking-tight text-white sm:text-2xl">
              Open to software development opportunities and meaningful technical work.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#9ca7b8]">
              I build practical web applications with Java, Spring Boot, React,
              TypeScript and SQL, with a focus on clear code and reliable user experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking-section"
                onClick={goToBooking}
                className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1320]"
              >
                <PictureIcon surface="transparent" src="/icon-logo/calendar.png" size="xs" className="bg-[#0c1320] p-1" imageClassName="brightness-0 invert" />
                Book a call
              </a>
              <a
                href="mailto:pnkotolane@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-[#3b485d] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#68758a] hover:bg-[#131d2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1320]"
              >
                <PictureIcon surface="transparent" src="/icon-logo/email_logo.png" size="xs" />
                Email me
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8b9d]">
              Portfolio
            </p>
            <nav className="mt-4" aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex text-[#c7ced8] transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8b9d]">
              Contact
            </p>
            <div className="mt-4 space-y-3.5 text-sm">
              <a
                href="mailto:pnkotolane@gmail.com"
                className="flex items-start gap-3 text-[#c7ced8] transition-colors hover:text-white"
              >
                <PictureIcon surface="transparent" src="/icon-logo/email_logo.png" size="sm" className="mt-0.5" />
                <span className="pt-1">pnkotolane@gmail.com</span>
              </a>
              <a
                href="tel:+27638654343"
                className="flex items-start gap-3 text-[#c7ced8] transition-colors hover:text-white"
              >
                <PictureIcon surface="transparent" src="/icon-logo/phone_logo.png" size="sm" className="mt-0.5" />
                <span className="pt-1">+27 63 865 4343</span>
              </a>
              <div className="flex items-start gap-3 text-[#c7ced8]">
                <PictureIcon surface="transparent" src="/icon-logo/location_logo.png" size="sm" className="mt-0.5" />
                <span className="pt-1">Johannesburg, South Africa</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#344158] px-3 py-2 text-sm font-medium text-[#c7ced8] transition-colors hover:border-[#647189] hover:bg-[#131d2d] hover:text-white"
                  aria-label={`${link.label} profile`}
                >
                  <PictureIcon surface="transparent" src={link.image} size="xs" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#7f8b9d]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-[#768296] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Pitso Nkotolane. All rights reserved.
          </p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
