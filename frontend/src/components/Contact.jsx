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
      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-10 text-center animate-bounce-in">
        <div className="mb-6">
          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto">
            <CheckCircle size={48} className="text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form 
      id="contact-form"
      onSubmit={handleSubmit} 
      className={`bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-10 space-y-8 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center space-x-3">
          <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Send Message</h3>
      
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500"
          placeholder="Project collaboration, job opportunity, etc."
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500"
          placeholder="Tell me about your project or how we can work together..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium flex items-center justify-center space-x-3 hover:shadow-2xl hover:scale-105 group ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
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
<section id="contact" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"> {/* Added overflow-hidden */}
        
        {/* Section Header */}
       <div className="text-center mb-16 px-4"> {/* Added px-4 */}
          <div className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-600 mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={20} className="text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Looking for a machine learning developer? 
            I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

             <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 px-4"> {/* Added px-4, reduced gap on mobile */}
          
          {/* Contact Information */}
                 <div className="space-y-8 w-full max-w-lg mx-auto">
            
            {/* Contact Details */}
                       <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-600 max-w-full sm:max-w-md mx-auto">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Get in Touch</h3>
              
                          <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, action: openEmail },
                  { icon: MapPin, label: 'Location', value: 'Available for remote work worldwide', action: null },
                  { icon: Clock, label: 'Response Time', value: 'Usually within 24 hours', action: null }
                ].map(({ icon: Icon, label, value, action }) => (
                  <div key={label} className="flex items-center space-x-6 group">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600">
                      <Icon size={28} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 text-lg">{label}</p>
                      {action ? (
                        <button 
                          onClick={action}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                        >
                          {value}
                        </button>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-600 max-w-full sm:max-w-md mx-auto">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Github, label: 'GitHub', action: () => openLink(personalInfo.github) },
                  { icon: Linkedin, label: 'LinkedIn', action: () => openLink(personalInfo.linkedin) }
                ].map(({ icon: Icon, label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="flex items-center space-x-4 bg-white dark:bg-gray-800 px-6 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-lg hover:scale-105 group"
                  >
                    <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        <div className="w-full max-w-lg mx-auto"> {/* Added width constraints */}
          <ContactForm />
        </div>
      </div>

        {/* Call to Action */}
  <div className="text-center mt-20 px-4"> {/* Added px-4 */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-gray-100 dark:text-gray-900 rounded-3xl p-6 sm:p-16 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-3xl mx-auto"> {/* Adjusted max-width */}
            <h3 className="text-4xl font-semibold mb-6 text-gray-100 dark:text-gray-900">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 dark:text-gray-600 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you need a custom ML model, data analysis, or help with your AI strategy, 
              I'm here to help turn your vision into reality.
            </p>
            <button
              onClick={openEmail}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 hover:shadow-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;