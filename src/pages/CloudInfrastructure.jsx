import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Cloud, Server, ShieldCheck, Cpu, 
  Terminal, Zap, Infinity, Database, Activity,
  CloudLightning, Layers, Globe
} from 'lucide-react';

const CloudInfrastructure = () => {
  // NEW ANIMATION: Vertical Float & Blur (Cloud Atmosphere)
  const verticalFloat = {
    initial: { opacity: 0, y: 50, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  // --- FIXED: Cloud Stack Data Array ---
  const cloudStack = [
    {
      icon: <CloudLightning className="text-purple-400" size={32} />,
      title: "Serverless Compute",
      desc: "Execute code without managing servers using AWS Lambda and Edge Functions."
    },
    {
      icon: <ShieldCheck className="text-indigo-400" size={32} />,
      title: "Cyber Resilience",
      desc: "End-to-end encryption with Zero-Trust network security and VPC isolation."
    },
    {
      icon: <Database className="text-blue-400" size={32} />,
      title: "Data Warehousing",
      desc: "High-concurrency storage solutions for Big Data and real-time analytics."
    },
    {
      icon: <Layers className="text-purple-500" size={32} />,
      title: "IaC Deployment",
      desc: "Managing data centers through code via Terraform, Ansible, and Kubernetes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02020a] text-indigo-50 py-16 px-6 font-['Poppins'] selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* BACKGROUND AMBIANCE (Indigo Nebula) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[60%] h-[60%] bg-purple-900/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[60%] h-[60%] bg-indigo-900/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* NAVIGATION */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group flex items-center gap-3 text-indigo-300/40 hover:text-purple-400 transition-all mb-20 w-fit">
            <div className="p-2 border border-indigo-900/30 rounded-lg group-hover:border-purple-500/50">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Terminal Exit</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: CLOUD HERO --- */}
        <motion.div {...verticalFloat} className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-md bg-purple-500/5 border border-purple-500/20 mb-8">
            <Activity size={12} className="text-purple-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400">99.9% Uptime Architecture</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic">
            Cloud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600">Infrastructure</span>
          </h1>
          <p className="text-indigo-200/50 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power. 
            We engineer **Cloud-Native** environments that eliminate physical hardware dependencies and maximize operational efficiency.
          </p>
        </motion.div>

        {/* --- SECTION 2: BENTO CLOUD STACK --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {cloudStack.map((item, i) => (
            <motion.div 
              key={i} {...verticalFloat} transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-purple-500/5 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-indigo-100/30 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: TECHNICAL DEPTH (DevOps Wiki) --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-40">
          <motion.div {...verticalFloat} className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Scalable DevOps & <br /> Data Protection</h2>
            <div className="space-y-6 text-indigo-100/50 text-lg leading-relaxed">
              <p>
                According to the **DevOps Research and Assessment (DORA)** metrics, high-performing organizations 
                deploy code 208x more frequently. We implement **Infrastructure as Code (IaC)** using 
                Terraform, allowing you to manage your entire data center through simple configuration files.
              </p>
              <p>
                Security is integrated at the kernel level. By utilizing **VPC Mirroring** and **Intrusion Detection Systems (IDS)**, 
                we ensure that your data is encrypted at rest and in transit. Our architectures follow the 
                **Well-Architected Framework**, prioritizing cost-optimization and performance efficiency.
              </p>
            </div>
          </motion.div>

          {/* Featured Capability - Floating Box */}
          <motion.div {...verticalFloat} className="lg:col-span-5 p-12 bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 rounded-[3rem] backdrop-blur-xl">
             <Terminal className="text-purple-400 mb-8" size={40} />
             <h3 className="text-2xl font-bold mb-4 italic">Serverless Logic</h3>
             <p className="text-indigo-100/40 text-sm leading-relaxed mb-6">
               Implementing **AWS Lambda** and **Edge Computing** to execute code without managing servers. 
               This reduces operational overhead and provides infinite scalability for real-time data processing.
             </p>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase">System Online</span>
             </div>
          </motion.div>
        </div>

        {/* --- SECTION 4: FINAL CALL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative p-20 rounded-[5rem] bg-[#05050f] border-2 border-purple-500/10 text-center overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-purple-500/20 group-hover:rotate-180 transition-transform duration-1000">
               <Infinity size={50} className="text-purple-500" />
            </div>
            <h2 className="text-5xl md:text-[8rem] font-black mb-12 tracking-tighter uppercase italic leading-none text-white">
              Migrate to <br /> The Cloud
            </h2>
            <button className="bg-purple-600 text-white px-20 py-6 rounded-full font-black text-xl hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-500 shadow-[0_0_60px_-10px_rgba(147,51,234,0.5)]">
              INITIALIZE DEPLOYMENT
            </button>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default CloudInfrastructure;