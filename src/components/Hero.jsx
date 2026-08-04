import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Rocket, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);
  const words = ["Digital Frontiers.", "Future Systems.", "Modern Software.", "Creative Solutions."];

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-50 via-blue-50/50 to-white flex items-center overflow-hidden px-6"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {/* Decorative color blobs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-400/25 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-violet-400/25 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[120px]" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center pt-32 pb-24">
        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-lg shadow-blue-600/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
              Available for new projects
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-gray-900 font-syne">
            We architect <br />
            <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-[length:200%_auto] animate-gradient-flow whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="max-w-[520px] text-lg text-gray-600 leading-relaxed">
            A premium software studio crafting high-performance applications where{" "}
            <span className="text-blue-600 font-semibold">engineering meets elegance.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
            >
              <Sparkles size={18} />
              Let's Collaborate
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold border border-gray-200 shadow-lg hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 transition-all"
            >
              <Rocket size={18} className="text-blue-600" />
              View Our Work
            </Link>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap items-center gap-8 pt-6">
            {[
              { val: "150+", lbl: "Projects" },
              { val: "80+", lbl: "Clients" },
              { val: "10+", lbl: "Years" },
              { val: "27", lbl: "Services" },
            ].map((s) => (
              <div key={s.lbl}>
                <p className="text-2xl font-black text-gray-900">{s.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Terminal card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-[2.5rem] blur-xl opacity-30" />
          <div className="relative bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            {/* Window dots */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs font-mono text-slate-500">techaz — studio.ts</span>
            </div>

            <div className="space-y-3 font-mono text-sm leading-relaxed">
              <p className="text-indigo-400">const <span className="text-white">Studio</span> = {'{'}</p>
              <p className="pl-4 text-slate-500">focus: <span className="text-emerald-400">"Scalable Architecture"</span>,</p>
              <p className="pl-4 text-slate-500">stack: <span className="text-emerald-400">"React & Node"</span>,</p>
              <p className="pl-4 text-slate-500">performance: <span className="text-amber-400">99.9</span>,</p>
              <p className="pl-4 text-slate-500">vibe: <span className="text-emerald-400">"Engineering & Elegance"</span>,</p>
              <p className="pl-4 text-slate-500">deployment: <span className="text-blue-400">"Edge Runtime"</span>,</p>
              <p className="pl-4 text-slate-500">status: <span className="text-emerald-400">"Ready for Scale"</span>,</p>
              <p className="text-indigo-400">{'}'}</p>
              <p className="text-slate-500">
                <span className="text-emerald-400">{'>'} Building your future…</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1 align-middle" />
              </p>
            </div>
          </div>

          {/* Floating chip: top-right */}
          <div className="absolute -top-6 -right-4 z-10 bg-white rounded-2xl px-5 py-3 shadow-xl border border-blue-100 flex items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 leading-none">+38%</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Avg. growth</p>
            </div>
          </div>

          {/* Floating chip: bottom-left */}
          <div className="absolute -bottom-6 -left-4 z-10 bg-white rounded-2xl px-5 py-3 shadow-xl border border-violet-100 flex items-center gap-3 animate-float-delay">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 leading-none">AI-Powered</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Smart solutions</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow { animation: gradient-flow 6s ease infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out 1.2s infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
