
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
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'work' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-card rounded-full px-2 py-2 flex items-center gap-1 sm:gap-2 shadow-2xl shadow-blue-900/10 border-white/10">
        <div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-sm mr-2 shrink-0 cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          AM
        </div>
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
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
          className="ml-1 sm:ml-2 px-6 py-2.5 bg-white text-black hover:bg-gray-100 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <span>Contact</span>
          <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
        </button>
      </nav>
    </header>
  );
};
