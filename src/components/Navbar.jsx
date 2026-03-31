import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Yahan IDs ko App.jsx ki IDs se exact match kiya gaya hai
  const navLinks = [
    { name: 'About us', href: '#Aboutus' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#CaseStudies' },
    { name: 'Testimonial', href: '#Testimonial' },
    { name: 'Work', href: '#projects' }, // projects wali ID work ke liye
    { name: 'Faq', href: '#Faq' },
    { name: 'Blog', href: '#Blog' },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 px-4 sm:px-6 lg:px-8 py-6 pointer-events-none">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto
        ${isScrolled ? 'py-2 px-4 bg-black/60' : 'py-3 px-6 bg-white/5'} 
        backdrop-blur-xl border border-white/10 rounded-full shadow-2xl`}
      >
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group pl-2">
          <div className="bg-white p-1.5 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:rotate-[20deg]">
            <Cpu className="h-5 w-5 text-blue-700 fill-blue-700" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Tech<span className="text-blue-400">Flow</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-3 bg-white text-blue-700 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            Get Started
            <div className="bg-blue-100 p-1 rounded-full">
               <ArrowUpRight size={14} className="text-blue-700" />
            </div>
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-4 top-24 pointer-events-auto transition-all duration-500 origin-top
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#0A101E]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-white active:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#contact" className="mt-10 block w-full text-center bg-blue-600 text-white py-4 rounded-full font-bold shadow-xl" onClick={() => setIsOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;