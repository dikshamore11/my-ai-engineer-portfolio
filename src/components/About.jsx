import { Briefcase, GraduationCap, Target, Trophy } from 'lucide-react';
import { about } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const highlightIcons = [GraduationCap, Target, Briefcase, Trophy];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About Me" title="Building software that solves real problems" />

        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
          <Reveal className="card p-7 sm:p-10">
            <div className="space-y-5 text-[15.5px] leading-[1.8] text-plum-soft sm:text-base">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-[17px] font-medium leading-[1.7] text-plum' : undefined}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
              {about.focus.map((f) => (
                <span key={f} className="rounded-full bg-gradient-to-r from-lavender to-blush px-4 py-1.5 text-[13px] font-medium text-iris-deep">
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 self-start sm:gap-5">
            {about.highlights.map((h, i) => {
              const Icon = highlightIcons[i];
              return (
                <Reveal key={h.label} delay={0.1 + i * 0.07} className="card card-hover p-5 sm:p-6">
                  <span className="icon-tile mb-5 h-11 w-11">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-plum-soft">{h.label}</p>
                  <p className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-plum sm:text-base">{h.value}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
