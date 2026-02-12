
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, TrendingUp, Trophy, Target, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import { SectionHeader } from './components/SectionHeader';

const ResultsSection = () => {
  const results = [
    { icon: <TrendingUp />, title: "Aumento Sell-through", value: "+18%", desc: "Otimização de alocação de estoque em 450 lojas." },
    { icon: <Target />, title: "Redução Ruptura", value: "-24%", desc: "Implementação de alertas preditivos via Python." },
    { icon: <Trophy />, title: "Acurácia Forecast", value: "92%", desc: "Modelo de ML focado em coleções sazonais." },
    { icon: <Zap />, title: "Eficiência Time", value: "60%", desc: "Automação total de relatórios de fechamento." }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto w-full">
      <SectionHeader title="Métricas de Impacto" subtitle="Resultados reais entregues através de inteligência analítica." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {results.map((res, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-[2rem] border-white/5 text-center group hover:bg-white/5 transition-all"
          >
            <div className="w-14 h-14 bg-[#35B6FF]/10 rounded-2xl flex items-center justify-center text-[#35B6FF] mx-auto mb-6 group-hover:scale-110 transition-transform">
              {res.icon}
            </div>
            <h4 className="text-4xl font-black text-white mb-2">{res.value}</h4>
            <p className="font-bold text-[#35B6FF] mb-3">{res.title}</p>
            <p className="text-xs text-[#B9B9B9] leading-relaxed">{res.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }

      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10 px-4 md:px-0">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="py-24 max-w-7xl mx-auto">
          <About />
        </section>

        <section id="results" className="py-12">
           <ResultsSection />
        </section>

        <section id="experience" className="py-24 max-w-7xl mx-auto">
          <ExperienceTimeline />
        </section>

        <section id="projects" className="py-24 max-w-7xl mx-auto">
          <Projects />
        </section>

        <section id="skills" className="py-24 max-w-7xl mx-auto">
          <Skills />
        </section>

        <section id="contact" className="py-24 max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-5 bg-[#35B6FF] text-[#070708] rounded-2xl shadow-[0_10px_30px_rgba(53,182,255,0.4)] z-50 hover:scale-110 transition-transform active:scale-90"
          >
            <ArrowUp size={28} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
