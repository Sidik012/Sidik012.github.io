import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col justify-center items-center text-center px-6 bg-surface/20" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-2xl"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's Build the Future.</h2>
        <p className="text-xl text-gray-400 mb-12">
          Open to Data Engineering, ML Research, and Startup Tech collaborations.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="mailto:sidik@superlaps.ne" className="flex items-center gap-3 bg-white text-background px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
            <Mail size={20} />
            Email Me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            <Github size={20} />
            GitHub
          </a>
          <a href="/cv.pdf" download className="flex items-center gap-3 bg-accent-cyan text-background px-8 py-4 rounded-full font-bold hover:bg-accent-cyan/80 transition-colors">
            <Download size={20} />
            Download CV
          </a>
        </div>
      </motion.div>
      
      <footer className="relative mt-24 text-gray-600 text-sm font-mono">
        © {new Date().getFullYear()} Sidik | Powered by Cobalt
      </footer>
    </section>
  );
};
