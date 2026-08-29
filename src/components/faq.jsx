import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section id="Faq" className="relative py-10 bg-white dark:bg-gray-950 overflow-hidden font-['Poppins'] text-gray-900 dark:text-gray-100">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-[10px] font-bold tracking-widest uppercase">
            Frequently Asked Questions
          </div>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
            Your Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Answered.</span>
          </h2>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 border bg-white dark:bg-gray-900 ${
                openIndex === index
                  ? 'border-blue-400/50 dark:border-blue-700'
                  : 'border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900'
              }`}
            >
              {openIndex === index && (
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />
              )}
              {/* Question Part */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 pl-6 md:pl-7 text-left focus:outline-none gap-4"
              >
                <span className={`font-syne text-base md:text-lg font-bold transition-colors ${
                  openIndex === index ? 'text-blue-600' : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'rotate-180 border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 group-hover:border-blue-300'
                }`}>
                   <ChevronDown size={18} />
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
                    <div className="px-6 md:px-7 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
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
