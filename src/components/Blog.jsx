import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import SectionBackdrop from './SectionBackdrop';

const Blog = () => {
  const posts = [
    {
      title: 'How AI is Transforming Modern Enterprise Software',
      category: 'Artificial Intelligence',
      date: '12 March 2024',
      author: 'Tech Lead',
      image: 'https://www.zoondia.com/wp-content/uploads/2025/11/How-AI-Is-Transforming-Enterprise-Software-Development-1.jpg'
    },
    {
      title: 'The Future of Scalable Cloud Architectures',
      category: 'Cloud Solutions',
      date: '08 March 2024',
      author: 'DevOps Expert',
      image: 'https://cdn.prod.website-files.com/65e6d3081f98733f1b369f14/6825e48459d541af18dc7f09_Visual-Key-Components-of-cloud-architecture.webp'
    },
    {
      title: 'Best Practices for Secure SaaS Development',
      category: 'Cyber Security',
      date: '05 March 2024',
      author: 'Security Architect',
      image: 'https://xtrasaas.com/wp-content/uploads/2025/10/SaaS-Development-in-2025-Best-Practices-for-Secure-Scalable-and-Future-Ready-Apps-1024x576.jpg'
    },
  ];

  return (
    <section id="Blog" className="relative py-16 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 overflow-hidden font-['Poppins'] text-gray-900 text-left">
      <SectionBackdrop />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
            OUR INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Latest Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Updates.</span>
          </h2>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-bold tracking-wide shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content Padding */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-4 text-gray-600 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blue-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-6 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Action Link */}
                <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read Article 
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
