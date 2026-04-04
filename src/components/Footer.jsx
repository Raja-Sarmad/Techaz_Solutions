import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-6 font-['Poppins'] border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* LOGO */}
          <motion.div variants={item} initial="hidden" whileInView="show" custom={0}>
            <img
              src="/gallery/company-logo-2.png"
              alt="logo"
              className="w-48 object-contain hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={item} initial="hidden" whileInView="show" custom={1}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["About", "Services", "Portfolio", "Contact"].map((x, i) => (
                <li key={i}>
                  <a
                    href={`#${x.toLowerCase()}`}
                    className="hover:text-white transition duration-300"
                  >
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={item} initial="hidden" whileInView="show" custom={2}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud",
                "AI Automation",
              ].map((x, i) => (
                <li key={i} className="hover:text-white transition duration-300 cursor-pointer">
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item} initial="hidden" whileInView="show" custom={3}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400 text-sm">
              <a href="tel:+923000000000" className="flex gap-2 hover:text-white transition">
                <Phone size={16} /> +92 300 0000000
              </a>

              <a href="mailto:info@yourcompany.com" className="flex gap-2 hover:text-white transition">
                <Mail size={16} /> info@yourcompany.com
              </a>

              <div className="flex gap-2">
                <MapPin size={16} /> Karachi, Pakistan
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-gray-500 text-xs">

          <p>© {year} OTECH SOLUTIONS</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;