import React from "react";
import {
  Monitor,
  Brain,
  Cloud,
  Layers,
  ArrowUpRight,
  PhoneCall,
  Star,
  Rocket,
  Users,
  Code2,
  CheckCircle2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Monitor size={20} />,
    title: "Custom Web & Mobile Applications",
    desc: "Scalable apps engineered for speed, security and growth.",
  },
  {
    icon: <Brain size={20} />,
    title: "AI & Automation Integration",
    desc: "Smart AI workflows that cut costs and save valuable time.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps Solutions",
    desc: "Reliable infrastructure that scales effortlessly with you.",
  },
  {
    icon: <Layers size={20} />,
    title: "SaaS Product Development",
    desc: "From idea to launch, SaaS built to sell and scale.",
  },
];

const chartData = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 68 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 82 },
  { label: "May", value: 65 },
  { label: "Jun", value: 95 },
  { label: "Jul", value: 74 },
];

const projects = [
  { name: "E-Commerce Platform", percent: 92, color: "from-[#3B5BFF] to-[#4f74ff]" },
  { name: "AI Chatbot Integration", percent: 76, color: "from-[#6C4DFF] to-[#8a6dff]" },
  { name: "Cloud Migration", percent: 100, color: "from-[#3B5BFF] to-[#6C4DFF]" },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6+", label: "Years of Excellence" },
];

const maxValue = Math.max(...chartData.map((d) => d.value));

