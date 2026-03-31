import React from 'react';
import { CheckCircle2, ArrowUpRight, PhoneCall, ArrowUp } from 'lucide-react';

const AboutUs = () => {
  const features = [
    "Financial Freedom Consulting",
    "Next Generation Accounting",
    "Money Management Consulting",
    "Short-Range Finance Planning",
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT SIDE: OVERLAPPING IMAGES --- */}
          <div className="relative">
            {/* Top Large Image */}
            <div className="relative z-0 ml-auto w-[85%]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
                alt="Team working" 
                className="rounded-2xl shadow-xl object-cover h-[450px] w-full"
              />
            </div>

            {/* Bottom Small Image */}
            <div className="absolute bottom-[-40px] left-0 z-10 w-[55%] border-[10px] border-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&w=400&q=80" 
                alt="Team discussion" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blue Experience Box */}
            <div className="absolute bottom-[-40px] right-4 z-20 bg-[#1e3aed] text-white p-8 rounded-2xl shadow-2xl w-[50%] lg:w-[45%]">
               <h4 className="text-4xl font-bold mb-2">12+</h4>
               <p className="text-sm font-medium leading-relaxed opacity-90">
                 With 12+ years of experience helping the community.
               </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="space-y-8">
            <div>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 leading-tight">
                Empowering Businesses <br />
                One Solution at a Time
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                With a passion for solving complex challenges, we specialize in delivering tailored IT solutions that empower businesses thrive.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#1e3aed] h-5 w-5 fill-blue-50" />
                  <span className="text-gray-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gray-100 w-full"></div>

            {/* Actions: Button & Contact */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <button className="flex items-center gap-3 bg-[#1e3aed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                Get Started
                <ArrowUpRight size={20} />
              </button>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                  <PhoneCall className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Free Consultation</p>
                  <p className="text-xl font-bold text-[#1e3aed]">123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top (Optional, but in your image) */}
      <button className="fixed bottom-10 right-10 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all z-50">
        <ArrowUp size={20} />
      </button>
    </section>
  );
};

export default AboutUs;