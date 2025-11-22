import { motion } from 'framer-motion';

const flavors = [
  { name: 'Pepsi', color: 'from-blue-600 to-blue-400', glow: 'shadow-[0_0_40px_rgba(59,130,246,0.45)]' },
  { name: 'Pepsi Zero Sugar', color: 'from-slate-800 to-slate-600', glow: 'shadow-[0_0_40px_rgba(148,163,184,0.45)]' },
  { name: 'Wild Cherry', color: 'from-rose-600 to-pink-500', glow: 'shadow-[0_0_40px_rgba(244,63,94,0.45)]' },
  { name: 'Vanilla', color: 'from-amber-400 to-yellow-300', glow: 'shadow-[0_0_40px_rgba(251,191,36,0.45)]' },
];

export default function Flavors() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Flavors for Every Vibe</h2>
          <p className="mt-2 text-blue-100/80 max-w-2xl">Explore the lineup — from the original classic to zero sugar and bold twists. Each can shines with glossy gradients and neon glow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${f.color} text-white ${f.glow}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.25),transparent_30%)]" />
              <div className="relative">
                <h3 className="text-xl font-semibold drop-shadow">{f.name}</h3>
                <p className="mt-2 text-white/90">Crisp refreshment with a finish that sparkles.</p>
                <button className="mt-4 inline-flex items-center rounded-xl bg-white/20 backdrop-blur-md px-4 py-2 text-sm border border-white/30">Taste the vibe</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="absolute left-10 bottom-10 h-48 w-48 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(239,68,68,0.25),_transparent_60%)]" />
      </div>
    </section>
  );
}
