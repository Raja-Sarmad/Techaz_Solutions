import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Settings, ShieldCheck, Cloud, Code, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'IT Consulting Services',
      description: 'Navigate the complexities technology with expert guidance from our IT consultants. We help businesses strategize.',
      icon: <Settings className="w-6 h-6 text-[#4F46E5]" />,
      size: 'small'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Keep your business running smoothly with reliable optimized IT infrastructure we provide and infrastructure management.',
      icon: <Layout className="w-6 h-6 text-[#4F46E5]" />,
      size: 'small'
    },
    {
      title: 'Cybersecurity Services',
      description: 'Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. From threat detection and response to data encryption and compliance management, we safeguard your digital assets 24/7.',
      icon: <ShieldCheck className="w-6 h-6 text-[#4F46E5]" />,
      size: 'large' // Yeh full width hoga
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage the power the cloud to streamline your operations boost scalability. Our cloud solutions offer secure and flexible environments tailored.',
      icon: <Cloud className="w-6 h-6 text-[#4F46E5]" />,
      size: 'small'
    },
    {
      title: 'Software Development',
      description: 'Transform your ideas into reality with our custom software development services. Whether you need mobile apps, web platforms, or enterprise.',
      icon: <Code className="w-6 h-6 text-[#4F46E5]" />,
      size: 'small'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-1.5 bg-blue-50 text-[#4F46E5] rounded-full text-[10px] font-bold tracking-widest uppercase border border-blue-100"
          >
            Our Service
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-6 max-w-2xl mx-auto leading-tight"
          >
            Transforming Businesses with Expert IT Services
          </motion.h2>
        </div>

        {/* Services Grid (2-1-2 Layout) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-start transition-all duration-300 hover:shadow-xl
                ${service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-6 max-w-3xl">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href="#" 
                className="group flex items-center gap-1.5 text-sm font-bold text-[#1E293B] hover:text-[#4F46E5] transition-colors"
              >
                Learn More
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;