import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll logic
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Calculate percentage (0 to 100)
      if (scrollTotal > 0) {
        setProgress((currentScroll / scrollTotal) * 100);
      }

      // Show button after 200px scroll
      setIsVisible(currentScroll > 200);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-2xl hover:scale-110 transition-transform group"
      >
        {/* Progress Circle (SVG) */}
        <svg className="absolute w-full h-full -rotate-90">
          {/* Background Circle (Faint) */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-gray-100"
          />
          {/* Progress Circle (Blue) */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ 
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 0.1s ease'
            }}
            strokeLinecap="round"
            className="text-blue-600"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp 
          size={22} 
          className="relative z-10 text-blue-600 group-hover:-translate-y-1 transition-transform" 
        />
      </button>
    </div>
  );
};

export default ScrollToTop;