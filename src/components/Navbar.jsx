import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sun, Moon } from 'lucide-react';
import { services, SERVICE_CATEGORIES } from '../data/services';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) =>
    location.pathname === path ||
    (path === '/services' && location.pathname.startsWith('/services'));

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 px-4 sm:px-6 lg:px-8 py-3 pointer-events-none">
      {/* Navbar Container */}
      <div
        className={`max-w-7xl mx-auto flex items-center gap-3 sm:gap-4 transition-all duration-300 pointer-events-auto
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/80 dark:border-gray-800 rounded-full
          ${isScrolled ? 'py-1.5 px-3 sm:px-4 shadow-md' : 'py-2 px-3 sm:px-5 shadow-sm'}`}
      >
        {/* Logo — square PNG has padding; crop via overflow + scale */}
        <Link
          to="/"
          className={`group relative shrink-0 mr-auto overflow-hidden flex items-center transition-all duration-300 ${
            isScrolled ? 'h-9 w-32 sm:w-36' : 'h-11 sm:h-12 w-40 sm:w-48 lg:w-56'
          }`}
        >
          <img
            src="/gallery/company-logo.png"
            alt="Techaz Solutions"
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-auto max-w-none object-contain object-left dark:brightness-0 dark:invert transition-all duration-300 group-hover:opacity-90 ${
              isScrolled ? 'h-20' : 'h-28 sm:h-32 lg:h-36'
            }`}
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
                    isActive(link.href) ? 'text-blue-600' : 'text-gray-900 dark:text-gray-100'
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
                  <div className="w-[760px] max-w-[80vw] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden">
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
                                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:translate-x-1 transition-all inline-block"
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
                    <div className="px-8 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800">
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
                  isActive(link.href) ? 'text-blue-600' : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            )
          )}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 ml-4 sm:ml-6">
          <button
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label="Toggle light and dark theme"
            className="relative w-14 h-8 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center cursor-pointer shrink-0"
          >
            <Sun
              size={12}
              className={`absolute left-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-amber-400' : 'text-gray-400'
              }`}
            />
            <Moon
              size={12}
              className={`absolute right-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-600' : 'text-indigo-500'
              }`}
            />
            <span
              className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-3 bg-blue-600 text-white px-7 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Get Started
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black dark:text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-4 top-[4.5rem] sm:top-20 pointer-events-auto transition-all duration-500 origin-top ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)] max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="col-span-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600"
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
                                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600"
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
                    isActive(link.href) ? 'text-blue-600' : 'text-gray-900 dark:text-gray-100'
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
