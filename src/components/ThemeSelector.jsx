import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = ({ isMobile = false }) => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <Palette size={14} style={{ color: 'var(--accent)' }} />
          <span>Select Theme</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((t) => {
            const isSelected = currentTheme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-[var(--accent)] bg-[var(--badge-bg)] text-[var(--accent)]'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: t.dotColor }}
                  />
                  <span className="truncate">{t.name}</span>
                </div>
                {isSelected && <Check size={14} className="shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--badge-bg)] text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)]"
        style={{ color: 'var(--accent)' }}
        aria-label="Change Theme"
      >
        <Sparkles size={16} className="animate-pulse" />
        <span className="hidden lg:inline">{themes.find((t) => t.id === currentTheme)?.name}</span>
        <Palette size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-[var(--card-border-hover)] bg-[var(--bg-header)] backdrop-blur-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in duration-200">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Themes</span>
            <Sparkles size={12} className="text-gray-400" />
          </div>
          <div className="space-y-1">
            {themes.map((t) => {
              const isSelected = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-[var(--badge-bg)] text-[var(--accent)] font-bold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow"
                      style={{ backgroundColor: t.dotColor }}
                    />
                    <div className="text-left">
                      <div className="font-semibold leading-tight">{t.name}</div>
                      <div className="text-[10px] text-gray-400 font-normal">{t.tagline}</div>
                    </div>
                  </div>
                  {isSelected && <Check size={16} style={{ color: 'var(--accent)' }} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
