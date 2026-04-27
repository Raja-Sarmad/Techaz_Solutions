import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Video, Film, Scissors, Play, 
  Clapperboard, Zap, Infinity, Monitor, Activity,
  Wand2, Layers, Music
} from 'lucide-react';

const VideoEditing = () => {
  const verticalFloat = {
    initial: { opacity: 0, y: 50, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const editingStack = [
    {
      icon: <Wand2 className="text-purple-400" size={32} />,
      title: "Color Grading",
      desc: "Cinematic color correction and LUT application to set the perfect mood."
    },
    {
      icon: <Scissors className="text-indigo-400" size={32} />,
      title: "Seamless Cutting",
      desc: "Frame-accurate precision editing for narrative flow and rhythmic pacing."
    },
    {
      icon: <Music className="text-blue-400" size={32} />,
      title: "Sound Design",
      desc: "Immersive audio engineering, foley, and licensed background scores."
    },
    {
      icon: <Layers className="text-purple-500" size={32} />,
      title: "VFX & Motion",
      desc: "Advanced visual effects and 3D motion graphics integrated seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02020a] text-indigo-50 py-16 px-6 font-['Poppins'] selection:bg-purple-500/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[60%] h-[60%] bg-purple-900/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[60%] h-[60%] bg-indigo-900/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group flex items-center gap-3 text-indigo-300/40 hover:text-purple-400 transition-all mb-20 w-fit">
            <div className="p-2 border border-indigo-900/30 rounded-lg group-hover:border-purple-500/50">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Exit Preview</span>
          </Link>
        </motion.div>

        <motion.div {...verticalFloat} className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-md bg-purple-500/5 border border-purple-500/20 mb-8">
            <Film size={12} className="text-purple-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400">4K Raw Post-Production</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600">Storytelling</span>
          </h1>
          <p className="text-indigo-200/50 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            Video editing is the manipulation and arrangement of video shots to create a unified work. 
            We engineer **Cinematic Narratives** that capture attention and evoke powerful emotions through professional post-production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {editingStack.map((item, i) => (
            <motion.div 
              key={i} {...verticalFloat} transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-purple-500/5 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-indigo-100/30 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start mb-40">
          <motion.div {...verticalFloat} className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Non-Linear <br /> Masterclass</h2>
            <div className="space-y-6 text-indigo-100/50 text-lg leading-relaxed">
              <p>
                Using industry-standard software like **DaVinci Resolve and Premiere Pro**, we follow a rigorous 
                **Color Workflow** to ensure consistency across all screens. Our editing philosophy focuses on 
                the "Invisible Cut"—ensuring the viewer is lost in the story, not the transitions.
              </p>
              <p>
                From **Proxy Workflows** for high-resolution 8K footage to final **Mastering**, we handle 
                every technical aspect. We ensure your final export is optimized for Cinema, TV, or 
                Streaming platforms with the highest bitrates and dynamic range.
              </p>
            </div>
          </motion.div>

          <motion.div {...verticalFloat} className="lg:col-span-5 p-12 bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 rounded-[3rem] backdrop-blur-xl">
             <Monitor className="text-purple-400 mb-8" size={40} />
             <h3 className="text-2xl font-bold mb-4 italic">Post-Pipeline</h3>
             <p className="text-indigo-100/40 text-sm leading-relaxed mb-6">
               Implementing **Dynamic Linking** between After Effects and Premiere to provide 
               real-time revisions and complex compositing without losing quality.
             </p>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-[10px] font-bold text-red-600 tracking-widest uppercase">Recording Studio Live</span>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative p-20 rounded-[5rem] bg-[#05050f] border-2 border-purple-500/10 text-center overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-purple-500/20 group-hover:rotate-180 transition-transform duration-1000">
               <Play size={50} className="text-purple-500" />
            </div>
            <h2 className="text-5xl md:text-[8rem] font-black mb-12 tracking-tighter uppercase italic leading-none text-white">
              Roll The <br /> Camera
            </h2>
            <button className="bg-purple-600 text-white px-20 py-6 rounded-full font-black text-xl hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-500 shadow-[0_0_60px_-10px_rgba(147,51,234,0.5)]">
              START EDITING
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoEditing;
