import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <footer className="bg-white text-gray-800 pt-12 pb-10 font-['Poppins'] border-t">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* LOGO */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0}>
            <img
              src="/gallery/company-logo-2.png"
              alt="logo"
              className="w-44 -mt-14 -translate-x-4 scale-150 hover:scale-[1.5] origin-top-left transition duration-300 drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {["About", "Services", "Portfolio", "Contact"].map((x, i) => (
                <li key={i}>
                  <a
                    href={`#${x.toLowerCase()}`}
                    className="relative group text-gray-500 hover:text-black transition"
                  >
                    {x}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Automation"].map((x, i) => (
                <li
                  key={i}
                  className="text-gray-500 hover:text-black transition cursor-pointer hover:translate-x-1 duration-300"
                >
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+923000000000"
                className="flex items-center gap-3 text-gray-500 hover:text-black transition group"
              >
                <Phone size={16} className="group-hover:scale-110 transition" />
                +92 300 0000000
              </a>

              <a
                href="mailto:info@yourcompany.com"
                className="flex items-center gap-3 text-gray-500 hover:text-black transition group"
              >
                <Mail size={16} className="group-hover:scale-110 transition" />
                info@yourcompany.com
              </a>

              <div className="flex items-center gap-3 text-gray-500">
                <MapPin size={16} />
                Karachi, Pakistan
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center border-t pt-6 text-xs text-gray-500"
        >
          <p>© {year} OTECH SOLUTIONS</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;