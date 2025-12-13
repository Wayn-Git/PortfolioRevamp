import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, MapPin, Clock, Send, CheckCircle, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

/* --- Helper Components --- */

const ContactCard = ({ icon: Icon, label, value, action, delay }) => {
  return (
    <div 
      onClick={action}
      className={`
        group relative p-6 rounded-2xl cursor-pointer overflow-hidden
        bg-white dark:bg-gray-900/50 backdrop-blur-md
        border border-gray-100 dark:border-gray-800
        transition-all duration-500 ease-out
        hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative z-10 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
          <Icon size={24} />
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {label}
          </h4>
          <p className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
            {value}
          </p>
        </div>
      </div>
      
      {/* Background Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate network delay for effect
    setTimeout(() => {
       setIsLoading(false);
       setIsSubmitted(true);
       setFormData({ name: '', email: '', subject: '', message: '' });
       setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-900/50 rounded-3xl border border-emerald-500/30 shadow-2xl animate-fade-in-up">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 animate-bounce-in">
          <CheckCircle size={40} className="text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Transmission Received</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-sm">
          Thank you for reaching out. Your message has been logged and I will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-2xl"
    >
      {/* "Scanning" Border Effect */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-emerald-500/0 hover:border-emerald-500/20 transition-colors duration-500" />

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
        <Sparkles size={20} className="text-emerald-500" /> Send Transmission
      </h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="group">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="group">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            placeholder="Project Inquiry"
          />
        </div>

        <div className="group">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
            placeholder="How can I help you?"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 
            px-8 py-4 rounded-xl font-bold text-lg tracking-wide
            hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-300 group
            disabled:opacity-70 disabled:cursor-not-allowed
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Transmitting...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Initiate Uplink <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const openEmail = () => window.location.href = `mailto:${personalInfo.email}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* --- ATMOSPHERE --- */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_top,white_30%,transparent_80%)] pointer-events-none opacity-40" />
      
      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vh] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] rounded-full animate-float-medium" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-30">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="h-[1px] w-8 bg-emerald-500" />
             <span className="text-sm font-mono font-medium tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Communication Link</span>
             <div className="h-[1px] w-8 bg-emerald-500" />
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight ${mounted ? 'reveal-text' : 'reveal-text-hidden'}`}>
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Collaborate?</span>
          </h2>
          
          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Whether you need a custom ML model, data pipeline, or strategic AI consulting, I'm here to turn complex data into clear results.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 px-2">Direct Channels</h3>
            
            <div className="grid gap-4">
              <ContactCard 
                icon={Mail} 
                label="Email Frequency" 
                value={personalInfo.email} 
                action={openEmail} 
                delay={0}
              />
              <ContactCard 
                icon={Github} 
                label="Code Repository" 
                value="github.com/Wayn-Git" 
                action={() => openLink(personalInfo.github)} 
                delay={100}
              />
              <ContactCard 
                icon={Linkedin} 
                label="Professional Network" 
                value="linkedin.com/in/bilal-rukundi" 
                action={() => openLink(personalInfo.linkedin)} 
                delay={200}
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
              </div>
              <div>
                <p className="font-bold text-emerald-700 dark:text-emerald-400">System Status: Online</p>
                <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">Available for freelance & contract work</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:mt-0">
            <ContactForm />
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center border-t border-gray-100 dark:border-gray-800 pt-12">
           <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
             © 2025 Bilal Rukundi. All systems nominal.
           </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;