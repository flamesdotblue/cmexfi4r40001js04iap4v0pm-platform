import React, { useRef } from 'react';
import { Check } from 'lucide-react';

const FLAVORS = [
  {
    name: 'Vanilla Bean Boost',
    accent: 'from-amber-200 to-amber-400',
    kcal: 90,
    protein: 12,
    notes: ['Sugar-Free', 'Real Vanilla', 'Mini Cup']
  },
  {
    name: 'Midnight Chocolate',
    accent: 'from-slate-300 to-slate-500',
    kcal: 100,
    protein: 13,
    notes: ['Cocoa Rich', 'No Added Sugar', 'Mini Cup']
  },
  {
    name: 'Berry Rush',
    accent: 'from-pink-200 to-fuchsia-400',
    kcal: 85,
    protein: 11,
    notes: ['Real Berries', 'Naturally Tangy', 'Mini Cup']
  },
  {
    name: 'Matcha Lift',
    accent: 'from-emerald-200 to-emerald-400',
    kcal: 95,
    protein: 12,
    notes: ['Ceremonial Matcha', 'Smooth & Clean', 'Mini Cup']
  },
];

export default function FlavorGallery() {
  return (
    <section id="flavors" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Flavor Gallery</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">3D-inspired cards that spotlight our mini cups. Low-cal, high-protein, and seriously delicious.</p>
          </div>
          <span className="hidden sm:inline text-xs text-slate-400">Tilt a card</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVORS.map((f, i) => (
            <TiltCard key={i} flavor={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ flavor }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <div
      className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 ring-1 ring-white/10"
      onMouseLeave={reset}
      onMouseMove={handleMove}
    >
      <div
        ref={ref}
        className="relative h-64 rounded-2xl bg-slate-900/40 backdrop-blur-sm transition-transform duration-200 will-change-transform"
      >
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${flavor.accent} opacity-10`} />

        <div className="absolute inset-0 flex flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">{flavor.kcal} kcal</div>
            <div className="text-xs text-cyan-300 font-medium">{flavor.protein}g protein</div>
          </div>
          <div className="mt-auto">
            <h3 className="text-lg font-semibold leading-snug">{flavor.name}</h3>
            <ul className="mt-2 space-y-1">
              {flavor.notes.map((n, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-emerald-300"><Check size={14} /></span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center shadow-[0_10px_40px_-8px_rgba(59,130,246,0.35)]">
          <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${flavor.accent}`} />
        </div>
      </div>
    </div>
  );
}
