import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { MessageCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth text-gray-900 bg-white">
      {/* Hero with nav and Spline */}
      <Hero />

      {/* Services and why-us */}
      <Services />

      {/* Gallery with lightbox */}
      <Gallery />

      {/* Contact form + business info */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2025 Akshar Enterprise. Made with ❤️ by Akshar Enterprise</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/910000000000?text=Hi%20Akshar%20Enterprise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-4 py-3 shadow-lg hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};

export default App;
