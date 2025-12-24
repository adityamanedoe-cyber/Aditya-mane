import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Available for work
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] text-white tracking-tighter capitalize">
              Let's bring your<br/>vision to life.
            </h2>
            <p className="text-xl text-white/40 max-w-md font-light leading-relaxed">
              Looking for premium motion graphics or video editing? I'm ready to collaborate. Reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            <a href="tel:+918805980835" className="group flex items-center gap-6 p-6 rounded-[2rem] glass-card hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Phone</p>
                <p className="text-lg font-bold text-white">+91 8805980835 / 9209012669</p>
              </div>
            </a>
            <a href="mailto:adityammane2003@gmail.com" className="group flex items-center gap-6 p-6 rounded-[2rem] glass-card hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
              <div className="w-14 h-14 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-500 group-hover:bg-fuchsia-600 group-hover:text-white transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Email</p>
                <p className="text-lg font-bold text-white">adityammane2003@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/aditya-mane-540b4b18b/" target="_blank" className="group flex items-center gap-6 p-6 rounded-[2rem] bg-blue-600/5 hover:bg-blue-600/10 border border-blue-600/20 hover:scale-105 active:scale-95 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#0077b5] flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-xl">LinkedIn</p>
                <p className="text-white/40 text-sm">View professional profile</p>
              </div>
              <span className="material-symbols-outlined text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="glass-card rounded-[3rem] p-10 lg:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[60px] pointer-events-none"></div>
          <form className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-white/40 tracking-widest ml-4">Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-black/40 border-white/5 rounded-full px-8 py-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-white/40 tracking-widest ml-4">Email</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-black/40 border-white/5 rounded-full px-8 py-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-white/40 tracking-widest ml-4">Subject</label>
              <input type="text" placeholder="Project inquiry..." className="w-full bg-black/40 border-white/5 rounded-full px-8 py-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-white/40 tracking-widest ml-4">Message</label>
              <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-black/40 border-white/5 rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white outline-none resize-none"></textarea>
            </div>
            <button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-full shadow-[0_0_30px_rgba(19,55,236,0.4)] transition-all flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-95">
              <span>Send Message</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};