import { useEffect, useState } from 'react';

/** Returns the id of the section currently in view (for the nav indicator). */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));

    const onScroll = () => { if (window.scrollY < 200) setActive(''); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [ids]);

  return active;
}
