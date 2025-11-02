import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-blue-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio & Gallery</h2>
          <p className="mt-3 text-gray-600">A glimpse into our repair work, web projects, and PC builds.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setActive(src)} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-white">
              <img src={src} alt="Portfolio item" className="h-full w-full object-cover transition group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setActive(null)}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active} alt="Preview" className="w-full rounded-xl shadow-2xl" />
            <div className="mt-3 text-right">
              <button onClick={() => setActive(null)} className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-50">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
