import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Settings, RefreshCw, BarChart3, Lightbulb, 
  Unlink, Rocket, Briefcase, Workflow, CheckCircle2, 
  Infinity, Target, Cloud, UserCheck
} from 'lucide-react';

const DigitalTransformation = () => {
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

  // --- FIXED: Transformation Pillars Data Array ---
  const transformationPillars = [
    {
      icon: <Cloud className="text-orange-400" size={40} />,
      title: "Cloud Adoption",
      lang: "AWS, Azure, Google Cloud Migration"
    },
    {
      icon: <Workflow className="text-amber-400" size={40} />,
      title: "Process Automation",
      lang: "AI-driven Workflows & RPA"
    },
    {
      icon: <BarChart3 className="text-yellow-400" size={40} />,
      title: "Data Intelligence",
      lang: "BI Dashboards & Predictive Analytics"
    },
    {
      icon: <UserCheck className="text-orange-500" size={40} />,
      title: "Customer Experience",
      lang: "Omnichannel UX & CRM Strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] selection:bg-orange-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-orange-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Services</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: HERO (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter uppercase italic">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 font-black">Evolution</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. 
            It is a cultural shift that requires organizations to continually challenge the status quo.
          </p>
        </motion.div>

        {/* --- SECTION 2: STRATEGY & MODERNIZATION (Alternating Slides) --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <motion.div {...slideInLeft} className="space-y-6">
            <div className="p-4 bg-orange-500/10 rounded-2xl w-fit text-orange-400"><Lightbulb size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Strategic Consulting</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our transformation experts help you identify tech gaps in your current business model. 
              By implementing **Data-Driven Decision Making** and **Agile Methodologies**, we enable your business 
              to react faster to market changes. This isn't just about software; it's about re-engineering 
              your entire digital DNA for the 21st century.
            </p>
            <div className="grid grid-cols-2 gap-4 text-orange-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># Business Intelligence</span>
              <span className="bg-white/5 p-2 rounded"># Agile Transformation</span>
              <span className="bg-white/5 p-2 rounded"># ROI Analysis</span>
              <span className="bg-white/5 p-2 rounded"># Change Management</span>
            </div>
          </motion.div>

          <motion.div {...slideInRight} className="space-y-6 lg:mt-24">
            <div className="p-4 bg-amber-500/10 rounded-2xl w-fit text-amber-400"><Unlink size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Legacy Modernization</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Outdated systems (Legacy Systems) are the biggest hurdle to growth. We specialize in 
              **Mainframe-to-Cloud Migration** and **Monolithic-to-Microservices** refactoring. 
              This ensures your business software is no longer a bottleneck, but a catalyst for 
              rapid deployment and operational efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4 text-amber-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># System Refactoring</span>
              <span className="bg-white/5 p-2 rounded"># Cloud-First Path</span>
              <span className="bg-white/5 p-2 rounded"># Data Integration</span>
              <span className="bg-white/5 p-2 rounded"># API Enablement</span>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: WIKI STYLE CONTENT (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5 mb-40 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 blur-[100px] rounded-full group-hover:bg-orange-500/10 transition-all duration-700"></div>

          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
            "Adaptability is the only <span className="text-orange-400 italic font-black">survival strategy</span> <br /> in the era of digital disruption."
          </h3>

          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl relative z-10">
            <p>
              According to the **Gartner Digital Maturity Model**, organizations that prioritize digital transformation 
              experience 2x faster revenue growth. Our process involves a deep dive into your **Operational Workflows** 
              to eliminate manual redundancies through intelligent automation.
            </p>
            <p>
              We focus on the **Triple Bottom Line**: Improving Customer Experience (CX), Employee Productivity (EX), 
              and Operational Speed. By integrating AI-driven analytics and cloud-native infrastructures, 
              we turn your data into your most valuable strategic asset.
            </p>
          </div>
        </motion.div>

        {/* --- SECTION 4: TRANSFORMATION PILLARS (Slide from Right) --- */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">Strategic Pillars</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPillars.map((pill, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group cursor-default">
                <div className="mb-6 group-hover:rotate-12 transition-transform">{pill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{pill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{pill.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- SECTION 5: FINAL CTA (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="relative p-16 md:p-24 rounded-[5rem] bg-gradient-to-br from-orange-600/20 to-amber-600/20 border border-white/10 text-center overflow-hidden">
          <div className="relative z-10">
            <Infinity className="mx-auto text-orange-400 mb-8" size={60} />
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter uppercase italic text-white">Future-Proof <br /> Your Business?</h2>
            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:bg-orange-400 hover:scale-110 transition-all duration-500 shadow-[0_20px_80px_-15px_rgba(251,146,60,0.5)]">
              START CONSULTATION
            </button>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>

      </div>
    </div>
  );
};

export default DigitalTransformation;