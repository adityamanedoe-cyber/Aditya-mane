
import React from 'react';

export const About: React.FC = () => {
  const cvLink = "https://drive.google.com/drive/folders/1ChkJIu4mHz2RVk4z4UoHUvmKtXf0aiAd?usp=drive_link";

  return (
    <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
      {/* Left Column: Identity */}
      <div className="lg:col-span-5 space-y-10">
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
          
          <div className="relative flex flex-col items-center text-center">
            <div className="relative mb-10 transition-transform duration-700 group-hover:scale-105">
              <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-500 animate-spin opacity-40 blur-[4px]" style={{ animationDuration: '10s' }}></div>
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#050510] bg-[#0a0a1a]">
                {/* 
                   ARTIST OUTLINE ILLUSTRATION:
                   Minimalist line-art style illustration to represent an artistic identity.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=800&auto=format&fit=crop" 
                  alt="Minimalist Artist Outline" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute bottom-3 right-3 bg-[#02020a] rounded-full p-2 border border-white/10 shadow-lg">
                <span className="material-symbols-outlined text-blue-500 text-xl font-variation-fill">palette</span>
              </div>
            </div>

            <h2 className="text-4xl font-black text-white mb-2 section-title">Aditya M. Mane</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">
              Motion Designer & Video Editor
            </p>
            
            <p className="text-white/50 text-lg leading-[1.7] mb-10 font-light">
              I am a professional Motion Graphics Designer with over <span className="text-white font-semibold">5 years of industry experience</span>. 
              My expertise lies in crafting high-impact visual stories through precise animation and narrative video editing. 
              I thrive on blending creativity with technical efficiency, leveraging AI workflows to push visual boundaries.
            </p>

            <div className="w-full h-px bg-white/5 mb-10"></div>

            <div className="w-full text-left space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em]">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['Marathi', 'Hindi', 'English'].map(lang => (
                    <span key={lang} className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-white/80 transition-all hover:bg-white/10 hover:scale-105 active:scale-95">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em]">Hobbies</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-[11px] text-blue-300 font-bold transition-all hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined text-sm">movie_filter</span> Filmmaking
                  </span>
                  <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-600/10 border border-fuchsia-600/20 text-[11px] text-fuchsia-300 font-bold transition-all hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined text-sm">camera</span> Photography
                  </span>
                  <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-[11px] text-orange-300 font-bold transition-all hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined text-sm">motorcycle</span> Riding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Education Timeline */}
      <div className="lg:col-span-7 space-y-16">
        <div className="flex items-center gap-6">
          <div className="group w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10 shadow-xl transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-3xl animate-wiggle">school</span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-white section-title">Education Journey</h3>
            <p className="text-white/30 text-sm">Academic pillars of my career</p>
          </div>
        </div>

        <div className="relative pl-12 space-y-14">
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-600 via-fuchsia-600 to-transparent opacity-20"></div>

          {[
            { 
              year: '2021 - 2024', 
              degree: 'Bachelor of Business Administration', 
              inst: 'M.U. College of Commerce, Pimpri', 
              color: 'blue',
              desc: 'Gained strategic business insights that now inform my corporate design philosophy.' 
            },
            { 
              year: '2019 - 2021', 
              degree: 'Higher Secondary Certificate', 
              inst: 'Jai Hind Junior College', 
              color: 'fuchsia',
              desc: 'Initial academic phase focusing on commerce and management fundamentals.' 
            }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className={`absolute left-[-46px] top-8 w-4 h-4 rounded-full bg-[#050510] border-2 z-10 ${item.color === 'blue' ? 'border-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'border-fuchsia-600 shadow-[0_0_15px_rgba(217,70,239,0.6)]'}`}></div>
              <div className={`glass-card rounded-[2.5rem] p-10 border-l-4 transition-all hover:-translate-y-2 hover:scale-[1.02] active:scale-95 ${item.color === 'blue' ? 'border-l-blue-600/40' : 'border-l-fuchsia-600/40'}`}>
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.color === 'blue' ? 'bg-blue-600/10 text-blue-400' : 'bg-fuchsia-600/10 text-fuchsia-400'}`}>
                    {item.year}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{item.degree}</h4>
                <div className="flex items-center gap-4 text-white/40 text-sm mb-6">
                  <span className="material-symbols-outlined text-lg">apartment</span>
                  <span className="font-medium">{item.inst}</span>
                </div>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a 
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black transition-all ml-12 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined">description</span>
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};
