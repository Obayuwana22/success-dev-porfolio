
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mono text-indigo-500 text-sm mb-6 flex items-center gap-4">
          <span className="w-12 h-px bg-indigo-500"></span>
          FRONTEND ENGINEER // UI ARCHITECT
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
            BUILDING FOR <br/> 
            <span className="italic font-light opacity-50">PERFORMANCE</span> & 
            <span className="text-indigo-600 block sm:inline"> SCALE.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
            I'm a developer who hates slow websites. I spend my time auditing bundles, 
            crafting accessible design systems, and pushing the boundaries of what 
            the browser can do. 
          </p>
          
          <div className="flex flex-wrap gap-8 items-center">
            <a href="#projects" className="group relative px-8 py-4 overflow-hidden rounded-sm bg-white text-black font-bold uppercase tracking-tighter transition-all">
              <span className="relative z-10">Explore the work</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="mono text-sm hover:text-indigo-500 transition-colors border-b border-white/20 pb-1">
              [ get_in_touch ]
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-20 hidden xl:block opacity-10 rotate-90 origin-right">
        <span className="mono text-[12rem] font-bold select-none tracking-tighter">DEVELOPER</span>
      </div>
    </section>
  );
};

export default Hero;
