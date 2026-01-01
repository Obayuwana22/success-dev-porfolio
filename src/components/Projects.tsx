
import React from 'react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-32 border-b border-white/5 pb-12">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter opacity-10">WORK</h2>
          <div className="mono text-indigo-500 text-sm">/ SELECTED PROJECTS 2023-2024</div>
        </div>

        <div className="space-y-60">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} relative`}>
              <div className={`w-full lg:w-3/4 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'} relative z-10`}>
                <div className="overflow-hidden group rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 object-cover aspect-[16/9]"
                  />
                </div>
                
                <div className={`mt-12 flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <div className="flex gap-4 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="mono text-[10px] text-indigo-400 uppercase tracking-widest bg-indigo-500/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter group-hover:italic transition-all">
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-400 text-lg mb-8 max-w-xl leading-relaxed ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {project.longDescription}
                  </p>
                  
                  <div className="flex gap-8">
                    <a href={project.link} className="mono text-sm underline underline-offset-8 hover:text-indigo-500 transition-colors">
                      LIVE_RELEASE
                    </a>
                    <a href={project.github} className="mono text-sm opacity-50 hover:opacity-100 transition-opacity">
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
