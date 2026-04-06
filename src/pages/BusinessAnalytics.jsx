import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, BarChart2, TrendingUp, PieChart, Target, 
  Search, Database, ShieldCheck, Zap, Infinity, 
  LineChart, MousePointer2, Presentation
} from 'lucide-react';

const BusinessAnalytics = () => {
  // NEW ANIMATION: Mask Reveal (Data Scanning Feel)
  const maskReveal = {
    initial: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    whileInView: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
  };

  // --- FIXED: Analytics Metrics Data Array ---
  const analyticsMetrics = [
    {
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      title: "Predictive Modeling",
      lang: "Python, R, TensorFlow, Scikit-learn"
    },
    {
      icon: <Search className="text-emerald-400" size={32} />,
      title: "Big Data Mining",
      lang: "Hadoop, Spark, SQL, NoSQL"
    },
    {
      icon: <PieChart className="text-emerald-400" size={32} />,
      title: "Visual Reporting",
      lang: "PowerBI, Tableau, D3.js, Looker"
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={32} />,
      title: "Risk Analytics",
      lang: "Fraud Detection & Compliance Models"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020403] text-emerald-50 py-16 px-6 font-['Poppins'] selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GRID (Mathematical Precision) */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#10b98111 1px, transparent 1px), linear-gradient(90deg, #10b98111 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* NAVIGATION */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group flex items-center gap-3 text-emerald-300/40 hover:text-emerald-400 transition-all mb-20 w-fit">
            <div className="p-2 border border-emerald-900/30 rounded-full group-hover:border-emerald-500/50">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Analytics Console Exit</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: ANALYTICS HERO --- */}
        <motion.div {...maskReveal} className="mb-32 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-emerald-500/5 border border-emerald-500/20 mb-8">
            <Presentation size={12} className="text-emerald-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Data-Driven Growth Engine</span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic">
            Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-500 to-green-600">Analytics</span>
          </h1>
          <p className="text-emerald-100/50 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            Business analytics (BA) refers to the skills, technologies, and practices for continuous iterative exploration 
            and investigation of past business performance to gain insight and drive business planning. 
            We turn raw data into **Actionable Intelligence**.
          </p>
        </motion.div>

        {/* --- SECTION 2: METRICS BENTO --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {analyticsMetrics.map((item, i) => (
            <motion.div 
              key={i} {...maskReveal} transition={{ delay: i * 0.15 }}
              className="p-8 bg-[#0a0f0c] border border-emerald-900/20 rounded-2xl hover:bg-emerald-500/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500 transition-all"></div>
              <div className="mb-6 group-hover:translate-x-2 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-emerald-100/30 text-sm leading-relaxed">{item.lang}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: TECHNICAL DEPTH (Data Wiki) --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-40">
          <motion.div {...maskReveal} className="lg:col-span-7 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Statistical Accuracy & <br /> Predictive Logic</h2>
            <div className="space-y-8 text-emerald-100/50 text-lg leading-relaxed text-justify">
              <p>
                According to the **Inmon Data Model**, effective business intelligence requires a centralized **Data Warehouse** 
                that serves as a single source of truth. We utilize **OLAP (Online Analytical Processing)** cubes 
                to allow users to analyze multidimensional data from multiple perspectives, 
                enabling deeper dives into regional sales or product performance.
              </p>
              <p>
                Our **Machine Learning Pipelines** implement **Regression Analysis** and **Cluster Detection** 
                to identify hidden market trends. By de-siloing your data, we provide a 360-degree view 
                of your customer lifecycle, significantly reducing acquisition costs and improving retention through 
                **Churn Prediction** models.
              </p>
            </div>
          </motion.div>

          {/* Featured Capability - The Radar Box */}
          <motion.div {...maskReveal} className="lg:col-span-5 p-12 bg-emerald-950/10 border border-emerald-500/20 rounded-full aspect-square flex flex-col items-center justify-center text-center relative group">
             <div className="absolute inset-0 border-2 border-dashed border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <LineChart className="text-emerald-400 mb-8" size={60} />
             <h3 className="text-2xl font-bold mb-4 uppercase italic">Growth Audit</h3>
             <p className="text-emerald-100/40 text-xs leading-relaxed max-w-[250px]">
                Real-time performance monitoring and competitive landscape mapping 
                using AI-driven sentiment analysis.
             </p>
             <div className="mt-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/20"></span>
             </div>
          </motion.div>
        </div>

        {/* --- SECTION 4: FINAL CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-20 rounded-[5rem] bg-[#050806] border-b-8 border-emerald-500/50 text-center overflow-hidden group shadow-[0_50px_100px_-20px_rgba(16,185,129,0.1)]"
        >
          <div className="relative z-10">
            <div className="inline-block mb-10 p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-500">
               <MousePointer2 size={40} className="text-emerald-500 group-hover:text-black transition-colors" />
            </div>
            <h2 className="text-5xl md:text-[8rem] font-black mb-12 tracking-tighter uppercase italic leading-none text-white">
              Unlock Your <br /> Potential
            </h2>
            <button className="bg-emerald-500 text-black px-16 py-6 rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_80px_-10px_rgba(16,185,129,0.6)]">
              INITIALIZE ANALYTICS
            </button>
          </div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] leading-none text-emerald-500 overflow-hidden break-all">
             {Array(50).fill("0101101001011101001010101110101010101101010101011010101").join(" ")}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default BusinessAnalytics;