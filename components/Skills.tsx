import React from 'react';

export const Skills: React.FC = () => {
  const softSkills = [
    { title: 'Creative Leadership', icon: 'groups', color: 'blue', desc: 'Efficiently lead and manage motion design teams, fostering innovation.' },
    { title: 'Detail-Oriented', icon: 'visibility', color: 'fuchsia', desc: 'Strong eye for clean, precise animations with pixel-perfect attention.' },
    { title: 'Problem Solver', icon: 'build_circle', color: 'orange', desc: 'Quick at resolving design issues, optimizing pipelines for efficiency.' }
  ];

  const specialisations = [
    'Motion Graphics', 'Social Media Videos', 'Brand Films', 'Explainers', 'AI-based Visuals', 'Video Editing', 'Transitions & VFX'
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 space-y-24">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest leading-none">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          Expertise
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">Skills & Capabilities</h2>
        <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">Combining technical precision with creative direction.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {softSkills.map(skill => (
          <div key={skill.title} className="glass-card rounded-[2.5rem] p-10 border-t border-white/5 hover:border-white/10 transition-all group overflow-hidden hover:scale-105 active:scale-95">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform
               ${skill.color === 'blue' ? 'text-blue-500' : skill.color === 'fuchsia' ? 'text-fuchsia-500' : 'text-orange-500'}
            `}>
              <span className="material-symbols-outlined text-3xl animate-wiggle">{skill.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{skill.title}</h3>
            <p className="text-white/40 text-base leading-relaxed font-light">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <h3 className="text-lg font-black uppercase text-white/30 tracking-[0.2em] border-l-4 border-blue-600 pl-4 leading-none">Curated Specialisations</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {specialisations.map(spec => (
            <div key={spec} className="glass-card rounded-full px-8 py-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-default border-white/5 hover:border-white/20 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] leading-none shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_#3b82f6]"></span>
              <span className="text-white font-bold">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};