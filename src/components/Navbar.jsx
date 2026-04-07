import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'About us', href: '#Aboutus' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#CaseStudies' },
    { name: 'Testimonial', href: '#Testimonial' },
    { name: 'Work', href: '#projects' },
    { name: 'Faq', href: '#FAQs' },
    { name: 'Blog', href: '#Blog' },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 px-4 sm:px-6 lg:px-8 py-6 pointer-events-none">
      {/* Navbar Container: Default White with Strong Shade */}
      <div className={`max-w-7xl mx-auto flex items-center justify-center transition-all duration-500 pointer-events-auto
        bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 rounded-full
        ${isScrolled ? 'py-2 px-4' : 'py-4 px-8'}`}
      >
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group pl-2 -translate-y-2 mr-auto">
          <img 
            src="/gallery/company-logo.png"
            alt="Company Logo"
            className="h-10 w-auto object-contain scale-[6.4] origin-left transition-transform duration-300 group-hover:scale-[6.6]"
          />
        </a>

        {/* Desktop Menu - Solid Black Text */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 ml-6">
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-3 bg-blue-600 text-white px-7 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Get Started
            <div className="bg-white/20 p-1 rounded-full">
               <ArrowUpRight size={14} className="text-white" />
            </div>
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Solid White */}
      <div className={`lg:hidden fixed inset-x-4 top-28 pointer-events-auto transition-all duration-500 origin-top
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-2 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="mt-10 block w-full text-center bg-blue-600 text-white py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl" 
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
