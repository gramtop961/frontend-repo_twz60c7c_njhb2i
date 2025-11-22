import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

export default function CTA() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900/40 to-red-600/20 p-10 text-center text-white backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent_30%)]" />
          <h3 className="text-3xl md:text-4xl font-extrabold">Ready to Refresh?</h3>
          <p className="mt-2 text-blue-100/90">Tap into the chill. The future tastes bold.</p>
          <div className="mt-6 flex justify-center gap-4">
            <GlassButton glow="white" className="px-6">Grab Yours Now</GlassButton>
            <GlassButton glow="red" className="px-6 bg-white/5">Find a Store</GlassButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
