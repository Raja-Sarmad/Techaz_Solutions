import React from 'react';
import { Search, PenTool, BarChart3, Rocket, ChevronRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business needs, challenges, & goals through in-depth.',
      icon: <Search className="w-8 h-8 text-blue-600" />,
    },
    {
      id: '02',
      title: 'Design & Development',
      description: 'With a clear plan in place, our experts move into the design and development phase.',
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
    },
    {
      id: '03',
      title: 'Continuous Improvement',
      description: 'In a fast-changing digital world, staying ahead is essential. That’s why we continuously monitor.',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    },
    {
      id: '04',
      title: 'Launch & Support',
      description: 'Once everything is in place, we the solution with comprehensive support but our work doesn’t.',
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-100">
            Work Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            How We Get Things Done
          </h2>
        </div>

        {/* --- PROCESS STEPS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting Arrows (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full pointer-events-none">
            <div className="flex justify-around items-center px-32">
               <ChevronRight className="text-gray-100 w-10 h-10 ml-10" strokeWidth={1} />
               <ChevronRight className="text-gray-100 w-10 h-10 ml-10" strokeWidth={1} />
               <ChevronRight className="text-gray-100 w-10 h-10 ml-10" strokeWidth={1} />
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              
              {/* Concentric Circles & Icon */}
              <div className="relative mb-8">
                {/* Outer Ring */}
                <div className="w-32 h-32 rounded-full border border-slate-100 bg-slate-50/30 flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 shadow-inner">
                  {/* Inner Ring */}
                  <div className="w-full h-full rounded-full border border-slate-100 bg-white flex items-center justify-center shadow-sm group-hover:border-blue-200">
                    {step.icon}
                  </div>
                </div>

                {/* Number Badge (Top Right) */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-4 border-white z-10 transition-transform group-hover:rotate-[360deg] duration-700">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto font-medium opacity-80">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Subtle Bottom Light Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-50 to-transparent"></div>
    </section>
  );
};

export default Process;