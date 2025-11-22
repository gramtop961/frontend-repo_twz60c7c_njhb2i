import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function GlassButton({ children, className = '', glow = 'blue', ...props }) {
  const glowColor = {
    blue: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    red: 'shadow-[0_0_30px_rgba(239,68,68,0.5)]',
    white: 'shadow-[0_0_30px_rgba(255,255,255,0.35)]',
  }[glow] || 'shadow-[0_0_30px_rgba(59,130,246,0.5)]';

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'relative overflow-hidden rounded-xl px-5 py-3 font-semibold text-white',
        'bg-white/10 backdrop-blur-xl border border-white/20',
        'transition-all duration-300',
        glowColor,
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
