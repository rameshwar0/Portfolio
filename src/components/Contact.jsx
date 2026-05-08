import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'View Profile',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss game development? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              const Wrapper = card.href ? 'a' : 'div';
              const wrapperProps = card.href
                ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover text-left"
                >
                  <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 flex-shrink-0">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-gray-200 font-medium">{card.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle size={52} className="text-cyan-400" />
                <p className="text-gray-300 text-lg">Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full glow-button flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
