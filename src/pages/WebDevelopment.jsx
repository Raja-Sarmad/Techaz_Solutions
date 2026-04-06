import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Layout, Code2, Rocket, Globe, Cpu, Database, 
  Terminal, Shield, Zap, Layers, Infinity
} from 'lucide-react';

const WebDevelopment = () => {
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

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-cyan-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Services</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: HERO (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter">
            Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Architectures</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            Web development is the work involved in developing a website for the Internet or an Intranet. 
            It ranges from developing a simple single static page of plain text to complex web applications, 
            electronic businesses, and social network services.
          </p>
        </motion.div>

        {/* --- SECTION 2: FRONTEND VS BACKEND (Alternating Slides) --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <motion.div {...slideInLeft} className="space-y-6">
            <div className="p-4 bg-cyan-500/10 rounded-2xl w-fit text-cyan-400"><Layout size={32} /></div>
            <h2 className="text-4xl font-bold">Client-Side (Frontend)</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Frontend development focuses on everything users see and interact with. Utilizing **HTML5, CSS3, and JavaScript**, 
              we build interfaces that are responsive and intuitive. We leverage modern libraries like **React.js** for virtual DOM 
              rendering and **Next.js** for server-side rendering (SSR), ensuring sub-second load times and superior SEO rankings.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-cyan-500 font-mono text-sm">
              <li>{">"} Tailwind CSS</li>
              <li>{">"} TypeScript</li>
              <li>{">"} Three.js</li>
              <li>{">"} Redux / Toolkit</li>
            </ul>
          </motion.div>

          <motion.div {...slideInRight} className="space-y-6 lg:mt-24">
            <div className="p-4 bg-purple-500/10 rounded-2xl w-fit text-purple-400"><Database size={32} /></div>
            <h2 className="text-4xl font-bold">Server-Side (Backend)</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              The backend is the engine room. We engineer robust server-side logic using **Node.js (V8 Engine)** and **Python (Django/FastAPI)**. 
              Our systems handle complex authentication (JWT/OAuth), data processing, and seamless database management with 
              **PostgreSQL** for relational integrity and **MongoDB** for flexible, high-speed NoSQL storage.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-purple-500 font-mono text-sm">
              <li>{">"} REST / GraphQL</li>
              <li>{">"} Docker / K8s</li>
              <li>{">"} AWS / Azure</li>
              <li>{">"} Redis Caching</li>
            </ul>
          </motion.div>
        </div>

        {/* --- UPDATED SECTION 3: WEB ENGINEERING STANDARDS --- */}
<motion.div {...slideInLeft} className="bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5 mb-40 relative overflow-hidden group">
  
  {/* Background Subtle Glow */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-700"></div>

  {/* Main Heading: Wiki/Professional Style */}
  <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">
    "Engineering the web is about <span className="text-cyan-400">bridging the gap</span> between complex logic and human-centric design."
  </h3>

  {/* Detailed Professional Content */}
  <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl">
    <p>
      At its core, **modern web engineering** has evolved beyond simple HTML pages. It is now a multi-layered discipline focusing on **Scalability, High-Availability, and Cognitive Accessibility**. According to the world-wide **W3C (World Wide Web Consortium)** standards, a web application must be robust enough to handle concurrent data streams while remaining perceivable to all users.
    </p>

    <p>
      We strictly adhere to the **WCAG 2.1 (Web Content Accessibility Guidelines)**, ensuring that every interface we develop is navigable via screen readers and keyboard-only inputs. Our architectural philosophy integrates **Atomic Design principles** with a "Security-First" mindset.
    </p>

    <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-cyan-500 italic">
      To safeguard the integrity of every byte, we implement top-tier encryption protocols including **TLS 1.3, End-to-End SSL encryption, and advanced CSRF (Cross-Site Request Forgery) protection**, making our deployments resilient against modern cyber threats.
    </p>
  </div>
</motion.div>


        {/* --- SECTION 4: LANGUAGES & TOOLS CARDS (Slide from Right) --- */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">Core Technologies</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "JavaScript", lang: "The Language of the Web", icon: <Terminal className="text-yellow-400" /> },
              { title: "Python", lang: "AI & Backend Power", icon: <Cpu className="text-blue-400" /> },
              { title: "SQL/NoSQL", lang: "Data Management", icon: <Layers className="text-green-400" /> },
              { title: "Go/Rust", lang: "Performance Layers", icon: <Zap className="text-orange-400" /> }
            ].map((tech, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- SECTION 5: FINAL CTA (Slide from Left) --- */}
        <motion.div {...slideInLeft} className="relative p-16 md:p-24 rounded-[5rem] bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-white/10 text-center overflow-hidden">
          <div className="relative z-10">
            <Infinity className="mx-auto text-cyan-400 mb-8" size={60} />
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Ready to Deploy <br /> Your Vision?</h2>
            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-lg hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_20px_60px_-15px_rgba(34,211,238,0.4)]">
              INITIATE PROJECT
            </button>
          </div>
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>

      </div>
    </div>
  );
};

export default WebDevelopment;
