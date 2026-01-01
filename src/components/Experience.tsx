
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 flex items-center gap-6">
          <div className="w-12 h-[1px] bg-white/20"></div>
          <h2 className="text-3xl font-bold tracking-tighter">PROFESSIONAL LOG</h2>
          <span className="mono text-xs opacity-30">V.2.4</span>
        </div>

        <div className="space-y-24">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 group">
              <div className="mono text-sm text-indigo-500/60 font-bold group-hover:text-indigo-500 transition-colors">
                {exp.period}
              </div>
              
              <div className="relative border-l border-white/10 pl-12 pb-4">
                <div className="absolute left-[-1px] top-0 w-[1px] h-0 bg-indigo-500 transition-all duration-700 group-hover:h-full"></div>
                
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="mono text-sm mb-8 opacity-40 uppercase tracking-widest">{exp.company}</p>
                
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 leading-relaxed text-sm md:text-base relative group/item">
                      <span className="absolute -left-12 top-3 w-4 h-[1px] bg-white/10 group-hover/item:bg-indigo-500 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
