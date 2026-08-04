import React from "react";
import { Monitor, Brain, Cloud, Layers, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Monitor size={20} />,
    title: "Custom Web & Mobile Applications",
    desc: "Scalable apps engineered for speed, security and growth.",
  },
  {
    icon: <Brain size={20} />,
    title: "AI & Automation Integration",
    desc: "Smart AI workflows that cut costs and save valuable time.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps Solutions",
    desc: "Reliable infrastructure that scales effortlessly with you.",
  },
  {
    icon: <Layers size={20} />,
    title: "SaaS Product Development",
    desc: "From idea to launch, SaaS built to sell and scale.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-white font-['Poppins']">
      {/* Decorative background */}
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-[#3B5BFF]/15 to-[#6C4DFF]/15 blur-[120px] rounded-full" />
      <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] bg-gradient-to-tr from-[#6C4DFF]/15 to-[#3B5BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-64 h-64 rounded-full border border-[#3B5BFF]/10" />
      <div className="absolute top-24 right-10 w-40 h-40 rounded-full border border-[#6C4DFF]/10" />
      <div
        className="absolute top-16 right-1/3 w-56 h-56 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute bottom-16 left-10 w-40 h-40 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,77,255,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-[#3B5BFF]/20 via-transparent to-[#6C4DFF]/20 blur-2xl rounded-[3rem]" />
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                alt="Professional Business Woman"
                className="relative w-full h-[340px] md:h-[400px] lg:h-[440px] object-cover rounded-[2.5rem] border-[5px] border-white shadow-[0_35px_70px_-20px_rgba(59,91,255,0.35)]"
              />
            </motion.div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF] text-white shadow-lg shadow-[#3B5BFF]/25 text-[11px] font-black tracking-[0.2em] uppercase">
                Partner with Excellence
              </span>

              <h2 className="text-2xl md:text-3xl xl:text-[2.1rem] font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
                Transforming Your Ideas <br />
                Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF]">Digital Reality</span>
              </h2>

              <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed font-light">
                We are a full-service software house dedicated to helping businesses scale. We combine modern technology and business strategy to create solutions that deliver real results.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 hover:border-[#3B5BFF]/30 hover:shadow-xl hover:shadow-[#3B5BFF]/10 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#3B5BFF]/20 text-[#3B5BFF] flex items-center justify-center mb-2.5 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#3B5BFF] group-hover:to-[#6C4DFF] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* CTA + Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="group flex items-center gap-3 bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF] hover:shadow-2xl hover:shadow-[#3B5BFF]/30 text-white px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95">
                Build Your Project
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg shadow-gray-200/60 rounded-2xl px-5 py-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B5BFF] to-[#6C4DFF] flex items-center justify-center">
                  <PhoneCall className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1 text-nowrap">Direct Line</p>
                  <p className="text-base font-bold text-gray-900 tracking-tight text-nowrap">+92 300 1234567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
