import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Revolutionize Your Operations with Our Expertise',
      category: 'Cyber Service',
      date: '10 October 2024',
      author: 'Shakib Mahmud',
      image: 'https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Empowering Your Business with Cutting-Edge Insights',
      category: 'It Management',
      date: '10 October 2024',
      author: 'Shakib Mahmud',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Transform Your Business with Innovative Solutions',
      category: 'It Service',
      date: '10 October 2024',
      author: 'Shakib Mahmud',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-100">
            OUR BLOG
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Latest Insights & Updates
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
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#1e3aed] text-white rounded-full text-[10px] font-bold tracking-wide shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Meta Info (Date & Author) */}
              <div className="flex items-center gap-6 mb-4 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-400" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-6 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              {/* Action Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all"
              >
                Learn More 
                <ArrowUpRight size={18} className="text-slate-900 group-hover:text-blue-600" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;