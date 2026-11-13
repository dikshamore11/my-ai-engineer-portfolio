import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Education" title="Academic background" />

        <Timeline
          items={education}
          icon={GraduationCap}
          renderItem={(e) => (
            <article className="card card-hover p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold leading-snug sm:text-xl">{e.degree}</h3>
                  <p className="mt-1.5 font-medium text-iris-deep">{e.school}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-plum-soft">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {e.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      e.status === 'Completed' ? 'bg-canvas text-plum-soft ring-1 ring-line' : 'bg-blush text-[#9A3F6E]'
                    }`}
                  >
                    {e.status}
                  </span>
                  <span className="text-xs font-medium text-plum-soft">{e.period}</span>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center rounded-2xl bg-gradient-to-r from-lavender/70 to-blush/80 px-4 py-2">
                <span className="font-display text-[15px] font-semibold text-iris-deep">{e.score}</span>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
