import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Timer, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md ring-1 ring-white/15">
            <Rocket size={16} className="text-cyan-300" />
            <span className="text-xs text-slate-200">Guilt-Free • High Protein • Delivered in 30 min</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            FedEx Ice Cream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Mini. Sugar-Free. Mighty.</span>
          </h1>
          <p className="mt-4 text-slate-200/90 max-w-xl">
            Mini-sized, sugar-free, low-calorie ice creams packed with protein. Lightning-fast FedEx delivery brings indulgence to your door in under 30 minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge icon={<ShieldCheck size={14} />} text="Guilt-Free Indulgence" />
            <Badge icon={<Timer size={14} />} text="Delivered in a Flash" />
            <Badge icon={<Rocket size={14} />} text="Packed with Protein" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#order" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-cyan-400 text-slate-900 font-medium shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(34,211,238,0.7)] transition-shadow">
              Order Now — 30 min ETA
            </a>
            <a href="#flavors" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
              Explore Flavors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur ring-1 ring-white/15">
      <span className="text-cyan-300">{icon}</span>
      {text}
    </span>
  );
}
