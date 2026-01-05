
import React from 'react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Senior Executive – Corporate Design',
      company: 'Döhler India Pvt. Ltd.',
      period: 'August 2025 – Present',
      location: 'Pune',
      description: 'Orchestrating comprehensive video editing and high-end motion design for global corporate communications. Developing motion branding frameworks for international stakeholder engagement.',
      isCurrent: true,
      color: '#3b82f6'
    },
    {
      role: 'Motion Graphics Designer',
      company: 'Armoks Media Pvt. Ltd.',
      period: 'Oct 2023 – Present',
      location: 'Baner, Pune',
      description: 'Specializing in cinematic callouts, listicles, and high-energy motion assets for promotional digital campaigns.',
      color: '#d946ef'
    },
    {
      role: 'Video Editor & 2D Animator',
      company: 'Sensebite Design Studio',
      period: 'Jul 2022 – Oct 2023',
      location: 'Chinchwad, Pune',
      description: 'End-to-end management of video production cycles, from narrative storyboard animation to final polish for B2B clients.',
      color: '#f97316'
    },
    {
      role: 'Video Editor',
      company: 'M.K Studio Pune',
      period: 'Dec 2020 – Jun 2022',
      location: 'Wakad, Pune',
      description: 'Lead video editor for regional cinematic projects and corporate documentaries. Expert in narrative flow and pacing.',
      color: '#3b82f6'
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="text-center mb-16 md:mb-28">
        <h2 className="text-4xl md:text-7xl font-black text-white section-title mb-4 md:mb-6">Experience</h2>
        <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Central Vertical Line - Moves to left on mobile */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-fuchsia-600 to-transparent opacity-20 md:-translate-x-1/2"></div>

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                <div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#02020a] border-2 flex items-center justify-center relative ${exp.isCurrent ? 'radar-pulse shadow-[0_0_20px_rgba(59,130,246,0.4)]' : ''}`}
                  style={{ borderColor: exp.color }}
                >
                  <span className="material-symbols-outlined text-base md:text-xl" style={{ color: exp.color }}>
                    {exp.isCurrent ? 'auto_awesome' : 'work_history'}
                  </span>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>

              {/* Card Container */}
              <div className="pl-14 md:pl-0 md:w-1/2 relative group w-full">
                <div className="glass-card rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border-white/5 group-hover:border-white/20 transition-all duration-500 relative z-10">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 block leading-none">{exp.period}</span>
                  
                  <h3 className="text-xl md:text-3xl font-black text-white mb-1 md:mb-2 leading-tight">
                    {exp.role}
                  </h3>
                  
                  <p className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: exp.color }}>{exp.company}</p>
                  
                  <div className="flex items-center gap-2 md:gap-3 text-white/30 text-[9px] md:text-[11px] font-bold uppercase tracking-widest mb-6 md:mb-8">
                    <span className="material-symbols-outlined text-sm md:text-lg">place</span>
                    {exp.location}
                  </div>
                  
                  <p className="text-white/40 text-sm md:text-base leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
