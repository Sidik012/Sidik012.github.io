import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Cpu, ExternalLink, BarChart } from 'lucide-react';
import { projects } from '../data/content';

export const ScientificPipeline = () => {
  return (
    <section className="min-h-screen w-full py-24 px-6 max-w-7xl mx-auto" id="data">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sticky top-32 p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-white/5">
          <h2 className="text-4xl font-bold mb-2">Scientific Pipeline</h2>
          <div className="h-1 w-20 bg-accent-cyan mb-6"></div>
          <p className="text-gray-400 text-lg mb-8">
            From raw unstructured data to production-grade neural networks. I specialize in the complete lifecycle of ML systems.
          </p>
          <div className="space-y-6 font-mono text-sm">
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
    </section>
  );
};
