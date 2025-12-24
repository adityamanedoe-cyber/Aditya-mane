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

  useEffect(() => {
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02020a]">
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="bg-grid-parallax"></div>
        
        {/* VIBRANT Colorful Gradient Orbs following mouse - Higher visibility requested */}
        <div 
          className="orb bg-blue-600/50" 
          style={{ transform: `translate(${mousePos.x - 350}px, ${mousePos.y - 350}px)` }}
        ></div>
        <div 
          className="orb bg-fuchsia-600/40" 
          style={{ 
            transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 450}px)`,
            transitionDelay: '0.05s',
            width: '600px', height: '600px'
          }}
        ></div>
        <div 
          className="orb bg-orange-600/40" 
          style={{ 
            transform: `translate(${mousePos.x - 450}px, ${mousePos.y - 250}px)`,
            transitionDelay: '0.1s',
            width: '500px', height: '500px'
          }}
        ></div>

        {/* Small Floating Background Icons (50% smaller) */}
        <div className="absolute top-[15%] left-[8%] opacity-5 animate-float-bg">
           <span className="material-symbols-outlined text-[40px]">movie_edit</span>
        </div>
        <div className="absolute bottom-[20%] right-[10%] opacity-5 animate-float-bg" style={{ animationDelay: '1.5s' }}>
           <span className="material-symbols-outlined text-[30px]">polyline</span>
        </div>
        <div className="absolute top-[45%] right-[20%] opacity-5 animate-float-bg" style={{ animationDelay: '3s' }}>
           <span className="material-symbols-outlined text-[35px]">animation</span>
        </div>
        <div className="absolute bottom-[40%] left-[12%] opacity-5 animate-float-bg" style={{ animationDelay: '4.5s' }}>
           <span className="material-symbols-outlined text-[32px]">camera_video</span>
        </div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-40">
          <About />
        </section>

        <section id="experience" className="py-40">
          <Experience />
        </section>

        <section id="skills" className="py-40">
          <Skills />
        </section>

        <section id="proficiency" className="py-40">
          <SoftwareProficiency />
        </section>

        <section id="work" className="py-40">
          <WorkGrid />
        </section>

        <section id="contact" className="py-40">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;