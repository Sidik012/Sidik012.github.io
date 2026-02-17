import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/content';

export const BusinessSection = () => {
  return (
    <section className="min-h-[80vh] w-full py-24 bg-gradient-to-b from-transparent to-surface/30" id="business">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden border border-accent-gold/20 bg-background/80 backdrop-blur-xl p-8 md:p-16"
        >
          {/* Decorative Gold Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-accent-gold font-mono tracking-widest mb-4">ENTREPRENEURSHIP</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-accent-gold">Cobalt</span></h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bridging the gap in Niger's digital ecosystem. Cobalt provides high-end tech solutions for local enterprises.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">Strategic Partners</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 group">
                       <div className="h-2 w-2 bg-accent-cyan rounded-full group-hover:shadow-[0_0_8px_rgba(0,255,255,0.6)] transition-all" />
                       <span className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">Volt Niger</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">Status</p>
                  <div>
                    <h4 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Active</h4>
                    <p className="text-sm text-gray-500 mt-1">Market Expansion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-8 md:pl-12">
              <h4 className="font-mono text-lg text-gray-400">TIMELINE</h4>
              {timeline.map(item => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[53px] top-2 w-3 h-3 rounded-full bg-accent-gold border-4 border-background" />
                  <span className="text-xs text-accent-gold font-mono block mb-1">{item.period}</span>
                  <h5 className="text-lg font-bold">{item.role}</h5>
                  <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                  <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
