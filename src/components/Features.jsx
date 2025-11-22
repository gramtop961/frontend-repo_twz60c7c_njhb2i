import { motion } from 'framer-motion';
import { Sparkles, Droplets, IceCream2, Zap } from 'lucide-react';

const items = [
  { icon: Sparkles, title: 'Ultra-Crisp Taste', desc: 'A spark of sweetness with a smooth finish and satisfying fizz.' },
  { icon: Droplets, title: 'Ice-Cold Refresh', desc: 'Chilled perfection with condensation kissed cans and frosty vibes.' },
  { icon: IceCream2, title: 'Perfect Pairings', desc: 'From game nights to beach days — Pepsi elevates every moment.' },
  { icon: Zap, title: 'Neon Energy', desc: 'Modern glow and bold flavor that lights up your senses.' },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[80%] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_60%)] blur-3xl" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/60 to-red-500/60 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              </div>
              <p className="mt-3 text-blue-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
