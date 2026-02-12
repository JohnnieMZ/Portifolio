
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeader title="Contato" subtitle="Vamos conversar sobre seu próximo desafio de dados" />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="glass p-8 rounded-[2rem] space-y-8">
            <h3 className="text-2xl font-bold">Informações de contato</h3>
            <p className="text-[#B9B9B9]">Sinta-se à vontade para entrar em contato comigo através de qualquer um dos canais abaixo.</p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "Email", value: "contato@jzanalytics.com", href: "mailto:contato@jzanalytics.com" },
                { icon: <Linkedin />, label: "LinkedIn", value: "/in/jz-analyst", href: "#" },
                { icon: <Github />, label: "GitHub", value: "/jzavatti", href: "#" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1E2631] flex items-center justify-center text-[#35B6FF] group-hover:bg-[#35B6FF] group-hover:text-[#070708] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-[#B9B9B9] uppercase font-bold tracking-widest">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem] bg-[#35B6FF]/5 border-[#35B6FF]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#35B6FF] flex items-center justify-center text-[#070708] animate-bounce">
              <MessageSquare size={24} />
            </div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">Respondendo em até 24h</p>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#B9B9B9] px-2">NOME</label>
                <input 
                  type="text" 
                  placeholder="Seu nome completo" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#35B6FF] focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#B9B9B9] px-2">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#35B6FF] focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#B9B9B9] px-2">MENSAGEM</label>
              <textarea 
                rows={5} 
                placeholder="Como posso te ajudar?" 
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#35B6FF] focus:outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-5 bg-[#35B6FF] text-[#070708] font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(53,182,255,0.3)] transition-all transform hover:-translate-y-1"
            >
              Enviar Mensagem <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
