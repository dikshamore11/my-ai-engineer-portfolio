import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Trophy } from 'lucide-react';
import { profile } from '../data/portfolio';
import TypingText from './TypingText';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const ease = [0.22, 1, 0.36, 1];
const enter = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const float = (duration, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: 'easeInOut' },
});

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="bg-pastel absolute inset-0 opacity-70" />
      <div className="dot-grid absolute inset-0" />
      <motion.div
        className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-lavender/80 blur-[110px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-blush blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, -24, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* floating decorative elements */}
      <motion.span {...float(7)} className="absolute left-[8%] top-[22%] hidden h-4 w-4 rounded-full border-2 border-lilac/50 lg:block" />
      <motion.span {...float(9, 14)} className="absolute bottom-[18%] left-[42%] hidden h-2.5 w-2.5 rounded-full bg-lilac/50 lg:block" />
      <motion.span {...float(8, 12)} className="absolute right-[6%] top-[18%] hidden h-3 w-3 rotate-45 rounded-[3px] bg-blush ring-1 ring-lilac/30 md:block" />
      <motion.span {...float(10)} className="absolute bottom-[12%] right-[12%] hidden h-6 w-6 rounded-full border border-lilac/40 md:block" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}

function Portrait() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[270px] sm:max-w-[330px] lg:max-w-[380px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease }}
    >
      {/* pastel glow behind the photograph */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-br from-lilac/60 via-blush to-lavender blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {/* soft orbit ring */}
      <div className="absolute -inset-4 rounded-[3rem] border border-white/80" aria-hidden="true" />

      <div className="relative rounded-[2.5rem] bg-white/70 p-2.5 shadow-lift ring-1 ring-white backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[2rem] bg-lavender">
          <img
            src={profile.photo}
            alt="Portrait of Diksha More"
            width="1106"
            height="1400"
            className="aspect-[4/5] w-full object-cover object-top"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lilac/25 via-transparent to-transparent" />
        </div>
      </div>

      {/* floating info cards */}
      <motion.div
        className="absolute -left-5 bottom-12 flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-pill sm:-left-12"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 0.9 },
          x: { delay: 0.9 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-plum">Open to opportunities</span>
      </motion.div>
      <motion.div
        className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-pill sm:-right-10"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.05 },
          x: { delay: 1.05 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <span className="icon-tile h-9 w-9 !rounded-xl">
          <Trophy className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[10.5px] font-medium uppercase tracking-wider text-plum-soft">HackHive 2025</span>
          <span className="block text-sm font-semibold text-plum">1st Place</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <Background />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            {...enter(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-[12.5px] font-medium text-plum-soft shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-iris" aria-hidden="true" />
            {profile.headline}
          </motion.p>

          <motion.p {...enter(0.15)} className="font-display text-lg font-medium text-plum-soft sm:text-xl">
            Hi, I&apos;m {profile.name}
          </motion.p>

          <motion.h1
            {...enter(0.22)}
            className="mt-2 text-[2.35rem] font-semibold leading-[1.12] tracking-tight sm:text-[3.4rem] lg:text-[3.6rem]"
          >
            An <span className="text-gradient">AI Engineer</span> crafting{' '}
            <span className="relative inline-block">
              <span className="relative z-10">intelligent</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-lavender sm:bottom-2 sm:h-4" aria-hidden="true" />
            </span>{' '}
            web experiences.
          </motion.h1>

          <motion.p {...enter(0.3)} className="mt-5 min-h-[1.75rem] text-base text-plum-soft sm:text-lg">
            Currently building <TypingText words={profile.rotatingTitles} />
          </motion.p>

          <motion.p
            {...enter(0.38)}
            className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-plum-soft sm:text-[17px] lg:mx-0"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            {...enter(0.46)}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className="btn-soft w-full sm:w-auto">
              <Download className="h-4 w-4 text-iris" aria-hidden="true" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            {...enter(0.54)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile (opens in a new tab)">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile (opens in a new tab)">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Send an email">
              <Mail className="h-5 w-5" />
            </a>
            <span className="ml-2 flex items-center gap-1.5 text-sm text-plum-soft">
              <MapPin className="h-4 w-4 text-iris" aria-hidden="true" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <Portrait />
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-plum-soft transition-colors hover:text-iris-deep md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to the About section"
      >
        Scroll
        <span className="flex h-9 w-6 justify-center rounded-full border border-lilac/60 bg-white/60 pt-1.5" aria-hidden="true">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-iris"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}
