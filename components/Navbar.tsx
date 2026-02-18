import React, { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tighter text-white z-50 relative">
          SIDIK<span className="text-accent-cyan">.RI</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#data" className="hover:text-accent-cyan transition-colors">Data & AI</a>
          <a href="#business" className="hover:text-accent-gold transition-colors">Business</a>
          <a href="#skills" className="hover:text-accent-violet transition-colors">Skills</a>
          <a href="#contact" className="px-4 py-0 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-bold md:hidden">
            <a href="#data" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-cyan transition-colors">Data & AI</a>
            <a href="#business" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-gold transition-colors">Business</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-violet transition-colors">Skills</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};
