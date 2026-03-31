import React from 'react';
import { Mail, Phone, MapPin, Send, Zap, MessageSquare, ShieldCheck, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* 1. Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* 2. Dynamic Glows */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: BRANDING & INFO --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
                <Zap size={14} className="fill-blue-400 animate-bounce" />
                Contact Engineering
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.9] tracking-tighter">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Something Epic.
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Aapka vision aur hamari tech expertise—mil kar banate hain digital excellence. 
              </p>
            </div>

            {/* Contact Tiles */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Email Support', value: 'hello@techflow.com', gradient: 'from-blue-500/20' },
                { icon: <Phone size={20} />, label: 'Quick Call', value: '+92 300 1234567', gradient: 'from-indigo-500/20' },
                { icon: <MapPin size={20} />, label: 'Our HQ', value: 'Tech Hub, Karachi, PK', gradient: 'from-purple-500/20' }
              ].map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden p-[1px] rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-[10deg] transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="relative group">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-10 group-hover:opacity-30 transition"></div>
               <div className="relative p-6 rounded-3xl bg-[#0A101E] border border-white/10 flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                      <ShieldCheck className="text-blue-400" size={28} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0A101E] animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-none mb-1 text-nowrap">Secure & Fast Response</h4>
                    <p className="text-gray-500 text-xs">Aapka data mehfooz hai. We reply in 2hrs.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: GLASS FORM --- */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <div className="relative bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Aapka Naam</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@agency.com"
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Kaisa Project hai?</label>
                    <div className="relative">
                      <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                          <option className="bg-[#0A101E]">SaaS Development</option>
                          <option className="bg-[#0A101E]">E-commerce Store</option>
                          <option className="bg-[#0A101E]">AI Integration</option>
                          <option className="bg-[#0A101E]">Mobile App (iOS/Android)</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <Globe size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Message Details</label>
                    <textarea 
                      rows="4"
                      placeholder="Tell us about your goals..."
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button className="group w-full relative h-[70px] bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.98] shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
                    {/* Hover Effect Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <span className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.2em] text-sm">
                      Establish Connection
                      <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </span>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Contact;