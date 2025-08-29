import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ava M.',
    text: 'Tastes like a cheat day without the guilt. The 30-minute delivery is unreal!'
  },
  {
    name: 'Jordan P.',
    text: 'Protein-packed and actually creamy. These minis are my new post-workout fix.'
  },
  {
    name: 'Sam K.',
    text: 'Arrived frosty and fast. Finally, ice cream that fits my macros.'
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">What Customers Say</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">Loved for flavor, macros, and speed. Real quotes from real fans.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-slate-100">“{r.text}”</p>
              <div className="mt-4 text-sm text-slate-400">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