const AboutUs = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white dark:bg-gray-950 font-['Poppins']">
      {/* Decorative background */}
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-[#3B5BFF]/15 to-[#6C4DFF]/15 blur-[120px] rounded-full" />
      <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] bg-gradient-to-tr from-[#6C4DFF]/15 to-[#3B5BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-64 h-64 rounded-full border border-[#3B5BFF]/10" />
      <div className="absolute top-24 right-10 w-40 h-40 rounded-full border border-[#6C4DFF]/10" />
      <div
        className="absolute top-16 right-1/3 w-56 h-56 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute bottom-16 left-10 w-40 h-40 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,77,255,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 lg:items-stretch">

          {/* ============ LEFT: Dashboard Visual ============ */}
          <div className="lg:col-span-6 flex flex-col relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -inset-8 bg-gradient-to-br from-[#3B5BFF]/20 via-transparent to-[#6C4DFF]/20 blur-3xl rounded-[3rem]"
            />

            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-[0_45px_90px_-25px_rgba(59,91,255,0.35)] dark:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.6)] p-6 md:p-7"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-1 hidden sm:inline-block">
                  techaz.solutions/dashboard
                </span>
              </div>

              {/* Mini Stat Tiles */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: <Zap size={16} />, value: "24", label: "Active Projects" },
                  { icon: <Users size={16} />, value: "35+", label: "Team Experts" },
                  { icon: <CheckCircle2 size={16} />, value: "150+", label: "Launched" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-800 p-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B5BFF] to-[#6C4DFF] text-white flex items-center justify-center mb-2">
                      {s.icon}
                    </div>
                    <p className="text-lg font-extrabold text-gray-900 dark:text-gray-100 leading-none">{s.value}</p>
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Performance Chart */}
              <div className="flex-1 flex flex-col rounded-2xl border border-gray-100 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/40 dark:to-gray-800/60 p-4 md:p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100">Performance Overview</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Monthly delivery growth</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
                    <TrendingUp size={12} /> +24%
                  </span>
                </div>

                <div className="relative flex-1 flex items-end justify-between gap-2 min-h-[170px]">
                  {/* Gridlines */}
                  <div className="absolute inset-0 bottom-7 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3].map((g) => (
                      <div key={g} className="border-t border-dashed border-gray-200 dark:border-gray-700" />
                    ))}
                  </div>

                  {chartData.map((item, i) => {
                    const barHeight = Math.round((item.value / maxValue) * 120);
                    const isMax = item.value === maxValue;
                    return (
                      <div
                        key={i}
                        className="flex-1 h-full flex flex-col items-center justify-end gap-1.5 relative group"
                      >
                        {/* Value above bar */}
                        <span
                          className={`text-[11px] font-extrabold transition-colors ${
                            isMax
                              ? "text-[#6C4DFF]"
                              : "text-gray-700 dark:text-gray-200 group-hover:text-[#3B5BFF]"
                          }`}
                        >
                          {item.value}
                        </span>
                        {/* Bar */}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: barHeight }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                          className={`w-full max-w-[30px] rounded-t-lg shadow-sm ${
                            isMax
                              ? "bg-gradient-to-t from-[#6C4DFF] to-[#9b7bff]"
                              : "bg-gradient-to-t from-[#3B5BFF] to-[#6C4DFF]"
                          } group-hover:shadow-lg group-hover:shadow-[#3B5BFF]/30`}
                        />
                        {/* Month label */}
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Project Progress */}
              <div className="space-y-4">
                {projects.map((p, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-xs font-bold text-gray-700 dark:text-gray-200">{p.name}</p>
                      <p className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF]">
                        {p.percent}%
                      </p>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating: Client Satisfaction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              animate={{ y: [0, -12, 0] }}
              className="absolute -top-7 -right-3 md:-right-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-[0_25px_50px_-12px_rgba(59,91,255,0.3)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Star className="text-white w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900 dark:text-gray-100 leading-none">98%</p>
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating: Projects Delivered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              animate={{ y: [0, 12, 0] }}
              className="absolute -bottom-7 -left-3 md:-left-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-[0_25px_50px_-12px_rgba(108,77,255,0.3)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B5BFF] to-[#6C4DFF] flex items-center justify-center shadow-lg shadow-[#3B5BFF]/30">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900 dark:text-gray-100 leading-none">120+</p>
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">Projects Delivered</p>
              </div>
            </motion.div>

            {/* Floating: Code Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              animate={{ y: [0, -10, 0] }}
              className="absolute top-1/2 -left-4 md:-left-10 hidden md:flex items-center gap-2 bg-gray-900 text-white rounded-full pl-2 pr-4 py-2 shadow-xl shadow-gray-900/20"
            >
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3B5BFF] to-[#6C4DFF] flex items-center justify-center">
                <Code2 size={14} />
              </span>
              <p className="text-[11px] font-bold tracking-wide">Clean Code. Scalable Apps.</p>
            </motion.div>
          </div>

          {/* ============ RIGHT: Content ============ */}
          <div className="lg:col-span-6 flex flex-col h-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF] text-white shadow-lg shadow-[#3B5BFF]/25 text-[11px] font-black tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Partner with Excellence
              </span>

              <h2 className="text-[1.75rem] md:text-4xl xl:text-[2.5rem] font-extrabold text-gray-900 dark:text-gray-100 mt-5 leading-[1.12] tracking-tight">
                Transforming Your Ideas <br />
                Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF]">
                  Digital Reality
                </span>
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-5 text-base md:text-lg leading-relaxed font-light">
                We are a full-service software house dedicated to helping businesses scale. We
                combine modern technology and business strategy to create solutions that deliver
                real results.
              </p>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-gradient-to-r from-[#3B5BFF]/10 via-[#6C4DFF]/10 to-[#3B5BFF]/10 dark:from-[#3B5BFF]/20 dark:via-[#6C4DFF]/20 dark:to-[#3B5BFF]/20 border border-[#3B5BFF]/10 dark:border-[#3B5BFF]/30 px-5 py-4"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF] leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-2xl p-4 hover:border-[#3B5BFF]/30 hover:shadow-xl hover:shadow-[#3B5BFF]/10 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#3B5BFF]/20 text-[#3B5BFF] flex items-center justify-center mb-2.5 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#3B5BFF] group-hover:to-[#6C4DFF] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

            {/* CTA + Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="group flex items-center gap-3 bg-gradient-to-r from-[#3B5BFF] to-[#6C4DFF] hover:shadow-2xl hover:shadow-[#3B5BFF]/30 text-white px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95">
                Build Your Project
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-200/60 dark:shadow-none rounded-2xl px-5 py-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B5BFF] to-[#6C4DFF] flex items-center justify-center">
                  <PhoneCall className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-none mb-1 text-nowrap">Direct Line</p>
                  <p className="text-base font-bold text-gray-900 dark:text-gray-100 tracking-tight text-nowrap">+92 300 1234567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
