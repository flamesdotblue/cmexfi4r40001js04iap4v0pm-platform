import React, { useEffect, useMemo, useState } from 'react';
import { Truck, Timer, Rocket } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

function useETA(minutes = 30) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const eta = useMemo(() => new Date(now + minutes * 60 * 1000), [now, minutes]);
  const hh = eta.getHours().toString().padStart(2, '0');
  const mm = eta.getMinutes().toString().padStart(2, '0');
  return `${hh}:${mm}`;
}

export default function OrderCTA() {
  const eta = useETA(30);
  return (
    <section id="order" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(165,243,252,0.10),transparent_60%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Delivered in a Flash</h2>
            <p className="mt-3 text-slate-300 max-w-xl">
              We ship with FedEx priority local dispatch. Your frozen treats stay perfectly frosty in our cold chain from kitchen to doorstep.
            </p>

            <Timeline />
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="h-12 w-12 rounded-xl bg-cyan-400/20 flex items-center justify-center ring-1 ring-cyan-300/30">
                <Timer className="text-cyan-300" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Estimated arrival</div>
                <div className="text-2xl font-semibold">Today by {eta}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Feature icon={<Rocket className="text-emerald-300" />} title="Protein-Packed" desc="11–13g protein per mini cup." />
              <Feature icon={<Truck className="text-cyan-300" />} title="30-Min Delivery" desc="Fast, reliable FedEx dispatch." />
            </div>

            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 text-slate-900 font-medium px-6 py-3 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(34,211,238,0.7)] transition-shadow">
              Start Order
            </a>
            <p className="mt-3 text-center text-xs text-slate-400">No sugar added • Low calorie • Macro-friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center ring-1 ring-white/10">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-slate-400">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const controls = useAnimationControls();
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ width: '10%', transition: { duration: 0.4 } });
        await controls.start({ width: '35%', transition: { duration: 0.8 } });
        await controls.start({ width: '70%', transition: { duration: 0.8 } });
        await controls.start({ width: '100%', transition: { duration: 0.6 } });
        await controls.start({ opacity: 0, transition: { duration: 0.2 } });
        await controls.start({ width: '0%', opacity: 1, transition: { duration: 0.2 } });
      }
    };
    sequence();
  }, [controls]);

  const steps = [
    { label: 'Order placed' },
    { label: 'Packed cold' },
    { label: 'Out for delivery' },
    { label: 'Delivered' },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between text-xs text-slate-400">
        {steps.map((s, i) => (
          <span key={i}>{s.label}</span>
        ))}
      </div>
      <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300"
          initial={{ width: '0%' }}
          animate={controls}
        />
      </div>
    </div>
  );
}
