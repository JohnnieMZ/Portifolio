
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h2>
      <div className="w-20 h-1.5 bg-[#35B6FF] mx-auto rounded-full mb-6"></div>
      <p className="text-[#B9B9B9] max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};
