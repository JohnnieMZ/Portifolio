
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { SKILLS_DETAILED } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeader title="Arsenal Tecnológico" subtitle="Domínio profundo das ferramentas que movem o mercado de dados moderno." />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_DETAILED.map((skill, idx) => {
          const Icon = (Icons as any)[skill.icon];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-[#35B6FF]/20 transition-all group hover:bg-gradient-to-br from-[#0E0E10] to-[#1E2631]/30"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#1E2631] flex items-center justify-center text-[#35B6FF] group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white">{skill.title}</h4>
                  <p className="text-[#B9B9B9] leading-relaxed italic text-sm">
                    "{skill.description}"
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }} 
                         whileInView={{ width: '100%' }} 
                         viewport={{ once: true }}
                         className="h-full bg-gradient-to-r from-[#35B6FF] to-transparent" 
                       />
                    </div>
                    <span className="text-[10px] font-black text-[#35B6FF] uppercase">Nível Senior</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
