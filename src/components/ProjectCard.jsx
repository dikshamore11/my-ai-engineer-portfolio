import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Lightbulb, Lock } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectCover from './ProjectCover';

/** Project card with a soft pointer-tracking highlight and a gentle 3D tilt. */
export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(230,217,255,0.55), transparent 60%)`;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set(x);
    my.set(y);
    if (e.pointerType === 'mouse') {
      ry.set((x / r.width - 0.5) * 3);
      rx.set((y / r.height - 0.5) * -3);
    }
  };
  const onLeave = () => {
    mx.set(-400);
    my.set(-400);
    rx.set(0);
    ry.set(0);
  };

  const featured = project.featured;

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
      className="card group relative flex h-full flex-col overflow-hidden p-5 transition-[box-shadow,border-color] duration-300 hover:border-lilac/70 hover:shadow-lift sm:p-7"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} aria-hidden="true" />

      <div className={`relative flex flex-1 flex-col gap-7 ${featured ? 'lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-10' : ''}`}>
        <ProjectCover project={project} />

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-iris">
                <span className="text-plum-soft">0{index + 1}</span> · {project.tag}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                {project.name}
                {project.alias && (
                  <span className="ml-2 align-middle text-sm font-medium text-plum-soft">({project.alias})</span>
                )}
              </h3>
            </div>
            {project.live && (
              <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Live
              </span>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-plum-soft">{project.overview}</p>

          <div className="mt-5 rounded-2xl bg-gradient-to-br from-blush/80 to-lavender/40 p-4">
            <p className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#9A3F6E]">
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> The problem
            </p>
            <p className="text-sm leading-relaxed text-plum">{project.problem}</p>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-plum-soft">Key features</p>
            <ul className={`grid gap-2 ${featured ? 'sm:grid-cols-2' : ''}`}>
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-plum">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-iris" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full bg-lavender/60 px-3 py-1 text-[12.5px] font-medium text-iris-deep">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-soft !px-5 !py-2.5"
                  aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
                >
                  <GithubIcon className="h-4 w-4" /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group/btn !px-5 !py-2.5"
                  aria-label={`${project.name} live demo (opens in a new tab)`}
                >
                  Live Demo
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
              {!project.github && !project.live && (
                <span className="inline-flex items-center gap-2 text-sm text-plum-soft">
                  <Lock className="h-4 w-4 text-iris" aria-hidden="true" /> Repository not public yet. Happy to walk through it in an interview.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
