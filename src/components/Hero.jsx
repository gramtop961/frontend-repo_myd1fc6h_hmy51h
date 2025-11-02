import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="relative bg-gradient-to-b from-white to-blue-50">
      {/* Top Navigation */}
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-lg">
            <Rocket size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">Akshar Enterprise</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => handleScroll('about')} className="hover:text-blue-600">About</button>
          <button onClick={() => handleScroll('services')} className="hover:text-blue-600">Services</button>
          <button onClick={() => handleScroll('gallery')} className="hover:text-blue-600">Gallery</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-blue-600">Contact</button>
          <button onClick={() => handleScroll('contact')} className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700">
            <Phone size={16} />
            <span>Get in touch</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center min-h-[70vh] py-8">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Your One-Stop Tech Solution Partner
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            Fast, reliable and modern solutions for computer repair, custom PCs, web development, and
            hosting — crafted for individuals and growing businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => handleScroll('services')} className="rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700">
              Explore Services
            </button>
            <button onClick={() => handleScroll('contact')} className="rounded-full border border-gray-300 px-6 py-3 font-medium hover:border-blue-300 hover:text-blue-700">
              Request a Quote
            </button>
          </div>
          <p id="about" className="sr-only">About anchor</p>
          <p className="mt-10 text-sm text-gray-500 max-w-prose">
            At Akshar Enterprise, we specialize in providing reliable computer repair, professional web
            development, and quality tech solutions tailored to your needs.
          </p>
        </div>

        <div className="relative h-[380px] md:h-[480px] lg:h-[520px] order-1 lg:order-2">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlays that won't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
