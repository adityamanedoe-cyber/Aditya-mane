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
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-all z-[110]">
            <span className="material-symbols-outlined text-5xl">close</span>
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,1)] border border-white/10" onClick={e => e.stopPropagation()}>
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

      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-blue-600"></div>
            <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white section-title">Selected Works</h2>
          <p className="text-white/40 text-lg max-w-xl font-light leading-relaxed">
            A high-energy curation of motion graphics, cinematic editing, and visual storytelling projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Motion', 'Editing', 'VFX'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold transition-all border hover:scale-105 active:scale-95 ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, idx) => (
          <div
            key={`${work.id}-${filter}`}
            onClick={() => setActiveVideo(work.id)}
            className={`group relative glass-card rounded-[2.5rem] overflow-hidden aspect-video cursor-pointer transition-all duration-700 hover:-translate-y-3 hover:scale-105 active:scale-95 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${isAnimating ? 'work-item-anim' : ''}`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <img 
              src={`https://img.youtube.com/vi/${work.id}/maxresdefault.jpg`} 
              alt={work.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02020a] via-[#02020a]/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="px-3 py-1 rounded-md bg-blue-600/30 border border-blue-600/40 text-[9px] font-black uppercase tracking-widest text-blue-300 mb-3 inline-block">
                {work.cat}
              </span>
              <h3 className="text-2xl font-black text-white leading-tight group-hover:text-glow-white">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-28 flex justify-center">
        <a 
          href="https://www.behance.net/adityamane17" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-6 px-14 py-6 rounded-full overflow-hidden transition-all hover:scale-[1.05] active:scale-95 border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.3)]"
        >
          {/* Behance Button Glow - Matching Experience Card Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-500 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-700"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Behance Logo Image - Official Bē Logo */}
          <div className="relative z-10 w-10 h-10 overflow-hidden flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Behance_logo.svg" 
              alt="Behance" 
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <span className="text-xl font-black text-white relative z-10">View Portfolio on Behance</span>
          <span className="material-symbols-outlined text-white relative z-10 group-hover:translate-x-1 transition-transform">arrow_outward</span>
        </a>
      </div>
    </div>
  );
};