import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Mail, Phone, MapPin, Sparkles, Quote, Award, BadgeCheck } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import { teamMembers } from '../data/team';
import { socialLinks } from '../components/SocialIcons';

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) return <Navigate to="/about" replace />;

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-slate-50 via-blue-50/50 to-white dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 text-gray-900 dark:text-gray-100 pt-28 pb-16 px-6 overflow-hidden font-['Poppins']">
        <SectionBackdrop />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-400/20 blur-[80px] rounded-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-violet-400/20 blur-[80px] rounded-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-widest mb-10"
          >
            <ArrowLeft size={16} />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-[2.5rem] blur-xl opacity-30" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white">
                  <BadgeCheck size={20} className="text-emerald-400 shrink-0" />
                  <p className="text-xs font-bold tracking-wide">Team Techaz Solutions</p>
                </div>
              </div>
            </Motion.div>

            <div className="lg:col-span-7 space-y-6">
              <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
                  <Award size={14} />
                  {member.role}
                </span>
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.02] mt-6">
                  {member.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4 leading-relaxed font-medium max-w-2xl">
                  {member.shortBio}
                </p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg shadow-blue-600/5"
              >
                <Quote size={22} className="text-blue-600 mb-3" />
                <p className="text-lg text-gray-800 dark:text-gray-100 font-medium italic leading-relaxed">"{member.quote}"</p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: <Mail size={16} />, label: member.email },
                  { icon: <Phone size={16} />, label: member.phone },
                  { icon: <MapPin size={16} />, label: member.location },
                ].map((c) => (
                  <span key={c.label} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-200 text-xs font-bold">
                    <span className="text-blue-600">{c.icon}</span>
                    {c.label}
                  </span>
                ))}
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mr-1">
                  Follow
                </span>
                {socialLinks.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    aria-label={s.name}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:border-transparent hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="relative bg-white dark:bg-gray-950 py-16 px-6 border-t border-gray-100 dark:border-gray-800 font-['Poppins']">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{member.name}</span>
              </h2>
              <div className="space-y-5">
                {member.bio.map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{para}</p>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 border border-blue-100 dark:border-blue-900"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles size={18} className="text-blue-600" />
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Did You Know?</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{member.funFact}</p>
            </Motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 shadow-xl shadow-blue-600/5"
            >
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-6 text-lg">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2.5">
                {member.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold tracking-wide shadow-md shadow-blue-600/20">
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-3 gap-3 sm:gap-4"
            >
              {member.stats.map((s, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-5 text-center shadow-lg shadow-blue-600/5">
                  <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{s.val}</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">{s.lbl}</p>
                </div>
              ))}
            </Motion.div>

            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:shadow-xl hover:shadow-blue-600/25 transition-all"
            >
              Work With {member.name.split(' ')[0]}
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER TEAM MEMBERS */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 py-16 px-6 border-t border-gray-100 dark:border-gray-800 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8 text-center">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Rest Of The Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {teamMembers
              .filter((m) => m.id !== member.id)
              .map((m) => (
                <Link
                  key={m.id}
                  to={`/team/${m.id}`}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">{m.name}</h4>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">{m.role}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamMember;
