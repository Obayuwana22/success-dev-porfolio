
import React from 'react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-3 sm:gap-4 mb-16 sm:mb-24 md:mb-32 border-b border-white/5 pb-8 sm:pb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter opacity-10">WORK</h2>
          <div className="mono text-indigo-500 text-[10px] sm:text-xs md:text-sm">/ SELECTED PROJECTS 2023-2024</div>
        </div>

        <div className="space-y-20 sm:space-y-40 md:space-y-60">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'} relative`}>
              <div className={`w-full lg:w-3/4 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'} relative z-10`}>
                <div className="overflow-hidden group rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 object-cover aspect-video"
                  />
                </div>
                
                <div className={`mt-8 sm:mt-12 flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'}`}>
                  <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="mono text-[9px] sm:text-[10px] text-indigo-400 uppercase tracking-widest bg-indigo-500/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter group-hover:italic transition-all">
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a href={project.link} className="mono text-xs sm:text-sm underline underline-offset-8 hover:text-indigo-500 transition-colors">
                      LIVE_RELEASE
                    </a>
                    <a href={project.github} className="mono text-xs sm:text-sm opacity-50 hover:opacity-100 transition-opacity">
                      github_repository
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} hidden lg:block opacity-[0.02] pointer-events-none`}>
                <span className="text-[20rem] font-black italic">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
