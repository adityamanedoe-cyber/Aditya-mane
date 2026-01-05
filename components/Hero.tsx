
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-20">
      <div className="relative z-10 max-w-6xl space-y-8 md:space-y-12">
        <div className="glass-card px-4 md:px-6 py-2 rounded-full inline-flex items-center gap-2 border-white/10 opacity-0 animate-reveal" style={{ animationDelay: '2.1s' }}>
          <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold">Showcasing Motion & Editing</span>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[1.1] md:leading-[0.9] transition-transform duration-700 cursor-default name-glow opacity-0 animate-scale-reveal" style={{ animationDelay: '2.3s' }}>
            Aditya Mahadev Mane
          </h1>
          <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight flex flex-col items-center justify-center gap-2 md:flex-row md:gap-x-4 leading-tight opacity-0 animate-reveal" style={{ animationDelay: '2.5s' }}>
            <span className="gradient-text">Motion Graphics Designer</span>
            <span className="text-white">& Video Editor</span>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-xl leading-[1.6] font-light opacity-0 animate-reveal" style={{ animationDelay: '2.7s' }}>
          Merging narrative depth with visual precision to create immersive 
          digital experiences that command attention.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 opacity-0 animate-reveal" style={{ animationDelay: '2.9s' }}>
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group relative h-14 md:h-16 px-8 md:px-10 rounded-full bg-blue-600 overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]"
          >
            <span className="relative z-10 text-white font-bold text-base md:text-lg flex items-center justify-center gap-3">
              View My Work <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_arrow</span>
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group glass-card h-14 md:h-16 px-8 md:px-10 rounded-full flex items-center justify-center gap-3 border-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <span className="text-white font-bold text-base md:text-lg">Get In Touch</span>
          </button>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 cursor-pointer hover:opacity-100 opacity-0 transition-opacity animate-reveal"
        style={{ animationDelay: '3.2s' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
