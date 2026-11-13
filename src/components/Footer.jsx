import { Mail } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="relative bg-ivory">
      <div className="h-px bg-gradient-to-r from-transparent via-lilac/50 to-transparent" aria-hidden="true" />
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="font-display text-lg font-semibold text-plum">
            Diksha <span className="text-gradient">More</span>
          </a>
          <p className="mt-1 text-sm text-plum-soft">{profile.role} · {profile.location}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-plum-soft">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-iris-deep">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub (opens in a new tab)">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn (opens in a new tab)">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-5 text-center text-xs text-plum-soft">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React, Tailwind CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
