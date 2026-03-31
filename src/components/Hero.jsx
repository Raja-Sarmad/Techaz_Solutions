import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      
      {/* --- PREMIUM BACKGROUND GLOWS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"></div>
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]"></div>
        {/* Bottom Left Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT CONTENT: Text & CTA --- */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase">
              IT Solutions for a Smarter Future
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Your Growth <br />
              Powered By So <br />
              <span className="text-white">Advanced IT Solutions</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Empower your business with cutting technology solutions tailored to meet your unique needs from cloud computing.
            </p>

            {/* Button */}
            <div className="pt-4">
              <button className="group flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95">
                Book a Free Consultation
                <div className="bg-blue-100 p-1 rounded-full group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </div>

          {/* --- CENTER: Image with Swirl Effect --- */}
          <div className="lg:col-span-4 relative flex justify-center items-center">
             {/* Swirl Line Decoration */}
             <div className="absolute w-[120%] h-[120%] border border-white/20 rounded-[50%] rotate-[15deg] pointer-events-none"></div>
             <div className="absolute w-[110%] h-[110%] border border-white/10 rounded-[50%] -rotate-[10deg] pointer-events-none"></div>
             
             {/* Man Image (Using a professional placeholder) */}
             <div className="relative z-10 w-full max-w-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                  alt="Tech Specialist" 
                  className="rounded-b-full grayscale-[0.1] hover:grayscale-0 transition-all duration-700 contrast-125"
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
             </div>
          </div>

          {/* --- RIGHT: Stats Cards --- */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-10">
            {[
              { val: '1.3k+', label: 'Happy Client' },
              { val: '199+', label: 'Total Projects' },
              { val: '99+', label: 'Team Member' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center lg:text-left hover:bg-white/10 transition-all group">
                <h4 className="text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {stat.val}
                </h4>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;