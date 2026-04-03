import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Icons with Manual SVGs to avoid Lucide errors
  const socialLinks = [
    {
      name: 'Facebook',
      color: 'hover:bg-[#1877F2]',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    {
      name: 'LinkedIn',
      color: 'hover:bg-[#0A66C2]',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      name: 'Instagram',
      color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    {
      name: 'YouTube',
      color: 'hover:bg-[#FF0000]',
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
    <footer className="w-full bg-[#020617] font-sans pt-20 relative overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- FLOATING CONTACT BAR --- */}
        <div className="relative group overflow-hidden bg-slate-900/40 border border-slate-800 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Call Anytime</p>
                  <p className="text-white font-semibold">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Write to us</p>
                  <p className="text-white font-semibold">support@otech.com</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Our Base</p>
                  <p className="text-white font-semibold">New York, USA</p>
                </div>
              </div>
            </div>

            <button className="relative group/btn overflow-hidden bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <ArrowUpRight size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* --- GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Logo & About */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              OTech
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg font-medium">
              We specialize in transforming complex challenges into elegant digital solutions through innovative engineering.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-11 h-11 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-500 hover:text-white hover:-translate-y-2 ${item.color} shadow-lg`}
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              {['Cyber Security', 'Cloud Solutions', 'Data Analytics', 'IT Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-purple-400 transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Insta Feed */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-8">Latest Insight</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((src, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-800 border border-slate-700">
                  <img src={src} alt="IG" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="border-t border-slate-900 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} <span className="text-white">OTech.</span> All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;