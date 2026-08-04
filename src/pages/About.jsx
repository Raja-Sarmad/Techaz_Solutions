import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  Target, Rocket, Users, Phone, Mail, Clock, Globe, MessageCircle,
  CheckCircle2, ArrowUpRight, Award, HeartHandshake, Lightbulb, ShieldCheck
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import Process from '../components/Process';

const teamMembers = [
  {
    name: 'Muhammad Umar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: 'Drives the vision, automotive expertise and regional growth strategy.',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    bio: 'Leads social media, ads and growth campaigns for client brands.',
  },
  {
    name: 'David Thompson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Architects scalable web platforms and SaaS products end-to-end.',
  },
  {
    name: 'Ayesha Khan',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Crafts clean, conversion-focused interfaces that users love.',
  },
  {
    name: 'James Carter',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Builds mobile apps and backend systems with precision.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Keeps every delivery on time, on budget and on vision.',
  },
];

const values = [
  { icon: <ShieldCheck size={24} />, title: 'Reliability', desc: 'We deliver on time, every time — with quality baked into every step.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We apply modern tech and fresh ideas to solve real business problems.' },
  { icon: <HeartHandshake size={24} />, title: 'Partnership', desc: 'We treat your business like our own and grow together long-term.' },
  { icon: <Award size={24} />, title: 'Excellence', desc: 'Pixel-perfect work, clean code and measurable results — no shortcuts.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 pt-28 pb-16 px-6 overflow-hidden font-['Poppins']">
        <SectionBackdrop />
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-blue-500"></div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">About Techaz Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.02] mb-8 uppercase">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600">Digital Growth</span> Engines
            </h1>
            <p className="max-w-3xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
              Techaz Solutions is a full-service digital agency helping businesses across the Caribbean and beyond
              grow with marketing, software and automotive solutions.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="relative bg-white text-gray-900 py-14 px-6 font-['Poppins']">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-0 rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Our Team Working"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <Motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] shadow-2xl w-[55%] border-[6px] border-white"
            >
              <p className="text-4xl font-black mb-1">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Excellence</p>
            </Motion.div>
          </Motion.div>

          <div className="lg:col-span-6 space-y-8">
            <Motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[11px] font-black tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-tight tracking-tight">
                From Vision to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">World-Class Agency</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                What started as a small software studio has grown into a trusted digital partner for
                businesses across the Caribbean region. We combine modern technology with sharp business
                strategy to build solutions that deliver real, measurable results.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Custom Web & Mobile Applications',
                'Digital Marketing & Ads',
                'Automotive & Car Dealer Solutions',
                'AI, Cloud & Automation',
              ].map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-full shadow-md shadow-blue-600/20">
                    <CheckCircle2 className="text-white h-4 w-4" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </Motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-gray-100 w-full"></div>

            <Motion.div {...fadeUp} className="flex flex-wrap items-center gap-8">
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                Work With Us
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
                  <Phone className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">Direct Line</p>
                  <p className="text-lg font-bold text-gray-900 tracking-tight">+92 3262176836</p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 text-gray-900 py-14 px-6 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <Motion.div {...fadeUp} whileHover={{ y: -8 }} className="relative rounded-[2.5rem] border border-gray-200 bg-white p-10 overflow-hidden group shadow-xl shadow-blue-600/5">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with technology and marketing that drives real growth.
              We build systems that save time, capture leads and scale revenue — so our clients
              can focus on running their business, not fighting their tools.
            </p>
          </Motion.div>

          <Motion.div {...fadeUp} whileHover={{ y: -8 }} className="relative rounded-[2.5rem] border border-gray-200 bg-white p-10 overflow-hidden group shadow-xl shadow-cyan-600/5">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-600/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300">
              <Rocket size={26} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the region's most trusted digital partner — known for automotive innovation,
              marketing excellence and software that genuinely moves the needle for every business we touch.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative bg-white text-gray-900 py-12 px-6 border-t border-gray-100 font-['Poppins']">
        <Motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ['150+', 'Projects Delivered'],
            ['80+', 'Happy Clients'],
            ['27+', 'Services Offered'],
            ['99%', 'Client Satisfaction'],
          ].map(([val, lbl], i) => (
            <Motion.div key={i} variants={fadeUp} className="text-center">
              <span className="block text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{val}</span>
              <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mt-2">{lbl}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      {/* VALUES */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 py-12 px-6 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-all duration-300">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="relative bg-white text-gray-900 py-12 px-6 border-t border-gray-100 font-['Poppins']">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
              Company Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight">
              Get To <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Know Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe size={22} />, label: 'Headquarters', value: 'Malir-15, Karachi, Pakistan', sub: 'Serving clients across the Caribbean' },
              { icon: <Users size={22} />, label: 'Team Size', value: '20+ Specialists', sub: 'Developers, designers & marketers' },
              { icon: <Award size={22} />, label: 'Founded', value: '2015', sub: '10+ years of excellence' },
              { icon: <Phone size={22} />, label: 'Phone', value: '+92 3262176836', sub: 'Mon–Sat, 9am–7pm' },
              { icon: <Mail size={22} />, label: 'Email', value: 'info@techazsolutions.com', sub: 'We reply within 2 hours' },
              { icon: <Clock size={22} />, label: 'Response Time', value: '24/7 Support', sub: 'Emergency & maintenance' },
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</p>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.sub}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 py-12 px-6 border-t border-gray-100 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
              Meet The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight">
              The People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">The Magic</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              A senior team of developers, designers and marketers obsessed with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-gray-200 bg-white hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex justify-end gap-2">
                    {[Globe, Mail, MessageCircle].map((Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600"
                        style={{ transitionDelay: `${j * 60}ms` }}
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h4>
                  <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Process />

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white py-12 px-6 text-center overflow-hidden font-['Poppins']">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-[100px] rounded-full" />
        <Motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Let's Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Together.</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            Tell us about your business and let's build the solution that takes it to the next level.
          </p>
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/30 hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Motion.div>
      </section>
    </PageLayout>
  );
};

export default About;
