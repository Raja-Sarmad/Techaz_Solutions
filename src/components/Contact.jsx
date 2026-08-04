import React from 'react';
import { Mail, Phone, MapPin, Send, Zap, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBackdrop from './SectionBackdrop';

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white overflow-hidden font-['Poppins'] text-gray-900 text-left">
      <SectionBackdrop />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black tracking-[0.2em] uppercase">
                <Zap size={14} className="fill-white" />
                Connect With Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[0.9] tracking-tighter">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Something Epic.
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm font-medium">
                Your vision combined with our technical expertise leads to digital excellence. Let’s start the conversation.
              </p>
            </div>

            {/* Contact Tiles */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Email Support', value: 'hello@techflow.com' },
                { icon: <Phone size={20} />, label: 'Quick Call', value: '+92 3262176836' },
                { icon: <MapPin size={20} />, label: 'Headquarters', value: 'Malir-15, Karachi, Pakistan' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white border border-gray-200 p-5 rounded-2xl flex items-center gap-5 shadow-lg shadow-blue-600/5 hover:border-blue-400/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">{item.label}</p>
                    <p className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-lg shadow-blue-600/5 flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200">
                  <ShieldCheck className="text-blue-600" size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-sm leading-none mb-1">Secure Response</h4>
                <p className="text-gray-500 text-xs font-medium">We typically reply within 2 business hours.</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: GLASS FORM --- */}
          <div className="lg:col-span-7">
            <div className="relative bg-white backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-2xl shadow-blue-600/10">
              <form className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      
                      className="w-full bg-slate-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      
                      className="w-full bg-slate-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Project Category</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                        <option className="bg-white">Web Development</option>
                        <option className="bg-white">Graphic Designing</option>
                        <option className="bg-white">Seo Analytics</option>
                        <option className="bg-white">Digital Marketing</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Globe size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">Message Details</label>
                  <textarea 
                    rows="4"
                    placeholder="Briefly describe your project goals..."
                    className="w-full bg-slate-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="group w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-600/25 transition-all active:scale-95">
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
