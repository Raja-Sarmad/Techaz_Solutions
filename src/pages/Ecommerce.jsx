import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ShoppingCart, CreditCard, Package, Users, 
  Store, ShieldCheck, BarChart4, Truck, Smartphone, 
  CheckCircle2, Infinity, Globe, ShoppingBag, Zap
} from 'lucide-react';

const Ecommerce = () => {
  // NEW ANIMATION: Smooth Scale & Fade (Luxury Retail Feel)
  const scaleFade = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const commerceStats = [
    { label: "Global Reach", value: "24/7", desc: "Round-the-clock digital storefront accessibility." },
    { label: "Security", value: "PCI-L1", desc: "Highest level of payment card industry standards." },
    { label: "Speed", value: "< 2s", desc: "Optimized Largest Contentful Paint for conversion." }
  ];

  // --- FIXED: Capability Boxes Data Array ---
  const capabilityBoxes = [
    {
      icon: <Zap className="text-rose-400" size={24} />,
      title: "Headless Engine",
      desc: "Decoupled frontend for lightning-fast speeds and total design freedom."
    },
    {
      icon: <Store className="text-rose-400" size={24} />,
      title: "Omnichannel Sync",
      desc: "Synchronize inventory across Amazon, Shopify, and physical stores."
    },
    {
      icon: <Truck className="text-rose-400" size={24} />,
      title: "Smart Logistics",
      desc: "Automated shipping rate calculation and real-time tracking APIs."
    },
    {
      icon: <Smartphone className="text-rose-400" size={24} />,
      title: "PWA Readiness",
      desc: "App-like experience directly in the browser with offline capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-rose-50 py-16 px-6 font-['Poppins'] selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* BACKGROUND AMBIANCE (Soft Rose Glow) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* NAVIGATION */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group flex items-center gap-3 text-rose-300/50 hover:text-rose-400 transition-all mb-20 w-fit">
            <div className="p-2 border border-rose-900/30 rounded-full group-hover:border-rose-500/50">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Marketplace</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: LUXURY HERO --- */}
        <motion.div {...scaleFade} className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/5 border border-rose-500/20 mb-8">
            <ShoppingBag size={12} className="text-rose-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">Next-Gen Retail Engine</span>
          </div>
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600">Commerce</span>
          </h1>
          <p className="text-rose-200/60 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            E-commerce is the activity of electronically buying or selling products on online services. 
            We engineer **Headless Commerce** solutions that decouple the frontend from the backend, 
            providing unmatched speed and omnichannel flexibility.
          </p>
        </motion.div>

        {/* --- SECTION 2: BENTO STATS --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-40">
          {commerceStats.map((stat, i) => (
            <motion.div 
              key={i} {...scaleFade} transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center group hover:bg-rose-500/5 transition-colors"
            >
              <h4 className="text-rose-500/50 uppercase tracking-widest text-[10px] font-bold mb-4">{stat.label}</h4>
              <div className="text-5xl font-black mb-4 text-white group-hover:scale-110 transition-transform">{stat.value}</div>
              <p className="text-rose-100/40 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: TECHNICAL DEPTH (Wiki Style) --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div {...scaleFade} className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">Secure Transactions & <br /> PCI Compliance</h2>
            <div className="space-y-6 text-rose-100/60 text-lg leading-relaxed">
              <p>
                According to the **PCI-DSS (Payment Card Industry Data Security Standard)**, any business handling credit card data 
                must follow strict security protocols. We integrate **Level 1 Service Providers** like Stripe and Adyen 
                to ensure that sensitive data never touches your local servers.
              </p>
              <p>
                By implementing **Tokenization** and **3D-Secure 2.0**, we reduce fraud risks and chargebacks. 
                Our checkout flows are optimized for **mobile-first users**, utilizing Apple Pay and Google Pay 
                to reduce friction and increase successful transaction rates by up to **35%**.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 rounded-xl border border-rose-500/20 text-xs font-bold">
                <ShieldCheck size={16} /> PCI-DSS Compliant
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-xs font-bold">
                <Globe size={16} /> Multi-Region Sync
              </div>
            </div>
          </motion.div>

          {/* Featured Capability Cards */}
          <motion.div {...scaleFade} className="grid grid-cols-1 gap-4">
             {capabilityBoxes.map((box, i) => (
               <div key={i} className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] flex gap-6 items-start">
                  <div className="p-3 bg-rose-500/10 rounded-2xl">{box.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{box.title}</h4>
                    <p className="text-rose-100/40 text-sm leading-relaxed">{box.desc}</p>
                  </div>
               </div>
             ))}
          </motion.div>
        </div>

        {/* --- SECTION 4: CALL TO ACTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-20 rounded-[5rem] bg-gradient-to-b from-rose-950/20 to-transparent border border-rose-500/20 text-center overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-700">
               <CreditCard size={40} className="text-rose-500" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-none">
              Deploy Your <br /> Storefront
            </h2>
            <button className="bg-rose-500 text-black px-20 py-6 rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_50px_-10px_rgba(244,63,94,0.5)]">
              KICKSTART PROJECT
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://transparenttextures.com')] opacity-5"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default Ecommerce;