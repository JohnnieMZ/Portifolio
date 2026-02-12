
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h4 className="font-bold text-xl mb-4 tracking-tight">JZ <span className="text-[#35B6FF]">Analytics</span></h4>
        <p className="text-[#B9B9B9] text-sm">
          &copy; {new Date().getFullYear()} Johnnie Zavatti. Desenvolvido com foco em alta performance e dados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
