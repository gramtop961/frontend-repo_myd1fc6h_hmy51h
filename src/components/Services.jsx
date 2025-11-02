import React from 'react';
import { Laptop, Globe, Server, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="h-6 w-6 text-blue-600" />,
    title: 'Computer & Laptop Repair',
    desc: 'Fast and affordable repair services for all brands.',
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: 'Web Development',
    desc: 'Custom websites built for businesses and individuals.',
  },
  {
    icon: <Server className="h-6 w-6 text-blue-600" />,
    title: 'Hosting & Domain',
    desc: 'Secure and affordable hosting and domain solutions.',
  },
  {
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    title: 'PC Build & Accessories',
    desc: 'Build your dream PC or buy high-quality components.',
  },
];

const points = [
  'Experienced Technicians',
  'Affordable Pricing',
  'Fast Turnaround',
  'Complete IT Solutions Under One Roof',
  'Trusted by Local Customers',
];

const Services = () => {
  const handleScrollContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to keep your tech running smoothly.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="h-11 w-11 grid place-items-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                {s.icon}
              </div>
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <button onClick={handleScrollContact} className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:gap-3 transition">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Why Choose Us</h3>
            <p className="mt-3 text-gray-600">We combine expertise with care to deliver dependable solutions.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Tech workspace"
              className="w-full h-80 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
