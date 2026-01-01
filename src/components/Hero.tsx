
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 sm:pt-20">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mono text-indigo-500 text-xs sm:text-sm mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
          <span className="w-8 sm:w-12 h-px bg-indigo-500"></span>
          <span className="text-[10px] sm:text-sm">FRONTEND ENGINEER // UI ARCHITECT</span>
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tighter leading-none text-white">
            BUILDING FOR <br/> 
            <span className="italic font-light opacity-50">PERFORMANCE</span> & 
            <span className="text-indigo-600 block sm:inline"> SCALE.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl font-light">
            I'm a developer who hates slow websites. I spend my time auditing bundles, 
            crafting accessible design systems, and pushing the boundaries of what 
            the browser can do. 
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8 items-start sm:items-center">
            <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-md bg-white text-black font-bold uppercase tracking-tighter transition-all w-full sm:w-auto text-center">
              <span className="relative z-10">Explore the work</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="mono text-xs sm:text-sm hover:text-indigo-500 transition-colors border-b border-white/20 pb-1">
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
