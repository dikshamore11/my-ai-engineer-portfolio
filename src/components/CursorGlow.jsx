import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Soft lavender light that trails the pointer, on fine-pointer devices only. */
export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 110, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 110, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const move = (e) => {
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[520px] w-[520px] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(185,154,239,0.16) 0%, rgba(249,230,240,0.14) 40%, transparent 70%)',
      }}
    />
  );
}
