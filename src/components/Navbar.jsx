import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { services, SERVICE_CATEGORIES } from '../data/services';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', dropdown: true },
    { name: 'Work', href: '/work' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) =>
    location.pathname === path ||
    (path === '/services' && location.pathname.startsWith('/services'));

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 px-4 sm:px-6 lg:px-8 py-6 pointer-events-none">
      {/* Navbar Container */}
      <div
        className={`max-w-7xl mx-auto flex items-center justify-center transition-all duration-500 pointer-events-auto
          bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 rounded-full
          ${isScrolled ? 'py-2 px-4' : 'py-4 px-8'}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group pl-2 -translate-y-2 mr-auto">
          <img
            src="/gallery/company-logo.png"
            alt="Company Logo"
            className="h-10 w-auto object-contain scale-[6.4] origin-left transition-transform duration-300 group-hover:scale-[6.6]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold hover:text-blue-600 transition-colors relative group py-1 flex items-center gap-1 ${
                    isActive(link.href) ? 'text-blue-600' : 'text-gray-900'
                  }`}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>

                {/* Services Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 origin-top ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="w-[760px] max-w-[80vw] bg-white border border-gray-100 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-8 max-h-[62vh] overflow-y-auto">
                      {SERVICE_CATEGORIES.map((cat) => {
                        const items = services.filter((s) => s.category === cat.key);
                        return (
                          <div key={cat.key}>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3">
                              {cat.label}
                            </p>
                            <ul className="space-y-1.5">
                              {items.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    to={`/services/${s.slug}`}
                                    className="text-sm font-medium text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all inline-block"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="px-8 pb-6 pt-2 border-t border-gray-100">
                      <Link
                        to="/services"
                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-bold hover:text-blue-600 transition-colors relative group py-1 ${
                  isActive(link.href) ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            )
          )}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 ml-6">
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-3 bg-blue-600 text-white px-7 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Get Started
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-4 top-28 pointer-events-auto transition-all duration-500 origin-top ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)] max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="col-span-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-gray-900 hover:text-blue-600"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileServicesOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
                    }`}
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.key} className="mb-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">{cat.label}</p>
                        <div className="grid grid-cols-1 gap-1.5">
                          {services
                            .filter((s) => s.category === cat.key)
                            .map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="text-sm font-medium text-gray-500 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {s.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-bold hover:text-blue-600 ${
                    isActive(link.href) ? 'text-blue-600' : 'text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <Link
            to="/contact"
            className="mt-8 block w-full text-center bg-blue-600 text-white py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
