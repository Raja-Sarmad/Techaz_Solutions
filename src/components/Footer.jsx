import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { socialLinks } from "./SocialIcons";

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
    <footer className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 pt-12 pb-10 font-['Poppins'] border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* LOGO */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0} className="flex items-center">
            <Link to="/" aria-label="Go to homepage" className="inline-block">
              <img
                src="/gallery/company-logo-2.png"
                alt="Techaz Solutions"
                className="h-28 sm:h-32 md:h-36 lg:h-44 xl:h-52 w-auto max-w-full object-contain dark:brightness-0 dark:invert hover:scale-105 transition duration-300"
              />
            </Link>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-200">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/#projects" },
                { name: "Contact", href: "/contact" },
              ].map((x, i) => (
                <li key={i}>
                  <Link
                    to={x.href}
                    className="relative group text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                  >
                    {x.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-200">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((x, i) => (
                <li key={i}>
                  <Link
                    to={`/services/${x.slug}`}
                    className="relative group text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                  >
                    {x.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3}>
            <h4 className="mb-5 text-sm font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-200">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+923000000000"
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition group"
              >
                <Phone size={16} className="group-hover:scale-110 transition" />
                +92 3262176836
              </a>

              <a
                href="mailto:info@yourcompany.com"
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition group"
              >
                <Mail size={16} className="group-hover:scale-110 transition" />
                info@yourcompany.com
              </a>

              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <MapPin size={16} />
                Karachi, Pakistan
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-[10px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-3">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    aria-label={s.name}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center border-t dark:border-gray-800 pt-6 text-xs text-gray-500 dark:text-gray-400"
        >
          <p>© {year} OTECH SOLUTIONS</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black dark:hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white transition">
              Terms
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;