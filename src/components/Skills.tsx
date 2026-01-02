
import React from 'react';
import { SKILL_CATEGORIES } from '../utils/constants';

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-6 sm:mb-8 leading-none">
              TECHNICAL <br/> REFLECTION.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 sm:mb-12 italic border-l-2 border-indigo-600 pl-4 sm:pl-6">
              "A developer's tools are an extension of their thinking. I prioritize tools that offer type safety, performance, and a great developer experience."
            </p>
            <div className="mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
              Last updated: Jan 2026
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="p-6 sm:p-8 border border-white/5 bg-white/1 rounded-lg group hover:border-indigo-500/20 transition-all">
                <h3 className="mono text-xs font-bold text-indigo-500 mb-6 sm:mb-8 tracking-[0.2em] uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-2.5 sm:px-3 py-1.5 rounded-sm border border-white/10 text-xs font-medium hover:bg-white hover:text-black transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="p-6 sm:p-8 border border-dashed border-white/10 flex flex-col justify-center rounded-lg">
              <h3 className="mono text-xs font-bold text-emerald-500 mb-4 tracking-[0.2em] uppercase">Currently Diving Into</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Node.js / Express.js</span>
                  <span className="mono text-indigo-500">5%</span>
                </div>
                <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[5%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
