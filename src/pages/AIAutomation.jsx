import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// 'CpuChip' ko yahan se nikal diya gaya hai taake error na aaye
import { 
  ArrowLeft, Zap, Brain, Bot, Cpu, Network, 
  Sparkles, Binary, Fingerprint, Activity, Infinity, 
  Terminal 
} from 'lucide-react';

const AIAutomation = () => {
  // Animation Logic
  const blurScale = {
    initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" }
  };

  // --- FIXED: Automation Stack Data Array (Line 21) ---
  const automationStack = [
    {
      icon: <Brain className="text-yellow-400" size={40} />,
      title: "Neural Networks",
      lang: "Deep Learning & Pattern Recognition"
    },
    {
      icon: <Bot className="text-yellow-400" size={40} />,
      title: "NLP Systems",
      lang: "Natural Language Processing & LLMs"
    },
    {
      icon: <Fingerprint className="text-yellow-400" size={40} />,
      title: "Biometric AI",
      lang: "Security & Authentication Logic"
    },
    {
      icon: <Network className="text-yellow-400" size={40} />,
      title: "Cognitive Flow",
      lang: "Self-Healing Workflows & RPA"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 py-16 px-6 font-['Poppins'] selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* Background Aura */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-500/10 blur-[160px] rounded-full"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group flex items-center gap-3 text-slate-500 hover:text-yellow-400 transition-all mb-20 w-fit">
            <div className="p-2 border border-slate-800 rounded-lg group-hover:border-yellow-500/50">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit Neural Network</span>
          </Link>
        </motion.div>

        {/* Section 1: Hero */}
        <motion.div {...blurScale} className="mb-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/5 border border-yellow-500/20 mb-8">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Autonomous Intelligence Stack</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic">
            AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-amber-700">Automation</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light italic">
            Artificial Intelligence (AI) is the core of modern business efficiency. 
            We engineer **Cognitive Workflows** that eliminate repetitive overhead.
          </p>
        </motion.div>

        {/* Section 2: Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {automationStack.map((item, i) => (
            <motion.div 
              key={i} {...blurScale} transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center hover:bg-yellow-500/5 transition-all group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest">{item.lang}</p>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Technical Details */}
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-40">
          <motion.div {...blurScale} className="lg:col-span-7 space-y-10 text-justify">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none text-white">Neural Logic & <br /> Robotic Efficiency</h2>
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                According to the **Turing Test** standards, AI development must prioritize transparency. 
                We implement **Explainable AI (XAI)** frameworks to ensure every automated decision is traceable.
              </p>
              <p>
                Utilizing **Reinforcement Learning (RL)**, our systems continuously optimize themselves, 
                effectively reducing operational downtime by up to **45%** in high-velocity environments.
              </p>
            </div>
          </motion.div>

          {/* Feature Card */}
          <motion.div {...blurScale} className="lg:col-span-5 p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] backdrop-blur-xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Binary size={140} />
             </div>
             <Terminal className="text-yellow-500 mb-8" size={40} />
             <h3 className="text-2xl font-bold mb-4 italic uppercase">Model Training</h3>
             <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
               Custom LLM fine-tuning for proprietary business datasets, ensuring absolute data privacy.
             </p>
             <div className="flex items-center gap-4 text-xs font-mono text-yellow-500/60">
                <Activity size={16} className="animate-pulse" /> SYSTEM_OPTIMIZED: 100%
             </div>
          </motion.div>
        </div>

        {/* Section 4: Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative p-20 rounded-[5rem] bg-[#020617] border-2 border-yellow-500/10 text-center overflow-hidden group shadow-[0_0_100px_-20px_rgba(234,179,8,0.15)]"
        >
          <div className="relative z-10">
            <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-yellow-500/20 group-hover:rotate-180 transition-transform duration-1000">
               <Infinity size={50} className="text-yellow-500" />
            </div>
            <h2 className="text-5xl md:text-[8rem] font-black mb-12 tracking-tighter uppercase italic leading-none text-white">
              Initialize <br /> Automation
            </h2>
            <button className="bg-yellow-500 text-black px-16 py-6 rounded-full font-black text-xl hover:bg-white hover:scale-110 transition-all duration-500 shadow-[0_0_60px_-10px_rgba(234,179,8,0.6)]">
              KICKSTART ARCHITECTURE
            </button>
          </div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>

      </div>
    </div>
  );
};

export default AIAutomation;