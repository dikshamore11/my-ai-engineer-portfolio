import { motion } from 'framer-motion';
import { Bot, Image as ImageIcon, MessageSquareText, Mic, Sparkles, AudioLines, BarChart3 } from 'lucide-react';

/**
 * Visual for a project card. Uses a real screenshot when one exists;
 * otherwise renders abstract cover art (clearly illustrative, not a fake screenshot).
 */
const covers = {
  aura: {
    center: Bot,
    orbit: [MessageSquareText, Mic, ImageIcon],
    label: 'Text · Voice · Image',
  },
  interview: {
    center: AudioLines,
    orbit: [Mic, Sparkles, BarChart3],
    label: 'Ask · Answer · Feedback',
  },
};

function CoverArt({ variant }) {
  const c = covers[variant] ?? covers.aura;
  const Center = c.center;
  return (
    <div className="bg-pastel relative flex h-full w-full items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div className="absolute h-56 w-56 rounded-full border border-lilac/30" />
      <div className="absolute h-36 w-36 rounded-full border border-lilac/40" />
      <motion.div
        className="absolute h-56 w-56"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {c.orbit.map((Icon, i) => {
          const angle = (i / c.orbit.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <span
              key={i}
              className="absolute flex h-10 w-10 items-center justify-center rounded-xl bg-white text-iris shadow-soft"
              style={{ left: `calc(50% + ${Math.cos(angle) * 112}px - 20px)`, top: `calc(50% + ${Math.sin(angle) * 112}px - 20px)` }}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
          );
        })}
      </motion.div>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-iris-deep shadow-lift">
        <Center className="h-7 w-7" />
      </span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-plum-soft backdrop-blur">
        {c.label}
      </span>
    </div>
  );
}

export default function ProjectCover({ project, className = '' }) {
  return (
    <div className={`relative min-w-0 overflow-hidden rounded-2xl border border-line bg-canvas ${className}`}>
      {project.image ? (
        <>
          {/* minimal browser chrome around the real screenshot */}
          <div className="flex items-center gap-1.5 border-b border-line bg-ivory px-4 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-blush ring-1 ring-[#EBC8D9]" />
            <span className="h-2.5 w-2.5 rounded-full bg-lavender ring-1 ring-lilac/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#EDE8F5] ring-1 ring-line" />
            {project.live && (
              <span className="ml-3 min-w-0 truncate rounded-full bg-white px-3 py-0.5 text-[11px] text-plum-soft ring-1 ring-line">
                {new URL(project.live).host}
              </span>
            )}
          </div>
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            loading="lazy"
            width="1280"
            height="800"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </>
      ) : (
        <div className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.03]">
          <CoverArt variant={project.cover} />
        </div>
      )}
    </div>
  );
}
