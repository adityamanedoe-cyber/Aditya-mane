
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { SoftwareProficiency } from './components/SoftwareProficiency';
import { WorkGrid } from './components/WorkGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Entrance logic
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02020a] overflow-x-hidden">
      {/* Preloader / Reload Animation */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] bg-[#02020a] flex flex-col items-center justify-center p-6 preloader-finish">
          <div className="relative mb-12">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/5 flex items-center justify-center text-white font-black text-xl md:text-2xl animate-scale-reveal">
              AM
            </div>
            <div className="absolute inset-[-10px] rounded-full border border-blue-600/20 animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
          <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-fuchsia-600 loader-bar"></div>
          </div>
          <p className="mt-6 text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/30 font-black animate-pulse">Initializing Canvas</p>
        </div>
      )}

      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="bg-grid-parallax"></div>
        
        <div 
          className="orb bg-blue-600/50 hidden md:block" 
          style={{ transform: `translate(${mousePos.x - 350}px, ${mousePos.y - 350}px)` }}
        ></div>
        <div 
          className="orb bg-fuchsia-600/40 hidden md:block" 
          style={{ 
            transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 450}px)`,
            transitionDelay: '0.05s',
            width: '600px', height: '600px'
          }}
        ></div>

        {/* Floating icons adjusted for mobile visibility */}
        <div className="absolute top-[15%] left-[5%] md:left-[8%] opacity-5 animate-float-bg">
           <span className="material-symbols-outlined text-[30px] md:text-[40px]">movie_edit</span>
        </div>
        <div className="absolute bottom-[20%] right-[5%] md:right-[10%] opacity-5 animate-float-bg" style={{ animationDelay: '1.5s' }}>
           <span className="material-symbols-outlined text-[20px] md:text-[30px]">polyline</span>
        </div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 md:py-40">
          <div className="opacity-0 translate-y-10 transition-all duration-1000 delay-[200ms] animate-reveal">
            <About />
          </div>
        </section>

        <section id="experience" className="py-24 md:py-40">
          <Experience />
        </section>

        <section id="skills" className="py-24 md:py-40">
          <Skills />
        </section>

        <section id="proficiency" className="py-24 md:py-40">
          <SoftwareProficiency />
        </section>

        <section id="work" className="py-24 md:py-40">
          <WorkGrid />
        </section>

        <section id="contact" className="py-24 md:py-40">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
