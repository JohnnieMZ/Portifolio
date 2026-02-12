
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Database, LineChart, Code2, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const chips = ["Data Storytelling", "Governança", "Pipelines", "Varejo", "Pricing", "Stock Analytics"];

  return (
    <div className="w-full">
      <SectionHeader title="Sobre Mim" subtitle="Minha trajetória transformando números em narrativas" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <h3 className="text-3xl font-bold">Focado em impacto real através de dados.</h3>
          <p className="text-[#B9B9B9] text-lg leading-relaxed">
            Como Analista de Dados Sênior, meu foco principal é eliminar o achismo dos processos decisórios. Com sólida experiência no setor varejista, desenvolvi expertise em criar pipelines de dados robustos que alimentam dashboards estratégicos de alta performance.
          </p>
          <p className="text-[#B9B9B9] text-lg leading-relaxed">
            Acredito que um dashboard sem ação é apenas um gráfico colorido. Por isso, meu trabalho envolve desde a extração técnica via SQL e Python até o Data Storytelling final para C-Levels, sempre buscando automação para garantir que a inteligência esteja disponível quando o negócio precisa.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {chips.map((chip, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#F3F3F3] text-sm hover:border-[#35B6FF] transition-colors cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#35B6FF] opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity"></div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Database className="text-[#35B6FF]" /> Core Stack
            </h4>
            
            <div className="space-y-6">
              {[
                { icon: <LineChart />, title: "BI & Visualization", desc: "Power BI, Tableau, Looker" },
                { icon: <Code2 />, title: "Data & Automation", desc: "SQL, Python, Alteryx" },
                { icon: <Cloud />, title: "Cloud Infrastructure", desc: "Azure ADF, Databricks" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E2631] flex items-center justify-center text-[#35B6FF] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{item.title}</h5>
                    <p className="text-sm text-[#B9B9B9]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
