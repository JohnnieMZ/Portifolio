
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeader title="Experiência" subtitle="Minha evolução profissional em números e conquistas" />
      
      <div className="mt-16 relative">
        {/* Central Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-[#35B6FF]/50 via-white/10 to-transparent"></div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on the line */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#070708] border-2 border-[#35B6FF] z-10 shadow-[0_0_10px_rgba(53,182,255,0.8)]"></div>

              {/* Card Content */}
              <div className="w-full md:w-[45%] ml-8 md:ml-0">
                <div className="glass p-6 rounded-3xl hover:border-[#35B6FF]/30 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#35B6FF] transition-colors">{exp.role}</h4>
                      <p className="text-[#35B6FF] font-medium flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-[#B9B9B9] px-3 py-1 bg-[#1E2631] rounded-full flex items-center gap-1 shrink-0 w-fit">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-[#B9B9B9] text-sm flex gap-2">
                        <span className="text-[#35B6FF]">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 rounded-md text-[#B9B9B9]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Placeholder for symmetry on desktop */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
