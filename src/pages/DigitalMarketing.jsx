import React from 'react';
import { Link } from 'react-router-dom';
 // Assuming you are using framer-motion as per previous context
import { motion as Motion } from 'framer-motion'; 
import { 
  ArrowLeft, Megaphone, Share2, Rocket, Heart, TrendingUp, 
  Target, Mail, ArrowUpRight, BarChart, Zap, Globe, ShieldCheck
} from 'lucide-react';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  // Animations Settings
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const pillars = [
    {
      icon: <Target className="text-blue-400" size={28} />,
      title: "Paid Advertising",
      desc: "Google & Meta Ads management with a focus on high ROAS and conversion.",
      tag: "Performance"
    },
    {
      icon: <Share2 className="text-cyan-400" size={28} />,
      title: "Social Media",
      desc: "Creating viral-worthy content and managing community growth across platforms.",
      tag: "Engagement"
    },
    {
      icon: <Mail className="text-blue-500" size={28} />,
      title: "Email Marketing",
      desc: "Advanced automation funnels that nurture and convert leads into loyal customers.",
      tag: "Retention"
    },
    {
      icon: <TrendingUp className="text-cyan-500" size={28} />,
      title: "Growth Hacking",
      desc: "Data-driven experiments to scale your user base and revenue rapidly.",
      tag: "Scalability"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white  selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background Elements --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Navigation */}
        <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/#services" className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all">
            <div className="p-2 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase">Back to Growth Hub</span>
          </Link>
        </Motion.div>

        {/* --- Hero Section --- */}
        <section className="mt-20 mb-32">
          <Motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-blue-500"></div>
               <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Marketing Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-[800] tracking-tighter leading-[1.0] mb-8 uppercase">
              Digital <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Marketing
              </span>
            </h1>
            <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              We don’t just run ads; we build <span className="text-white font-normal">conversion engines</span>. 
              Strategy meets creativity to scale your brand with precision targeting.
            </p>
          </Motion.div>
        </section>

        {/* --- Stats Section --- */}
        <Motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-white/[0.01]"
        >
          {[
            { label: "Ad Spend Managed", val: "$2.5M+" },
            { label: "Avg. ROAS", val: "5.2x" },
            { label: "Growth Rate", val: "140%" },
            { label: "Client Success", val: "99%" }
          ].map((stat, i) => (
            <Motion.div key={i} variants={fadeInUp} className="text-center md:text-left px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-blue-500/60 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
            </Motion.div>
          ))}
        </Motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
          <Motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} className="text-blue-500" />
            </div>
            <Zap className="text-blue-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Precision Targeting</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Data is our North Star. We analyze user behavior, intent, and demographics to ensure your 
              message reaches the right audience at the perfect moment in their buying journey.
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest">
              <span className="px-3 py-1 border border-blue-500/30 rounded-full text-blue-400">AI Bidding</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full text-blue-400">Retargeting</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full text-blue-400">LTV focus</span>
            </div>
          </Motion.div>

          <Motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="flex flex-col justify-center p-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Modern <br/><span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Ecosystem</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We create a seamless loop between your social media presence, email funnels, and paid 
              campaigns. Every touchpoint is optimized for maximum impact and brand recall.
            </p>
            <div className="flex gap-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">24/7</span>
                    <span className="text-gray-500 text-xs uppercase tracking-tighter">Optimization</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">Real-time</span>
                    <span className="text-gray-500 text-xs uppercase tracking-tighter">Dashboards</span>
                </div>
            </div>
          </Motion.div>
        </div>

        {/* --- Bento Services Grid --- */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase italic">Strategic Channels</h2>
              <p className="text-blue-400/60 mt-2 font-medium tracking-widest text-xs uppercase">How we scale your business</p>
            </div>
            <div className="h-[1px] flex-grow md:mx-10 bg-white/10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-500"
              >
                <div className="mb-8 p-3 bg-blue-500/5 rounded-xl w-fit group-hover:bg-blue-500/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2 block">{item.tag}</span>
                <h4 className="text-xl font-bold mb-3 text-white/90">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </section>

        {/* --- Quote Section --- */}
        <Motion.div 
          {...fadeInUp}
          className="relative py-24 px-10 rounded-[4rem] overflow-hidden text-center border border-blue-500/20 bg-blue-500/[0.02]"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              "In the digital age, <span className="text-white font-bold">Attention</span> is the new currency. We make sure you're wealthy."
            </h3>
            <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </Motion.div>

        {/* --- CTA Section --- */}
        <section className="mt-40 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 animate-pulse" />
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase">Ready to Lead?</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">Join forward-thinking brands who have already scaled their revenue with our frameworks.</p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold transition-all hover:pr-14"
            >
              <span className="text-lg uppercase tracking-tight">Launch Campaign</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-600" />
            </Link>
          </Motion.div>
        </section>
        
      </div>
      {<footer />}
      <Footer />
    </div>
  );
};

export default DigitalMarketing;