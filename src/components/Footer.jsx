import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Icons with Manual SVGs (No more Lucide export errors)
  const socialLinks = [
    {
      name: 'Facebook',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    {
      name: 'LinkedIn',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      name: 'Instagram',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    {
      name: 'YouTube',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
    }
  ];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1600880212340-0a2c28663806?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150&q=80",
  ];

  return (
    <footer className="w-full bg-white font-sans pt-10">
      
      {/* --- TOP CONTACT BAR --- */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#020617] via-[#0b1b4d] to-[#4c1d95] rounded-2xl p-8 md:p-12 flex flex-wrap items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-wrap items-center gap-10 md:gap-16 z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Phone size={24} className="text-blue-600 fill-blue-50" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Gives us a Call</p>
                <p className="text-white text-xl font-bold leading-none">123-456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Send me Mail</p>
                <p className="text-white text-xl font-bold leading-none">OTechItService.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Contact Us</p>
                <p className="text-white text-xl font-bold leading-none">8708 Technology, USA</p>
              </div>
            </div>
          </div>

          <button className="z-10 flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl active:scale-95">
            Contact Us <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-blue-700 tracking-tighter italic">Otech</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            We foster a culture of teamwork & creative problem-solving to deliver exceptional results for our clients.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((item, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                {item.svg}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xl mb-8">Quick Links</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Service', 'Case Study', 'Testimonial'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xl mb-8">Our Service</h4>
          <ul className="space-y-4">
            {['Cyber Security', 'Network Analysis', 'Data Recovery', 'It Service'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xl mb-8">Instagram Post</h4>
          <div className="grid grid-cols-3 gap-2">
            {instagramPosts.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img src={src} alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-8 text-center">
        <p className="text-gray-500 font-medium text-sm">
          Copyright ©{currentYear} O-Tech. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;