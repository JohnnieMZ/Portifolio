
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, MousePointer2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { IMPACT_STATS } from '../constants';

const CountUp = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-12 md:py-24">
      <div className="flex-1 text-center lg:text-left z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#35B6FF]/10 border border-[#35B6FF]/20 text-[#35B6FF] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35B6FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35B6FF]"></span>
            </span>
            Especialista em Dados & Varejo
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
            Transformo Milhões em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35B6FF] to-[#FEC601] drop-shadow-sm">Decisões</span> Diárias
          </h1>
          <p className="text-lg md:text-2xl text-[#B9B9B9] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Analista de Dados Sênior focado em <span className="text-white font-semibold">ROI e Automação</span>. Especialista em Power BI, SQL e Pipelines Azure para grandes players do varejo brasileiro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-10 py-5 bg-[#35B6FF] text-[#070708] font-bold rounded-2xl flex items-center gap-3 hover:shadow-[0_0_30px_rgba(53,182,255,0.5)] transition-all group relative overflow-hidden"
          >
            <span className="relative z-10">Explorar Portfólio</span>
            <MousePointer2 size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#"
            className="px-10 py-5 glass text-[#F3F3F3] font-bold rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all border border-white/10"
          >
            Download Curriculum
            <FileDown size={20} />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:max-w-4xl">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl font-black mb-1" style={{ color: stat.color }}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs font-bold text-[#B9B9B9] uppercase tracking-tighter">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative mt-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto"
        >
          {/* Main Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#35B6FF] to-[#FEC601] rounded-3xl blur-[120px] opacity-10 animate-pulse"></div>
          
          <div className="relative w-full h-full glass rounded-[3rem] p-4 border border-white/10 overflow-hidden group shadow-2xl rotate-3">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
               alt="Senior Data Analyst" 
               className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
             />
             <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase">Status</p>
                    <p className="text-sm text-green-400 font-semibold tracking-wide">Foco em Performance</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Floating Data Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-10 glass p-5 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center gap-1 z-20"
          >
            <div className="w-12 h-12 bg-[#FEC601] rounded-xl flex items-center justify-center text-[#070708]">
               <TrendingUp size={28} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-black text-white mt-2">SELL-THROUGH</span>
            <span className="text-lg font-bold text-[#FEC601]">+24%</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
