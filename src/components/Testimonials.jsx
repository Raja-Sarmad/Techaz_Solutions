import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import SectionBackdrop from './SectionBackdrop';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alexander Wright",
      role: "CTO, Global Finance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "The custom SaaS architecture they built for us has scaled perfectly to handle over 1 million active users. Their technical depth in cloud infrastructure and DevOps is truly world-class."
    },
    {
      name: "Sarah Jenkins",
      role: "Founder, TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "They didn't just write code; they provided a strategic digital roadmap. Our mobile app's performance improved by 60% after their optimization, directly impacting our bottom line."
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    // Top padding ko pt-32 se pt-12 (ya pt-16) kr diya hy
    <section id="Testimonial" className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 font-['Poppins']">
      <SectionBackdrop />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 mb-6">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
            Client Feedback
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Partners Say</span>
        </h2>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all z-20 active:scale-90 bg-white shadow-lg backdrop-blur-sm"
          >
            <ArrowLeft size={24} />
          </button>

          <button 
            onClick={next}
            className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all z-20 active:scale-90 bg-white shadow-lg backdrop-blur-sm"
          >
            <ArrowRight size={24} />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed italic mb-10 font-medium max-w-3xl">
                "{reviews[current].quote}"
              </p>

              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                  <img 
                    src={reviews[current].image} 
                    alt={reviews[current].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{reviews[current].name}</h4>
                  <p className="text-[10px] md:text-xs text-blue-600 font-bold tracking-widest uppercase mt-1">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;