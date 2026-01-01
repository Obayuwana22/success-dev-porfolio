
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl py-3 md:py-4 border-b border-white/5' : 'bg-transparent py-4 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 sm:gap-3 group relative z-50">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black rounded-full text-lg group-hover:rotate-360 transition-transform duration-1000">
            A
          </div>
          <span className="mono text-xs font-bold tracking-[0.3em] uppercase hidden sm:block">Architecting_Web</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          <a href="#projects" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.work()</a>
          <a href="#experience" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.path()</a>
          <a href="#about" className="mono text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase">.stack()</a>
          <a href="#contact" className="mono text-[10px] tracking-widest px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase">
            .sayHello()
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className="mono text-lg tracking-widest text-gray-400 hover:text-white transition-colors uppercase py-3"
            >
              .work()
            </a>
            <a 
              href="#experience" 
              onClick={handleLinkClick}
              className="mono text-lg tracking-widest text-gray-400 hover:text-white transition-colors uppercase py-3"
            >
              .path()
            </a>
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="mono text-lg tracking-widest text-gray-400 hover:text-white transition-colors uppercase py-3"
            >
              .stack()
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="mono text-lg tracking-widest px-8 py-4 border-2 border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase"
            >
              .sayHello()
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
