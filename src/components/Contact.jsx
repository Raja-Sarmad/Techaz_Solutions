import React from 'react';
import { Mail, Phone, MapPin, Send, Zap, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#020408] relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: CONTACT INFO (Col 5) --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Zap size={14} className="fill-blue-400" />
                Let's Connect
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
                Ready to scale your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">
                  Digital Future?
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Aapke paas idea hai, hamare paas technology. Mil kar kuch aisa banate hain jo duniya dekhe.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: <Mail />, label: 'Email Humein', value: 'hello@techflow.com', color: 'blue' },
                { icon: <Phone />, label: 'Call Karein', value: '+92 300 1234567', color: 'indigo' },
                { icon: <MapPin />, label: 'Office', value: 'Tech Hub, Sector-10, Karachi', color: 'sky' }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <MessageSquare className="text-white" size={20} />
               </div>
               <p className="text-sm text-blue-100 font-medium">
                  Average response time: <span className="font-bold underline text-white">Under 2 hours</span>
               </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTACT FORM (Col 7) --- */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Form Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#0A101E]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Aapka Naam</label>
                      <input 
                        type="text" 
                        placeholder="Zeeshan Ahmed"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="zee@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Project Category</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                        <option className="bg-[#0A101E]">Web Development</option>
                        <option className="bg-[#0A101E]">Mobile App</option>
                        <option className="bg-[#0A101E]">AI Solution</option>
                        <option className="bg-[#0A101E]">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Aapka Message</label>
                    <textarea 
                      rows="4"
                      placeholder="Apne project ke baare mein batayein..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    ></textarea>
                  </div>

                  <button className="group w-full relative flex items-center justify-center gap-3 bg-blue-600 text-white font-black py-5 rounded-2xl overflow-hidden transition-all hover:bg-blue-700 shadow-xl shadow-blue-900/40 active:scale-[0.98]">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative flex items-center gap-2 tracking-widest uppercase text-sm">
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
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