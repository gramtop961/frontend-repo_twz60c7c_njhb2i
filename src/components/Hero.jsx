import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for Pepsi vibe */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.45),_transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(239,68,68,0.45),_transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/80" />
      </div>

      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/60"
            initial={{ y: '100%', x: Math.random() * 100 + '%' }}
            animate={{ y: '-10vh', opacity: [0, 1, 0.2, 0] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4, ease: 'easeOut' }}
            style={{ left: `${Math.random() * 100}%`, bottom: `-${Math.random() * 30}vh`, filter: 'blur(0.5px)' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-white/90">Ice-cold. Neon fresh. Pure Pepsi energy.</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_40px_rgba(59,130,246,0.35)]">
            Refresh Your World
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-blue-100/90">
            Bold taste meets futuristic design. Experience the sparkle with glossy reflections, glowing highlights, and ultra-crisp refreshment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GlassButton glow="blue">Grab Yours Now</GlassButton>
            <GlassButton glow="red" className="bg-white/5">Explore Flavors</GlassButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
