import React, { useRef, useState, useEffect } from 'react';
import { projects } from '@/data/content';
import { motion } from 'framer-motion';
import { Database, Brain, Cpu, ExternalLink, BarChart } from 'lucide-react';
import { Background3D } from './Background3D';

export const ScientificPipeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate how far we are scrolled through the element
      // Standardizing to 0 to 1 range
      let progress = (windowHeight - rect.top) / (windowHeight + elementHeight);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#0A0A0A]" id="data">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start">
        {/* Left Column: Content */}
        <div className="w-full md:w-5/12 py-24 px-8 md:pl-24 space-y-32">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-2">Scientific Pipeline</h2>
            <div className="h-1 w-20 bg-accent-cyan mb-6"></div>
            <p className="text-gray-400 text-lg max-w-md">
              From raw unstructured data to production-grade neural networks. I specialize in the complete lifecycle of ML systems.
            </p>
            <div className="space-y-6 font-mono text-sm pt-6">
              <div className="flex items-center gap-4 text-accent-cyan">
                <Database size={20} />
                <span>01. Ingestion & Cleaning (ETL)</span>
              </div>
              <div className="flex items-center gap-4 text-accent-violet">
                <Brain size={20} />
                <span>02. Model Architecture (Topological Optimization)</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <Cpu size={20} />
                <span>03. Deployment & Inference</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-mono text-gray-400 mb-6">SELECTED PROJECTS</h3>
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-surface p-8 rounded-xl border border-white/5 hover:border-accent-cyan/50 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-accent-cyan tracking-wider uppercase border border-accent-cyan/20 px-2 py-1 rounded">{project.category}</span>
                  <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                {project.metrics && (
                  <div className="border-t border-white/10 pt-4 flex items-center gap-2 text-accent-gold font-mono text-sm">
                    <BarChart size={14} />
                    {project.metrics} Impact
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Visuals */}
        <div className="hidden md:flex md:w-7/12 sticky top-0 h-screen items-center justify-center bg-[#0A0A0A]">
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden border border-accent-cyan/30 shadow-2xl shadow-accent-cyan/20 bg-black/40 backdrop-blur-md">
                  <Background3D scrollProgress={scrollProgress} isAnimating={true} />
                  <div className="absolute bottom-4 right-4 text-xs text-accent-cyan/70 font-mono">
                    Gaussian Morphing → Neural Network
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
