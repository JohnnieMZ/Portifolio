
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Database } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Experiência', id: 'experience' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 pt-6 transition-all duration-300 ${scrolled ? 'translate-y-[-8px]' : ''}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-[1.5rem] transition-all duration-500 border border-white/5 ${
        scrolled ? 'glass shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/40' : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#35B6FF] to-[#FEC601] rounded-xl flex items-center justify-center shadow-lg shadow-[#35B6FF]/20">
            <Database size={22} className="text-[#070708]" strokeWidth={2.5} />
          </div>
          <span className="font-black text-xl tracking-tighter hidden sm:block">ZAVATTI <span className="text-[#35B6FF]">DATA</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all rounded-xl hover:text-white ${
                activeSection === link.id ? 'text-[#35B6FF]' : 'text-[#B9B9B9]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-white/5 rounded-xl z-[-1]" 
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10 mx-4" />
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black text-sm font-black rounded-xl hover:bg-[#35B6FF] hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-white/5"
          >
            VAMOS CONVERSAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#F3F3F3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#070708]/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}>
              <X size={40} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black ${activeSection === link.id ? 'text-[#35B6FF]' : 'text-white'}`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-12 py-5 bg-[#35B6FF] text-[#070708] text-xl font-black rounded-2xl"
            >
              FALAR COMIGO
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
