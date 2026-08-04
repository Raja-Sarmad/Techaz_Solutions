import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionBackdrop from './SectionBackdrop';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your typical software development lifecycle?",
      answer: "We follow an Agile methodology consisting of Discovery, UI/UX Design, Development, Quality Assurance, and Deployment. This ensures transparency and allows for iterative feedback throughout the project."
    },
    {
      question: "How do you ensure the security of our data and intellectual property?",
      answer: "Security is our top priority. We sign strict NDAs, follow HIPAA/GDPR compliance where necessary, and implement industry-standard encryption and secure coding practices to protect your data."
    },
    {
      question: "Which technologies and frameworks do you specialize in?",
      answer: "Our core expertise includes modern stacks like React, Next.js, Node.js, Python (AI/ML), Flutter for mobile, and AWS/Azure for cloud infrastructure. We choose the stack that best fits your business goals."
    },
    {
      question: "Can you take over an existing project or legacy codebase?",
      answer: "Yes, we specialize in legacy modernization. Our team can audit your current codebase, optimize performance, and implement new features while ensuring a seamless transition."
    },
    {
      question: "What kind of post-launch support do you provide?",
      answer: "We offer tiered maintenance packages including 24/7 technical support, server monitoring, security patches, and regular feature updates to keep your software running at peak performance."
    }
  ];

  return (
    <section id="Faq" className="relative py-16 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white overflow-hidden font-['Poppins'] text-gray-900">
      <SectionBackdrop />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[10px] font-black tracking-widest uppercase">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Your Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Answered.</span>
          </h2>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 border shadow-lg shadow-blue-600/5 ${
                openIndex === index ? 'border-blue-500/40 shadow-2xl shadow-blue-600/10' : 'border-gray-200'
              }`}
            >
              {/* Question Part */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === index ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'}`}>
                   <ChevronDown size={22} />
                </div>
              </button>

              {/* Answer Part (Animated) */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed font-medium">
                      <div className="h-[1px] bg-gray-100 w-full mb-6"></div>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
