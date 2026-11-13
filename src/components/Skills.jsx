import { BookOpen } from 'lucide-react';
import { coreSubjects, skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

// Pastel tile tints cycled across categories.
const tints = [
  'from-lavender to-[#EFE6FF]',
  'from-blush to-[#FBEFF5]',
  'from-[#EDE3FF] to-blush',
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Technical Skills"
          title="My toolkit"
          subtitle="Languages, frameworks and tools I've used across internships, academic work and personal projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(i % 3) * 0.08}>
                <article className="card card-hover group h-full p-6 sm:p-7">
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tints[i % tints.length]} text-iris-deep transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
                    >
                      <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <h3 className="text-[17px] font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-line bg-ivory px-3 py-1.5 text-[13px] font-medium text-plum transition-colors duration-200 hover:border-lilac hover:bg-lavender/50"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="card mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex shrink-0 items-center gap-3">
            <span className="icon-tile h-10 w-10">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-[15px] font-semibold">Core Computer Science</h3>
          </div>
          <span className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />
          <ul className="flex flex-wrap gap-2">
            {coreSubjects.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
