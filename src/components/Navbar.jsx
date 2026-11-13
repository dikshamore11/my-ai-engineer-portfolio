import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import useActiveSection from '../hooks/useActiveSection';

const sectionIds = navLinks.map((l) => l.id);

/** Floating pill navigation with a sliding active indicator. */
export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <nav
        className={`mx-auto flex h-14 max-w-content items-center justify-between rounded-full border pl-2 pr-2 transition-all duration-500 sm:h-16 sm:pl-3 ${
          scrolled || open
            ? 'border-line bg-ivory/90 shadow-pill backdrop-blur-xl'
            : 'border-white/70 bg-ivory/60 backdrop-blur-md'
        }`}
        aria-label="Primary"
      >
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Diksha More, go to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-blush font-display text-sm font-semibold text-iris-deep transition-transform duration-300 group-hover:scale-105">
            DM
          </span>
          <span className="hidden font-display text-[15px] font-semibold text-plum sm:block">Diksha More</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-iris-deep' : 'text-plum-soft hover:text-plum'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-lavender/80"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            className="btn-primary hidden !px-5 !py-2.5 !shadow-none sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-plum shadow-soft transition-colors hover:bg-lavender/60 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              tabIndex={-1}
              className="fixed inset-0 -z-10 cursor-default bg-plum/10 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="mx-auto mt-2 max-w-content overflow-hidden rounded-3xl border border-line bg-ivory p-3 shadow-lift lg:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-[15px] font-medium transition-colors ${
                        active === link.id ? 'bg-lavender/70 text-iris-deep' : 'text-plum hover:bg-canvas'
                      }`}
                    >
                      {link.label}
                      {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-iris" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="btn-primary mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
