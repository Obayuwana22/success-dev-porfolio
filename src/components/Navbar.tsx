
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black rounded-full text-lg group-hover:rotate-[360deg] transition-transform duration-1000">
            A
          </div>
          <span className="mono text-xs font-bold tracking-[0.3em] uppercase hidden sm:block">Architecting_Web</span>
        </a>
        
        <div className="flex gap-10 items-center">
          <a href="#projects" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.work()</a>
          <a href="#experience" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.path()</a>
          <a href="#about" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.stack()</a>
          <a href="#contact" className="mono text-[10px] tracking-widest px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase">
            .sayHello()
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
