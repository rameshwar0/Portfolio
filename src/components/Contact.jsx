import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { playHoverSound, playClickSound, playQuestUnlockSound } from '../utils/soundEffects';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setSending(true);
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      playQuestUnlockSound();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const cards = [
    { label: 'EMAIL ADDRESS', val: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    { label: 'PHONE NUMBER', val: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
    { label: 'LOCATION', val: personalInfo.location, href: null, icon: MapPin },
    { label: 'LINKEDIN PROFILE', val: 'VIEW LINKEDIN', href: personalInfo.linkedin, icon: LinkedinIcon },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-code">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's <span className="gradient-text-studio">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-heading font-bold text-white tracking-wider mb-4 text-left">
              Contact Information
            </h3>
            {cards.map((c, idx) => {
              const IconComponent = c.icon;
              const Wrapper = c.href ? 'a' : 'div';
              const wrapperProps = c.href
                ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Tilt
                  key={idx}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={800}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  scale={1.02}
                  className="studio-card p-4 text-left"
                >
                  <Wrapper
                    {...wrapperProps}
                    onMouseEnter={playHoverSound}
                    className="flex items-center gap-4 w-full"
                  >
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div className="text-[11px] font-code text-cyan-400 font-semibold uppercase tracking-wider mb-0.5">
                        {c.label}
                      </div>
                      <div className="text-sm font-heading font-bold text-white">{c.val}</div>
                    </div>
                  </Wrapper>
                </Tilt>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="studio-card p-8 text-left"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                  <CheckCircle size={56} className="text-cyan-400 animate-bounce" />
                  <h4 className="text-xl font-heading font-bold text-white">Message Sent!</h4>
                  <p className="text-sm text-slate-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Game Development / AR/VR Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    onMouseEnter={playHoverSound}
                    className="w-full studio-btn-primary justify-center text-sm py-4 disabled:opacity-50"
                  >
                    <Send size={18} />
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
