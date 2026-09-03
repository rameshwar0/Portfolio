import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    tagline: 'Cyber Neon & Blue',
    particleColor: '#00fff5',
    accentColor: '#00fff5',
    previewGradient: 'from-cyan-400 to-blue-600',
    dotColor: '#00fff5',
  },
  {
    id: 'obsidian-gold',
    name: 'Midnight Gold',
    tagline: 'Obsidian & Gold Amber',
    particleColor: '#f59e0b',
    accentColor: '#f59e0b',
    previewGradient: 'from-amber-400 to-purple-600',
    dotColor: '#f59e0b',
  },
  {
    id: 'unreal-flame',
    name: 'Unreal Tech',
    tagline: 'Industrial Ember & Carbon',
    particleColor: '#ff5500',
    accentColor: '#ff5500',
    previewGradient: 'from-orange-500 to-amber-300',
    dotColor: '#ff5500',
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    tagline: 'Neon Pink & Sunset Void',
    particleColor: '#ff2a85',
    accentColor: '#ff2a85',
    previewGradient: 'from-pink-500 to-purple-600',
    dotColor: '#ff2a85',
  },
];

const ThemeContext = createContext({
  currentTheme: 'cyberpunk',
  setTheme: () => {},
  themeConfig: themes[0],
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'cyberpunk';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const activeConfig = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: setCurrentTheme,
        themeConfig: activeConfig,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
