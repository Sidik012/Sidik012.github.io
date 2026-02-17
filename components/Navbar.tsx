import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6 bg-transparent'}`}>
=======
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-surface/50 backdrop-blur-sm py-2'}`}>
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tighter text-white">
          SIDIK<span className="text-accent-cyan">.RI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#data" className="hover:text-accent-cyan transition-colors">Data & AI</a>
          <a href="#business" className="hover:text-accent-gold transition-colors">Business</a>
          <a href="#skills" className="hover:text-accent-violet transition-colors">Skills</a>
          <a href="#contact" className="px-4 py-0 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};
