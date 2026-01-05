
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 opacity-0 animate-reveal" style={{ animationDelay: '2.2s' }}>
      <nav className="glass-card rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-2xl border-white/10 w-full max-w-fit">
        <div 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-xs md:text-sm shrink-0 cursor-pointer transition-transform active:scale-95"
          onClick={() => scrollTo('home')}
        >
          AM
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 md:px-5 py-2 text-[10px] md:text-sm font-medium rounded-full transition-all ${
                activeSection === item.id 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button 
          onClick={() => scrollTo('contact')}
          className="ml-1 px-4 md:px-6 py-2 md:py-2.5 bg-white text-black rounded-full text-[10px] md:text-sm font-bold transition-transform active:scale-95 flex items-center gap-1.5 md:gap-2"
        >
          <span>Hire</span>
          <span className="material-symbols-outlined text-[14px] md:text-[18px]">arrow_outward</span>
        </button>
      </nav>
    </header>
  );
};
