import React from "react";
import { CheckCircle2, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import SectionBackdrop from './SectionBackdrop';

const AboutUs = () => {
  const services = [
    "Custom Web & Mobile Applications",
    "Cloud & DevOps Solutions",
    "AI & Automation Integration",
    "SaaS Product Development",
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/50 to-white font-['Poppins']">
      <SectionBackdrop />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE: Visuals */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-0 ml-auto w-[90%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
                alt="Our Team" 
                className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full border border-gray-200"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[-30px] left-0 z-10 w-[55%] border-[8px] border-white rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Development Process" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-[-30px] right-4 z-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-[2rem] shadow-2xl w-[45%]"
            >
               <h4 className="text-4xl font-black mb-1">10+</h4>
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                 Years of Excellence
               </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Business Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[11px] font-black tracking-widest uppercase">
                Partner with Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 leading-tight tracking-tight">
                Transforming Your Ideas <br />
                Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Reality</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                We are a full-service software house dedicated to helping businesses scale. We combine modern technology and business strategy to create solutions that deliver real results.
              </p>
            </motion.div>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-full shadow-md shadow-blue-600/20">
                    <CheckCircle2 className="text-white h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-gray-100 w-full"></div>

            <div className="flex flex-wrap items-center gap-8">
              <button className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                Build Your Project
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
                  <PhoneCall className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1 text-nowrap">Direct Line</p>
                  <p className="text-lg font-bold text-gray-900 tracking-tight text-nowrap">+92 300 1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
