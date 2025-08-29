import React from 'react';
import Hero from './components/Hero';
import FlavorGallery from './components/FlavorGallery';
import Testimonials from './components/Testimonials';
import OrderCTA from './components/OrderCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <FlavorGallery />
      <Testimonials />
      <OrderCTA />
      <footer className="text-center text-sm text-slate-400 py-10">
        © {new Date().getFullYear()} FedEx Ice Cream — Guilt-free joy, delivered fast.
      </footer>
    </div>
  );
}
