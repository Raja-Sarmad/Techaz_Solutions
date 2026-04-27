import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Megaphone, BarChart3, Globe, Sparkles, 
  Share2, Rocket, Heart, TrendingUp, Users, 
  Target, Mail, MousePointerClick
} from 'lucide-react';

const DigitalMarketing = () => {
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

  // --- UPDATED: Marketing Pillars Data Array ---
  const marketingPillars = [
    {
      icon: <Target className="text-orange-400" size={40} />,
      title: "Paid Advertising",
      lang: "Google Ads, Meta Ads, PPC Management"
    },
    {
      icon: <Share2 className="text-amber-400" size={40} />,
      title: "Social Media",
      lang: "Brand Awareness & Community Growth"
    },
    {
      icon: <Mail className="text-yellow-400" size={40} />,
      title: "Email Marketing",
      lang: "Automated Funnels & Newsletters"
    },
    {
      icon: <TrendingUp className="text-orange-500" size={40} />,
      title: "Growth Hacking",
      lang: "Conversion Rate Optimization (CRO)"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] selection:bg-orange-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-orange-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Growth Hub</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: HERO (Marketing Focus) --- */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter uppercase italic">
            Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 font-black">Dominance</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            Digital marketing is the strategic promotion of brands to connect with potential customers using the internet and other forms of digital communication. 
            We don't just create ads; we build **Narratives that Convert** and scale your business to new heights.
          </p>
        </motion.div>

        {/* --- SECTION 2: PERFORMANCE & ENGAGEMENT --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <motion.div {...slideInLeft} className="space-y-6">
            <div className="p-4 bg-orange-500/10 rounded-2xl w-fit text-orange-400"><Megaphone size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Precision Targeting</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Stop wasting budget on broad audiences. We use **Advanced Demographic Tracking** and **User Intent Analysis** 
              to ensure your message reaches the right person at the perfect time. By leveraging AI-driven 
              bidding strategies, we maximize your ROAS (Return on Ad Spend) while minimizing costs.
            </p>
            <div className="grid grid-cols-2 gap-4 text-orange-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># Performance Marketing</span>
              <span className="bg-white/5 p-2 rounded"># Audience Insights</span>
              <span className="bg-white/5 p-2 rounded"># Retargeting Pixels</span>
              <span className="bg-white/5 p-2 rounded"># A/B Testing</span>
            </div>
          </motion.div>

          <motion.div {...slideInRight} className="space-y-6 lg:mt-24">
            <div className="p-4 bg-amber-500/10 rounded-2xl w-fit text-amber-400"><Heart size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Content Ecosystem</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              In the digital world, content is the bridge between you and your customers. We craft 
              **Viral-Ready Content Strategies** across TikTok, Instagram, and LinkedIn. 
              Our approach ensures your brand voice is consistent, engaging, and designed to 
              foster long-term community loyalty rather than just one-time clicks.
            </p>
            <div className="grid grid-cols-2 gap-4 text-amber-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># Viral Strategy</span>
              <span className="bg-white/5 p-2 rounded"># Brand Storytelling</span>
              <span className="bg-white/5 p-2 rounded"># Influencer Outreach</span>
              <span className="bg-white/5 p-2 rounded"># Engagement Lift</span>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: WIKI STYLE CONTENT --- */}
        <motion.div {...slideInLeft} className="bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5 mb-40 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 blur-[100px] rounded-full group-hover:bg-orange-500/10 transition-all duration-700"></div>

          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
            "Marketing is no longer about the stuff that you make, but about the <span className="text-orange-400 italic font-black">stories you tell</span>."
          </h3>

          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl relative z-10">
            <p>
              According to the **Digital Marketing Institute**, data-driven companies are 23x more likely to acquire customers. 
              Our methodology revolves around the **Full-Funnel Approach**: Awareness, Consideration, and Conversion. 
              We track every single touchpoint to provide a crystal-clear picture of your ROI.
            </p>
            <p>
              We integrate your marketing stack with powerful **CRM Tools** and **Analytical Dashboards**, 
              turning raw numbers into actionable growth plans. From Lead Generation to Retention, 
              we ensure your digital presence is a self-sustaining revenue engine.
            </p>
          </div>
        </motion.div>

        {/* --- SECTION 4: MARKETING PILLARS --- */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">Growth Channels</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingPillars.map((pill, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group cursor-default">
                <div className="mb-6 group-hover:scale-110 transition-transform">{pill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{pill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{pill.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
