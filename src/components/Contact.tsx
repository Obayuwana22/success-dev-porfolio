
import React, { useState } from 'react';
import type { ContactFormState } from '../types/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="pt-40 pb-20 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-20 mb-40">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-none">
              START <br/> A <span className="text-indigo-600">THREAD.</span>
            </h2>
            <p className="text-xl text-gray-500 mb-16 max-w-md leading-relaxed">
              I'm always interested in hearing about new projects, technical challenges, or collaboration opportunities.
            </p>
            
            <div className="space-y-12">
              <div>
                <span className="mono text-[10px] text-gray-600 block mb-4 uppercase tracking-[0.2em]">Local Time</span>
                <span className="text-2xl font-light">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT</span>
              </div>
              
              <div className="flex flex-wrap gap-12">
                <a href="#" className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest">LinkedIn</a>
                <a href="#" className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest">GitHub</a>
                <a href="#" className="mono text-sm hover:text-indigo-500 transition-colors uppercase tracking-widest">Read.cv</a>
              </div>
            </div>
          </div>
          
          <div className="p-12 border border-white/5 bg-white/[0.01] rounded-2xl relative">
            <div className="mono text-[10px] text-indigo-500/50 absolute top-4 right-8 uppercase">0x034 // Form_Service</div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="IDENTITY"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider placeholder:text-gray-800"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="COMMUNICATION@ENDPOINT.COM"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider placeholder:text-gray-800"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="mono text-[10px] text-gray-600 block mb-2 uppercase tracking-widest transition-colors group-focus-within:text-indigo-500">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="TRANSMIT_DATA..."
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none transition-all focus:border-indigo-600 text-sm tracking-wider resize-none placeholder:text-gray-800"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50"
              >
                {status === 'idle' && 'Push to Main'}
                {status === 'sending' && 'Broadcasting...'}
                {status === 'success' && 'Transmission Success'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mono text-[10px] text-gray-600">
            ENGINEERED_BY_ALEX_2024 // ALL_RIGHTS_RESERVED
          </div>
          <div className="mono text-[10px] text-gray-600">
            BUILT_WITH_REACT_NEXT_TAILWIND
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-indigo-900/10 blur-[150px] rounded-full"></div>
    </footer>
  );
};

export default Contact;
