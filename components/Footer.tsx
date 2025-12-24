
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/in/aditya-mane-540b4b18b/" target="_blank" className="text-white/30 hover:text-blue-500 transition-colors">
            <span className="material-symbols-outlined text-2xl">link</span>
          </a>
          <a href="https://www.behance.net/adityamane17" target="_blank" className="text-white/30 hover:text-fuchsia-500 transition-colors">
            <span className="material-symbols-outlined text-2xl">palette</span>
          </a>
          <a href="#" className="text-white/30 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-2xl">play_circle</span>
          </a>
        </div>
        <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
          © {currentYear} Aditya Mahadev Mane. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
