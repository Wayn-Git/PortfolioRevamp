import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Clock, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-form');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: personalInfo.email
      };

      // Using backend email service
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Email error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 text-center animate-bounce-in">
        <div className="mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto">
            <CheckCircle size={40} className="sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form 
      id="contact-form"
      onSubmit={handleSubmit} 
      className={`bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
          <AlertCircle size={18} className="sm:w-5 sm:h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">Send Message</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
          placeholder="Project collaboration, job opportunity, etc."
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
          placeholder="Tell me about your project or how we can work together..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
className={`w-full bg-slate-800 hover:bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium flex items-center justify-center space-x-2 sm:space-x-3 hover:shadow-2xl hover:scale-105 group text-sm sm:text-base focus:ring-2 focus:ring-slate-500 ${
  isLoading ? 'opacity-50 cursor-not-allowed' : ''
}`}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <div className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 sm:px-6 py-2 rounded-full border border-gray-200 dark:border-gray-600 mb-4 sm:mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={16} className="sm:w-5 sm:h-5 text-black dark:text-white animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Have a project in mind? Looking for a machine learning developer? 
            I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 px-4">
          
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 w-full max-w-lg mx-auto">
            
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-4 sm:p-6 lg:p-10 border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-xl transition-all duration-300 max-w-full sm:max-w-md mx-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">Get in Touch</h3>
              
              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, action: openEmail },
                  { icon: MapPin, label: 'Location', value: 'Available for remote work worldwide', action: null },
                  { icon: Clock, label: 'Response Time', value: 'Usually within 24 hours', action: null }
                ].map(({ icon: Icon, label, value, action }) => (
                  <div key={label} className="flex items-center space-x-4 sm:space-x-6 group">
                    <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600">
                      <Icon size={24} className="sm:w-7 sm:h-7 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 text-base sm:text-lg">{label}</p>
                      {action ? (
                        <button 
                          onClick={action}
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm sm:text-base"
                        >
                          {value}
                        </button>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-4 sm:p-6 lg:p-10 border border-gray-100 dark:border-gray-600 max-w-full sm:max-w-md mx-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">Connect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Github, label: 'GitHub', action: () => openLink(personalInfo.github) },
                  { icon: Linkedin, label: 'LinkedIn', action: () => openLink(personalInfo.linkedin) }
                ].map(({ icon: Icon, label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="flex items-center space-x-3 sm:space-x-4 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-lg hover:scale-105 group"
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                    <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>

<div className="text-center mt-16 sm:mt-20 lg:mt-24 px-4">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
    Ready to Start Your Next Project?
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
    Whether you need a custom ML model, data analysis, or help with your AI strategy, I'm here to help turn your vision into reality.
  </p>
  <button
    onClick={openEmail}
    className="bg-slate-800 hover:bg-slate-900 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-slate-500"
  >
    Start a Conversation
  </button>
</div>
      </div>
    </section>
  );
};

export default Contact;