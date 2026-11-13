import { ArrowUpRight } from 'lucide-react';
import { profile, projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="AI-powered applications that take on real-world problems in hiring, interview preparation and human–computer interaction."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08} className={`min-w-0 ${p.featured ? 'lg:col-span-2' : ''}`}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-soft group"
          >
            See more on GitHub
            <ArrowUpRight
              className="h-4 w-4 text-iris transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
