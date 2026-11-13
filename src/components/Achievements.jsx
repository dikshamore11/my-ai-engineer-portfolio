import { Award, BadgeCheck, Trophy } from 'lucide-react';
import { achievements, certifications } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Certifications & Achievements" title="Recognition & learning" />

        {achievements.map((a) => (
          <Reveal key={a.title}>
            <article className="bg-pastel relative overflow-hidden rounded-3xl border border-line p-7 shadow-soft sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/60 blur-2xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-iris-deep shadow-soft">
                  <Trophy className="h-8 w-8" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-iris-deep">
                    Hackathon Winner · {a.org}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">{a.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-plum-soft">{a.description}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="card card-hover flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile h-11 w-11">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <BadgeCheck className="h-5 w-5 text-iris" aria-label="Certified" />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-iris-deep">{c.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-plum-soft">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
