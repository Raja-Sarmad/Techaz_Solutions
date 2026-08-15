import React from 'react';
import { Mail, Phone, MapPin, Send, Zap, ShieldCheck, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBackdrop from './SectionBackdrop';
import { socialLinks } from './SocialIcons';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 overflow-hidden font-['Poppins'] text-gray-900 dark:text-gray-100 text-left">
      <SectionBackdrop />
      <div className="absolute -top-20 right-1/4 w-72 h-72 bg-cyan-400/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-400/10 blur-[110px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* --- LEFT SIDE: INFO --- */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div {...fadeUp} className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-blue-600/20">
                <Zap size={14} className="fill-white" />
                Get In Touch
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-[0.9] tracking-tighter">
                Every Project Starts <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  With A Message.
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-sm font-medium">
                Your vision combined with our technical expertise leads to digital excellence. Let's start the conversation.
              </p>
            </motion.div>

            {/* Contact Tiles */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Email Support', value: 'hello@techazsolutions.com', href: 'mailto:hello@techazsolutions.com' },
                { icon: <Phone size={20} />, label: 'Quick Call', value: '+92 326 2176836', href: 'tel:+923262176836' },
                { icon: <MapPin size={20} />, label: 'Headquarters', value: 'Malir-15, Karachi, Pakistan', href: undefined }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                >
                  <a
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl flex items-center gap-5 shadow-lg shadow-blue-600/5 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-gray-900 dark:text-gray-100 font-bold group-hover:text-blue-600 transition-colors tracking-tight">{item.value}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicator */}
            <motion.div {...fadeUp} className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg shadow-blue-600/5 flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200">
                  <ShieldCheck className="text-blue-600" size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-bold text-sm leading-none mb-1">Secure Response</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">We typically reply within 2 business hours.</p>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp} className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mr-2">Follow Us</span>
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  aria-label={s.name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:border-transparent hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: GLASS FORM --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white dark:bg-gray-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-2xl shadow-blue-600/10">
              <div className="absolute -top-6 left-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black tracking-widest uppercase shadow-lg shadow-blue-600/20">
                <Clock3 size={13} />
                Avg. reply: under 2 hours
              </div>

              <form className="space-y-7 pt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Carter"
                      className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white dark:focus:bg-gray-900 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white dark:focus:bg-gray-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 555 000 0000"
                      className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white dark:focus:bg-gray-900 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Budget Range</label>
                    <select className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                      <option className="bg-white dark:bg-gray-900">$1k – $5k</option>
                      <option className="bg-white dark:bg-gray-900">$5k – $15k</option>
                      <option className="bg-white dark:bg-gray-900">$15k – $50k</option>
                      <option className="bg-white dark:bg-gray-900">$50k+</option>
                      <option className="bg-white dark:bg-gray-900">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Project Category</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                      <option className="bg-white dark:bg-gray-900">Web Development</option>
                      <option className="bg-white dark:bg-gray-900">Graphic Designing</option>
                      <option className="bg-white dark:bg-gray-900">SEO Analytics</option>
                      <option className="bg-white dark:bg-gray-900">Digital Marketing</option>
                      <option className="bg-white dark:bg-gray-900">AI & Automation</option>
                      <option className="bg-white dark:bg-gray-900">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Zap size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Message Details</label>
                  <textarea
                    rows="4"
                    placeholder="Briefly describe your project goals, timeline and any references..."
                    className="w-full bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white dark:focus:bg-gray-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-600/25 hover:brightness-110 transition-all active:scale-[0.98] overflow-hidden">
                  <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                  No spam. Your details stay 100% confidential.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
