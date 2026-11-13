import { motion } from 'framer-motion';

/** Brief branded intro screen; App unmounts it once the page is ready. */
export default function Loader() {
  return (
    <motion.div
      className="bg-pastel fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-lavender border-t-lilac"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-display text-lg font-semibold text-iris-deep shadow-soft">
            DM
          </span>
        </motion.div>
        <motion.p
          className="font-display text-sm font-medium tracking-wide text-plum-soft"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Diksha More
        </motion.p>
      </div>
    </motion.div>
  );
}
