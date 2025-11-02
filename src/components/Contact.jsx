import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-3 text-gray-600">Send a quick message and we’ll get back to you soon.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" />
              </div>
              <textarea className="w-full rounded-xl border border-gray-300 px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" />
              <button className="w-fit rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700">Send Message</button>
              <p className="text-xs text-gray-500">Note: This form is a placeholder and not connected to a backend.</p>
            </form>
          </div>

          {/* Info */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-blue-50 to-white">
            <h3 className="text-xl font-semibold">Business Info</h3>
            <div className="mt-4 space-y-3 text-gray-700">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> <span>Add your address here</span></p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> <span>+91-00000 00000</span></p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> <span>email@example.com</span></p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Find us on</h4>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="mt-6">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086423836797!2d-122.41941528468153!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1616151200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
