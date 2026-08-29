import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

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
    <section id="Blog" className="relative py-10 bg-white dark:bg-gray-950 overflow-hidden font-['Poppins'] text-gray-900 dark:text-gray-100 text-left">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase">
            OUR INSIGHTS
          </span>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
            Latest Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Updates.</span>
          </h2>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-blue-600 rounded-full text-[10px] font-bold tracking-wide uppercase">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-gray-500 dark:text-gray-400 text-[10px] font-semibold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-blue-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={12} className="text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="font-syne text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug mb-5 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-600 transition-colors">
                    Read Article
                  </span>
                  <span className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-transparent group-hover:text-white transition-all">
                    <ArrowUpRight size={14} />
                  </span>
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
