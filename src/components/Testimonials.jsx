import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ben Stokes",
      role: "Developers",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "From seamless cloud migrations to enhanced cybersecurity, our work has helped businesses grow, adapt, and succeed in an ever-evolving digital landscape. But don't just take our word for hear directly those who have experienced the difference."
    },
    {
      name: "Sarah Jenkins",
      role: "CEO, TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "The attention to detail and technical expertise provided by this team is unmatched. They transformed our legacy systems into a modern, scalable architecture within months. Truly a game-changer for us."
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section className="relative py-32 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND DECORATION (Bokeh & Streaks) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        
        {/* Animated Light Streaks */}
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent -rotate-45 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-white/10 backdrop-blur-md mb-10">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
            Customer Review
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Why Our Clients Trust Us
        </h2>

        {/* Slider Logic */}
        <div className="relative max-w-4xl mx-auto px-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] md:left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-20 active:scale-90"
          >
            <ArrowLeft size={24} />
          </button>

          <button 
            onClick={next}
            className="absolute right-[-20px] md:right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-20 active:scale-90"
          >
            <ArrowRight size={24} />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed italic mb-12 font-medium">
                "{reviews[current].quote}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-5 text-left">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img 
                    src={reviews[current].image} 
                    alt={reviews[current].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{reviews[current].name}</h4>
                  <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Progress Scroll To Top (Right Bottom Corner) */}
      <div className="absolute bottom-10 right-10 flex items-center justify-center group cursor-pointer">
         <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
            <ArrowLeft className="rotate-90" size={20} />
         </div>
      </div>

    </section>
  );
};

export default Testimonials;