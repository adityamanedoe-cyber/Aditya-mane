
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:adityammane2003@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Available for work
            </div>
            <h2 className="text-4xl md:text-7xl font-black leading-[1.1] md:leading-[0.9] text-white tracking-tighter capitalize">
              Let's bring your<br/>vision to life.
            </h2>
            <p className="text-base md:text-xl text-white/40 max-w-md font-light leading-relaxed">
              Looking for premium motion graphics or video editing? Reach out directly.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <a href="tel:+918805980835" className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] glass-card transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase text-white/30 tracking-widest mb-0.5 md:mb-1">Phone</p>
                <p className="text-sm md:text-lg font-bold text-white">+91 8805980835</p>
              </div>
            </a>
            <a href="mailto:adityammane2003@gmail.com" className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] glass-card transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-500">
                <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-[8px] md:text-[10px] font-black uppercase text-white/30 tracking-widest mb-0.5 md:mb-1">Email</p>
                <p className="text-sm md:text-lg font-bold text-white truncate">adityammane2003@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden mt-8 lg:mt-0">
          <form className="space-y-5 md:space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-4">Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required
                  className="w-full bg-black/40 border-white/5 rounded-full px-6 md:px-8 py-3.5 md:py-4 focus:ring-2 focus:ring-blue-600 text-white outline-none text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-4">Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required
                  className="w-full bg-black/40 border-white/5 rounded-full px-6 md:px-8 py-3.5 md:py-4 focus:ring-2 focus:ring-blue-600 text-white outline-none text-sm" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-4">Message</label>
              <textarea 
                rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required
                className="w-full bg-black/40 border-white/5 rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 py-4 md:py-6 focus:ring-2 focus:ring-blue-600 text-white outline-none resize-none text-sm"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full h-14 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black md:text-lg rounded-full shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
