import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Counter = ({ value, suffix = "", delay = 0, active = true }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    setDisplay(0);
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, delay, active]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
};

const highlights = ["Web & Mobile Apps", "Digital Marketing", "AI Automation"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const words = ["Digital Frontiers.", "Future Systems.", "Modern Software.", "Creative Solutions."];
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white dark:bg-gray-950 px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-start space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-emerald-700 dark:text-emerald-400">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-syne text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900 dark:text-gray-100"
            >
              We architect
              <br />
              <span className="relative inline-block h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              A premium software studio crafting high-performance applications where{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">engineering meets elegance.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
              >
                <Sparkles size={17} />
                Let's Collaborate
                <ArrowUpRight size={17} />
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-semibold text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors"
              >
                <Rocket size={17} className="text-blue-600" />
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT - Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-lg lg:max-w-none mx-auto lg:mx-0"
          >
            <div className="bg-[#0d0d12] border border-gray-800 rounded-2xl p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center gap-1.5 mb-4 pb-4 border-b border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 text-[10px] text-gray-500">techaz — studio.ts</span>
              </div>
              <p className="text-indigo-400">const <span className="text-white">Studio</span> = {"{"}</p>
              <p className="pl-4 text-gray-500">focus: <span className="text-emerald-400">"Scalable Architecture"</span>,</p>
              <p className="pl-4 text-gray-500">stack: <span className="text-emerald-400">"React & Node"</span>,</p>
              <p className="pl-4 text-gray-500">performance: <span className="text-amber-400">99.9</span>,</p>
              <p className="pl-4 text-gray-500">status: <span className="text-emerald-400">"Ready for Scale"</span>,</p>
              <p className="text-indigo-400">{"}"}</p>
              <p className="text-gray-500 mt-2">
                <span className="text-emerald-400">{">"} Building your future…</span>
                <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-1 align-middle" />
              </p>
            </div>

            {/* Inline stats chips — no floating overlap */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">↑</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">+38%</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">Avg. growth</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                  <Sparkles size={14} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">AI-Powered</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">Smart solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {[
              { val: 150, suffix: "+", lbl: "Projects" },
              { val: 80, suffix: "+", lbl: "Clients" },
              { val: 10, suffix: "+", lbl: "Years" },
              { val: 27, suffix: "", lbl: "Services" },
            ].map((s, i) => (
              <div key={s.lbl} className="bg-white dark:bg-gray-950 px-4 py-5 sm:py-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 font-syne">
                  <Counter value={s.val} suffix={s.suffix} delay={0.1 + i * 0.08} active={statsInView} />
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">{s.lbl}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
