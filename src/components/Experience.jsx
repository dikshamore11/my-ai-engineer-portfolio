import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Internships where I shipped web applications end to end, from database to UI."
        />

        <Timeline
          items={experience}
          icon={Briefcase}
          renderItem={(job) => (
            <article className="card card-hover p-6 sm:p-8">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 font-medium text-iris-deep">{job.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/60 px-3 py-1 text-xs font-semibold text-iris-deep">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-1 text-xs text-plum-soft">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </div>
              </header>

              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-plum-soft">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lilac" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                <span className="sr-only">Technologies used:</span>
                {job.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
