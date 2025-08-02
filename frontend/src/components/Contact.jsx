import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real implementation, this would send to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
        <div className="mb-4">
          <CheckCircle size={48} className="text-green-600 mx-auto" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder="Project collaboration, job opportunity, etc."
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
          placeholder="Tell me about your project or how we can work together..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
      >
        <Send size={18} />
        <span>Send Message</span>
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Looking for a machine learning developer? 
            I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Mail size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <button 
                      onClick={openEmail}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {personalInfo.email}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <MapPin size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Clock size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect</h3>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => openLink(personalInfo.github)}
                  className="flex items-center space-x-3 bg-white px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 flex-1"
                >
                  <Github size={20} className="text-gray-700" />
                  <span className="font-medium text-gray-900">GitHub</span>
                </button>
                
                <button
                  onClick={() => openLink(personalInfo.linkedin)}
                  className="flex items-center space-x-3 bg-white px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 flex-1"
                >
                  <Linkedin size={20} className="text-gray-700" />
                  <span className="font-medium text-gray-900">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-semibold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a custom ML model, data analysis, or help with your AI strategy, 
              I'm here to help turn your vision into reality.
            </p>
            <button
              onClick={openEmail}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
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