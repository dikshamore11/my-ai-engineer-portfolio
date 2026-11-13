import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-lilac via-[#D7A6CF] to-iris"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Short branded intro; skipped quickly for reduced-motion users.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setLoading(false), reduce ? 150 : 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-plum focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {!loading && (
        <main id="main" className="relative z-10">
          <Hero />
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(230,217,255,0.6),transparent_45%)]"
              aria-hidden="true"
            />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
          </div>
        </main>
      )}

      {!loading && <Footer />}
      <BackToTop />
    </>
  );
}
