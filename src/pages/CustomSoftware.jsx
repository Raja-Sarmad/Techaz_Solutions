import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Code, Database, Server, ShieldCheck, 
  Cpu, Zap, Infinity, Terminal, Settings, Layers 
} from 'lucide-react';

const CustomSoftware = () => {
  // Animation Variants for Left Slide
  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Animation Variants for Right Slide
  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // --- FIXED: Software Capabilities Data Array ---
  const softwareCapabilities = [
    {
      icon: <Server className="text-blue-400" size={40} />,
      title: "Backend Systems",
      lang: "Node.js, Go, Python, Rust"
    },
    {
      icon: <Database className="text-cyan-400" size={40} />,
      title: "Data Architecture",
      lang: "PostgreSQL, MongoDB, Redis"
    },
    {
      icon: <Layers className="text-indigo-400" size={40} />,
      title: "Enterprise ERP",
      lang: "Custom CRM & SAP Integrations"
    },
    {
      icon: <Terminal className="text-purple-400" size={40} />,
      title: "API Development",
      lang: "RESTful, GraphQL, gRPC"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] selection:bg-blue-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation & Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-blue-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Services</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: HERO (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter uppercase italic">
            Custom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 font-black">Architecture</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            Custom software development is the process of designing, creating, deploying, and maintaining software for a specific set of users, functions, or organizations. 
            Unlike off-the-shelf software, bespoke solutions are engineered to fit your unique business workflows perfectly.
          </p>
        </motion.div>

        {/* --- SECTION 2: SCALABILITY & SECURITY (Alternating Slides) --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <motion.div {...slideInLeft} className="space-y-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-400"><Cpu size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Engineered Scalability</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our custom solutions are built with a **Microservices Architecture**, allowing each component of your software to scale independently. 
              By utilizing **Docker containerization** and **Kubernetes orchestration**, we ensure that your business logic remains 
              resilient under high-traffic loads and grows alongside your organization's demands.
            </p>
            <div className="grid grid-cols-2 gap-4 text-blue-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># Microservices</span>
              <span className="bg-white/5 p-2 rounded"># Cloud-Native</span>
              <span className="bg-white/5 p-2 rounded"># Auto-Scaling</span>
              <span className="bg-white/5 p-2 rounded"># Load Balancing</span>
            </div>
          </motion.div>

          <motion.div {...slideInRight} className="space-y-6 lg:mt-24">
            <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit text-indigo-400"><ShieldCheck size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Enterprise Security</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We implement **Zero-Trust Security** protocols to protect your proprietary data. Every custom software we build includes 
              **Role-Based Access Control (RBAC)**, multi-factor authentication, and end-to-end encryption. 
              Our development lifecycle follows **DevSecOps** principles to identify and patch vulnerabilities before deployment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-indigo-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># AES-256 Encryption</span>
              <span className="bg-white/5 p-2 rounded"># RBAC Logic</span>
              <span className="bg-white/5 p-2 rounded"># Audit Logging</span>
              <span className="bg-white/5 p-2 rounded"># Compliance Ready</span>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: WIKI STYLE CONTENT (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5 mb-40 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all duration-700"></div>

          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
            "Software is not just a tool; it's the <span className="text-blue-400 italic font-black">operating system</span> <br /> of your modern business."
          </h3>

          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl relative z-10">
            <p>
              According to the **ISO/IEC 25010** standard, software quality is defined by its functional suitability, performance efficiency, 
              and maintainability. We build bespoke software that eliminates the need for expensive third-party licenses while 
              providing **100% ownership** of the source code.
            </p>
            <p>
              Our integration layer ensures that your new custom software communicates seamlessly with existing legacy systems via 
              **RESTful APIs or gRPC protocols**, creating a unified digital environment that boosts team productivity 
              and automates repetitive administrative tasks.
            </p>
          </div>
        </motion.div>

        {/* --- SECTION 4: CAPABILITIES GRID (Slide from Right) --- */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">Software Capabilities</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {softwareCapabilities.map((tech, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group cursor-default">
                <div className="mb-6 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- SECTION 5: FINAL CTA (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="relative p-16 md:p-24 rounded-[5rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 text-center overflow-hidden">
          <div className="relative z-10">
            <Infinity className="mx-auto text-blue-400 mb-8" size={60} />
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter uppercase italic text-white">Automate <br /> Your Workflow?</h2>
            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:bg-blue-400 hover:scale-110 transition-all duration-500 shadow-[0_20px_80px_-15px_rgba(59,130,246,0.5)]">
              REQUEST ARCHITECTURE
            </button>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>

      </div>
    </div>
  );
};

export default CustomSoftware;