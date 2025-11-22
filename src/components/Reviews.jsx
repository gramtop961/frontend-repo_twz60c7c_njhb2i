import { motion } from 'framer-motion';

const reviews = [
  { name: 'Alex R.', text: 'The perfect chill — the can looks icy and the taste is even cooler.' },
  { name: 'Jordan P.', text: 'Neon glow, bold fizz. My go-to for gaming nights.' },
  { name: 'Sam K.', text: 'That crisp, refreshing snap every time I crack one open.' },
];

export default function Reviews() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by Millions</h2>
          <p className="mt-2 text-blue-100/80 max-w-2xl">Real vibes from real fans. The refreshing choice for bold moments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <p className="text-white/90">“{r.text}”</p>
              <div className="mt-4 text-sm text-blue-200/80">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -bottom-10 h-40 bg-[radial-gradient(closest-side,_rgba(59,130,246,0.25),_transparent_70%)] blur-2xl" />
      </div>
    </section>
  );
}
