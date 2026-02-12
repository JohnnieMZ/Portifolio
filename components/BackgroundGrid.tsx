
import React, { useState, useEffect } from 'react';

const BackgroundGrid: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Interactive Radial Gradient */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(53, 182, 255, 0.08), transparent 80%)`
        }}
      ></div>

      {/* Static Background Gradients for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#35B6FF] opacity-[0.03] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-[#FEC601] opacity-[0.02] blur-[120px] rounded-full"></div>
    </div>
  );
};

export default BackgroundGrid;
