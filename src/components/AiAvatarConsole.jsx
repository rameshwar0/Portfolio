import React, { useState, useEffect } from 'react';
import { X, Mic, Volume2, VolumeX, Sparkles, Send, Bot, Play, Pause, RefreshCw } from 'lucide-react';
import devAvatarImg from '../assets/developer_avatar.png';
import { playClickSound, playQuestUnlockSound } from '../utils/soundEffects';
import { personalInfo, aboutData, skillsData, experienceData, projectsData } from '../data/mock';

const promptChips = [
  { label: '🚀 Published Games', query: 'What games have you published on Google Play & App Store?' },
  { label: '🥽 VisionOS & AR/VR', query: 'Tell me about your Apple VisionOS & Oculus VR experience.' },
  { label: '💻 Unity & C# Stack', query: 'What is your core tech stack in Unity 3D & C#?' },
  { label: '💼 Hiring Availability', query: 'Are you available for full-time or contract roles?' },
];

const AiAvatarConsole = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am Rameshwar's AI Avatar Assistant. Ask me anything about his 3+ years of Game Development, Published Titles, Unity 3D, C#, or Apple VisionOS AR/VR experience!",
    },
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase();
    if (q.includes('game') || q.includes('published') || q.includes('title')) {
      return `Rameshwar has published 8+ game titles on Android and iOS including hyper-casual arcade games, 3D endless runners, racing titles, and AR/VR experiences. Notable games include Cyber Dash 3D, VR Sniper Command, and Spatial Chess!`;
    }
    if (q.includes('vision') || q.includes('ar') || q.includes('vr') || q.includes('spatial')) {
      return `Rameshwar has extensive experience in Extended Reality, including Apple VisionOS spatial computing, Meta Oculus Quest VR mechanics, gesture tracking, and AR face mesh controls using Unity & Xcode.`;
    }
    if (q.includes('stack') || q.includes('unity') || q.includes('c#') || q.includes('tech')) {
      return `Rameshwar's primary stack includes Unity 3D/2D Engine (95%), C# Object-Oriented Architecture (94%), Unreal Engine Blueprints (82%), WebSockets realtime multiplayer, Firebase, and native iOS/Android publishing tools.`;
    }
    if (q.includes('hire') || q.includes('available') || q.includes('role') || q.includes('work')) {
      return `Yes! Rameshwar is actively open for Full-Time Senior Game Developer roles, Contract AR/VR projects, and Lead Game Programmer opportunities worldwide. You can contact him directly via email or LinkedIn!`;
    }
    return `Rameshwar Ghanekar is a Senior Game Developer & AR/VR Specialist with 3+ years of experience crafting immersive 3D games and spatial experiences using Unity, Unreal Engine, and C#.`;
  };

  const handleSend = (userText) => {
    const textToSend = userText || query;
    if (!textToSend.trim()) return;

    playClickSound();
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setQuery('');

    setTimeout(() => {
      const answer = generateAnswer(textToSend);
      setMessages([...newMessages, { sender: 'ai', text: answer }]);
      playQuestUnlockSound();
      speakText(answer);
    }, 600);
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bento-card w-full max-w-2xl p-6 rounded-3xl border-cyan-500/40 relative space-y-4 shadow-[0_0_60px_rgba(0,240,255,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <img src={devAvatarImg} alt="AI Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-heading font-extrabold text-white tracking-wider">
                  RAMESHWAR AI AVATAR
                </h3>
                <span className="bento-badge py-0.5 px-2 text-[10px]">
                  <Sparkles size={12} className="text-amber-400" /> LIVE VOICE
                </span>
              </div>
              <p className="text-[11px] font-code text-cyan-400">@rameshwar.ghanekar05 // INTERACTIVE VOICE</p>
            </div>
          </div>

          <button
            onClick={() => {
              handleStopSpeech();
              playClickSound();
              onClose();
            }}
            className="p-2.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Voice Visualizer Bar */}
        <div className="p-3 rounded-2xl bg-black/60 border border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-code text-cyan-400 font-semibold">
            {isSpeaking ? (
              <>
                <Volume2 size={18} className="text-cyan-400 animate-pulse" />
                <span>SPEAKING RESPONSE...</span>
              </>
            ) : (
              <>
                <Bot size={18} className="text-slate-400" />
                <span>READY FOR QUERY</span>
              </>
            )}
          </div>

          {/* Animated Waveform */}
          <div className="flex items-center gap-1 h-5">
            {[12, 20, 15, 24, 18, 10, 22].map((h, idx) => (
              <span
                key={idx}
                className={`w-1 rounded-full bg-cyan-400 transition-all duration-300 ${
                  isSpeaking ? 'animate-pulse' : 'opacity-40'
                }`}
                style={{ height: isSpeaking ? `${h}px` : '6px' }}
              />
            ))}
          </div>

          {isSpeaking && (
            <button
              onClick={handleStopSpeech}
              className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-code font-bold hover:bg-red-500/30"
            >
              STOP VOICE
            </button>
          )}
        </div>

        {/* Chat Messages Body */}
        <div className="h-64 overflow-y-auto space-y-3 p-3 rounded-2xl bg-black/40 border border-white/5 font-code text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full overflow-hidden border border-cyan-400 shrink-0">
                  <img src={devAvatarImg} alt="AI" className="w-full h-full object-cover" />
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-200'
                    : 'bg-white/5 border border-white/10 text-slate-200'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompt Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {promptChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip.query)}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 text-[11px] font-code text-slate-300 hover:text-cyan-400 transition-all"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            placeholder="Ask Rameshwar AI anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-black/60 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-code"
          />
          <button
            onClick={() => handleSend()}
            className="figma-btn-primary py-3 px-5 text-xs rounded-2xl"
          >
            <Send size={16} />
            <span>ASK</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAvatarConsole;
