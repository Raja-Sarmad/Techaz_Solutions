import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Pehla question default open rahega jaisa image mein hai

  const faqs = [
    {
      question: "How long does it take to implement a solution?",
      answer: "The implementation timeline varies depending on the complexity and scope of the project. We prioritize efficiency compromising quality & keep you informed."
    },
    {
      question: "Can you customize solutions for my business?",
      answer: "Yes, we specialize in building bespoke solutions tailored specifically to your business workflows and unique challenges."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely! We provide 24/7 technical support and regular maintenance packages to ensure your systems are always up-to-date and secure."
    },
    {
      question: "What if we already have an in-house IT team?",
      answer: "We can work alongside your existing team as an extension, providing specialized expertise or helping with specific high-level projects."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including Fintech, Healthcare, E-commerce, Logistics, and Education."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-100">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] tracking-tight">
            Your Questions Answered
          </h2>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 border ${
                openIndex === index ? 'border-blue-100 shadow-xl shadow-blue-900/5' : 'border-transparent shadow-sm'
              }`}
            >
              {/* Question Part */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === index ? 'text-[#1E293B]' : 'text-[#334155] hover:text-blue-600'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
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
                    <div className="px-6 md:px-8 pb-8 text-slate-500 leading-relaxed font-medium">
                      <div className="h-[1px] bg-slate-50 w-full mb-6"></div>
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