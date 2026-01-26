import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';

export const SkillsSection = () => {
  return (
    <section className="w-full py-24 px-6 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-gray-400">Connected knowledge graph across disciplines</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            className="group bg-surface/50 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm hover:border-accent-cyan/50 transition-colors"
            style={{ '--skill-color': skill.color } as React.CSSProperties}
          >
            <skill.icon size={40} className="text-gray-400 group-hover:text-[var(--skill-color)] transition-colors duration-300" />
            <span className="font-mono font-bold text-lg group-hover:text-white transition-colors">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
