
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, X, Info, Layers, CheckCircle } from 'lucide-react';

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 50 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.9, y: 50 }}
        className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border-white/10 p-8 md:p-12 relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 transition-colors">
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={project.links.demo} className="flex-1 py-4 bg-[#35B6FF] text-[#070708] rounded-2xl font-bold flex items-center justify-center gap-2">
                Ver Demo Online <ExternalLink size={18} />
              </a>
              <a href={project.links.github} className="px-6 py-4 glass rounded-2xl font-bold flex items-center justify-center gap-2">
                GitHub <Github size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[#35B6FF] text-xs font-bold uppercase tracking-widest">{project.category}</span>
              <h3 className="text-3xl md:text-4xl font-black mt-2">{project.title}</h3>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-lg"><Info size={20} className="text-[#35B6FF]" /> O Problema</h4>
              <p className="text-[#B9B9B9]">A empresa sofria com visibilidade limitada do estoque, resultando em perdas financeiras por rupturas e excessos.</p>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-lg"><Layers size={20} className="text-[#FEC601]" /> Solução Técnica</h4>
              <p className="text-[#B9B9B9]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s: string) => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-white/70 border border-white/10">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border-green-500/20 bg-green-500/5">
              <h4 className="flex items-center gap-2 font-bold text-green-400 mb-2"><CheckCircle size={20} /> Impacto Gerado</h4>
              <p className="text-sm text-green-200/70">Redução de 12% no estoque parado e aumento de 8.5% na margem bruta no primeiro trimestre.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const categories = ['Todos', 'Power BI', 'SQL', 'Python', 'Azure'];

  const filteredProjects = filter === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="w-full">
      <SectionHeader title="Portfolio de Elite" subtitle="Soluções que transformam dados complexos em vantagens competitivas." />

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border ${
              filter === cat 
              ? 'bg-[#35B6FF] text-[#070708] border-[#35B6FF] shadow-[0_0_20px_rgba(53,182,255,0.3)]' 
              : 'bg-white/5 text-[#B9B9B9] border-white/10 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 h-full flex flex-col hover:border-[#35B6FF]/30 transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-90"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#35B6FF]/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 bg-white text-[#070708] font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                      Ver Detalhes
                    </button>
                  </div>

                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#35B6FF] text-[#070708] text-[10px] font-black rounded-lg uppercase tracking-tighter">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-2xl font-black mb-4 group-hover:text-[#35B6FF] transition-colors">{project.title}</h4>
                  <p className="text-[#B9B9B9] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.slice(0, 3).map((s, i) => (
                      <span key={i} className="text-[10px] font-bold text-[#35B6FF]/70 uppercase tracking-widest">{s}</span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-4 border border-white/10 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                  >
                    Abrir Case Study <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
