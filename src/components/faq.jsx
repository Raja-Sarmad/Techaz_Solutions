import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const canvasRef = useRef(null);

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

  // --- Theme Consistent Background Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const colors = ["#22d3ee", "#a78bfa", "#f472b6"];
    const dots = [];
    const dotCount = 60;

    class Dot {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.15;
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        this.draw();
      }
    }

    for (let i = 0; i < dotCount; i++) dots.push(new Dot());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => dot.update());
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="Faq" className="relative py-24 bg-[#121212] overflow-hidden font-['Poppins'] text-white">
      
      {/* Background Dots Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-400/20">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Your Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Answered.</span>
          </h2>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white/5 rounded-2xl transition-all duration-300 border ${
                openIndex === index ? 'border-blue-500/30 bg-white/[0.08] shadow-2xl' : 'border-white/10'
              }`}
            >
              {/* Question Part */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === index ? 'text-blue-400' : 'text-gray-200 hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : 'text-gray-500'}`}>
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
                    <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed font-medium">
                      <div className="h-[1px] bg-white/10 w-full mb-6"></div>
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
