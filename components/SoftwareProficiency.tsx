
import React, { useEffect, useState } from 'react';

export const SoftwareProficiency: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    const el = document.getElementById('proficiency-container');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tools = [
    { 
      name: 'After Effects', 
      level: 'Expert', 
      percent: 95, 
      color: 'from-blue-600 via-fuchsia-600 to-orange-500', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg'
    },
    { 
      name: 'Premiere Pro', 
      level: 'Advanced', 
      percent: 88, 
      color: 'from-blue-600 to-cyan-500', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg'
    },
    { 
      name: 'Illustrator', 
      level: 'Intermediate', 
      percent: 75, 
      color: 'from-orange-500 to-orange-700', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
    },
    { 
      name: 'Photoshop', 
      level: 'Intermediate', 
      percent: 70, 
      color: 'from-blue-500 to-blue-800', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg'
    },
    { 
      name: 'Freepik AI', 
      level: 'Proficient', 
      percent: 85, 
      color: 'from-[#2e63c2] to-[#1e4b91]', 
      icon: 'F' // Use character instead of URL
    }
  ];

  return (
    <div id="proficiency-container" className="max-w-[1100px] mx-auto px-6">
      <div className="text-center mb-24 space-y-4">
        <h2 className="text-5xl md:text-7xl font-black text-white section-title">Software Proficiency</h2>
        <p className="text-white/30 text-lg font-light">My primary toolkit for high-fidelity production.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {tools.map((tool, i) => (
          <div key={i} className="group glass-card rounded-[3rem] p-10 border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 cursor-default">
            {/* CARD-WIDE Hover Sweep Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] translate-x-[-200%] sweep-effect pointer-events-none z-20"></div>

            <div className="w-24 h-24 rounded-2xl bg-black/40 border border-white/10 p-4 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-700 shadow-2xl relative z-10 overflow-hidden">
              {tool.name === 'Freepik AI' ? (
                <span className="text-6xl font-black text-white select-none name-glow">F</span>
              ) : (
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://www.svgrepo.com/show/443198/app-adobe.svg';
                  }}
                />
              )}
            </div>

            <div className="flex-1 w-full space-y-6 relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1 leading-tight">{tool.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{tool.level}</span>
                </div>
                <span className="text-3xl font-black text-white/10 group-hover:text-blue-500 transition-colors duration-500">{tool.percent}%</span>
              </div>
              
              <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className={`h-full bg-gradient-to-r ${tool.color} transition-all duration-[1.8s] cubic-bezier(0.19, 1, 0.22, 1)`}
                  style={{ width: inView ? `${tool.percent}%` : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
