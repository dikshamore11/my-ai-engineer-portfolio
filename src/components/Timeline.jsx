import { motion } from 'framer-motion';
import Reveal from './Reveal';

/** Vertical timeline with pastel purple indicators. Shared by Experience and Education. */
export default function Timeline({ items, renderItem, icon: Icon }) {
  return (
    <ol className="relative">
      <motion.span
        className="absolute bottom-6 left-[21px] top-6 w-[2px] origin-top rounded-full bg-gradient-to-b from-lilac via-lavender to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      />
      {items.map((item, i) => (
        <li key={i} className="relative pb-8 pl-16 last:pb-0 sm:pl-20">
          <Reveal delay={i * 0.08} className="absolute left-0 top-6" y={0}>
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-canvas bg-gradient-to-br from-lavender to-blush text-iris-deep shadow-soft"
              aria-hidden="true"
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
          </Reveal>
          <Reveal delay={i * 0.1}>{renderItem(item, i)}</Reveal>
        </li>
      ))}
    </ol>
  );
}
