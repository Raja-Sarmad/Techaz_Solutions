import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Smartphone, Globe2, Zap, ShieldCheck, Terminal, Infinity, Code2, Cpu
} from 'lucide-react';

const MobileApps = () => {
  // Animation Settings
  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // --- FIXED: Tech Stack Data Array ---
  const techStackData = [
    {
      icon: <Smartphone className="text-blue-400" size={40} />,
      title: "iOS Development",
      lang: "Swift, SwiftUI, Objective-C"
    },
    {
      icon: <Terminal className="text-purple-400" size={40} />,
      title: "Android Apps",
      lang: "Kotlin, Java, Jetpack Compose"
    },
    {
      icon: <Globe2 className="text-cyan-400" size={40} />,
      title: "Cross-Platform",
      lang: "React Native, Flutter, Expo"
    },
    {
      icon: <Zap className="text-yellow-400" size={40} />,
      title: "Performance",
      lang: "Native Modules & Optimizations"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-blue-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Services</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter uppercase italic text-white">
            Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Engineering</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            We specialize in creating high-performance iOS and Android experiences that leverage the full potential of modern smartphone hardware.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">App Tech Stack</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData.map((tech, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group cursor-default">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div {...slideInLeft} className="relative p-16 md:p-24 rounded-[5rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 text-center overflow-hidden">
          <div className="relative z-10">
            <Infinity className="mx-auto text-blue-400 mb-8" size={60} />
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter uppercase italic text-white">
              Ready to <br /> Launch?
            </h2>
            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:bg-blue-400 hover:scale-110 transition-all duration-500 shadow-[0_20px_80px_-15px_rgba(59,130,246,0.5)]">
              INITIATE PROJECT
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default MobileApps;