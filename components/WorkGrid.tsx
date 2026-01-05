
import React, { useState, useEffect } from 'react';

export const WorkGrid: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [filter]);

  const works = [
    { id: 'VxvDTSM-mdo', title: 'Project One', cat: 'Motion' },
    { id: 'VkAvmbKvbL8', title: 'Project Two', cat: 'Editing' },
    { id: 'EppLuwDkkow', title: 'Project Three', cat: 'VFX' },
    { id: 'ayDLIK1SLfE', title: 'Project Four', cat: 'Commercial' },
    { id: 'R9ws6EY08Ls', title: 'Project Five', cat: 'Motion' },
    { id: 'E_hU90Ww8qA', title: 'Project Six', cat: 'VFX' },
  ];

  const filteredWorks = works.filter(w => filter === 'All' || w.cat === filter);

  return (
    <div className="max-w-[1280px] mx-auto px-6">
      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-all z-[110]">
            <span className="material-symbols-outlined text-3xl md:text-5xl">close</span>
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-xl md:rounded-[2rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,1)] border border-white/10 bg-black" onClick={e => e.stopPropagation()}>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Work Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
        <div className="space-y-4 md:space-y-6 w-full">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 md:w-10 bg-blue-600"></div>
            <span className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white section-title">Selected Works</h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl font-light leading-relaxed">
            A high-energy curation of motion graphics, cinematic editing, and visual storytelling projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {['All', 'Motion', 'Editing', 'VFX'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-1 md:flex-none px-4 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold transition-all border ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredWorks.map((work, idx) => (
          <div
            key={`${work.id}-${filter}`}
            onClick={() => setActiveVideo(work.id)}
            className={`group relative glass-card rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-video cursor-pointer transition-all duration-700 hover:scale-[1.02] md:hover:scale-105 active:scale-95 ${isAnimating ? 'work-item-anim' : ''}`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <img 
              src={`https://img.youtube.com/vi/${work.id}/mqdefault.jpg`} 
              alt={work.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02020a] via-[#02020a]/30 to-transparent opacity-80"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">play_circle</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <span className="px-2 py-0.5 rounded-md bg-blue-600/30 border border-blue-600/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-blue-300 mb-2 inline-block">
                {work.cat}
              </span>
              <h3 className="text-lg md:text-2xl font-black text-white leading-tight">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-28 flex justify-center">
        <a 
          href="https://www.behance.net/adityamane17" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-4 md:gap-6 px-8 md:px-14 py-4 md:py-6 w-full sm:w-auto rounded-full overflow-hidden transition-all border border-white/20 bg-blue-600"
        >
          <div className="relative z-10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Behance_logo.svg" 
              alt="Behance" 
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <span className="text-sm md:text-xl font-black text-white relative z-10">Portfolio on Behance</span>
          <span className="material-symbols-outlined text-white relative z-10 text-lg md:text-2xl">arrow_outward</span>
        </a>
      </div>
    </div>
  );
};
