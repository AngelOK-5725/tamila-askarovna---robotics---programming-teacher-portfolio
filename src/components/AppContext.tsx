import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Theme } from '../types';
import { translations, TranslationSet } from '../translations';

interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: TranslationSet;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Read initial states from localStorage if available
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('tamila_portfolio_lang');
    if (saved === 'ru' || saved === 'kk') return saved;
    // Check browser language
    const navLang = navigator.language.split('-')[0];
    return navLang === 'kk' ? 'kk' : 'ru';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('tamila_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tamila_portfolio_lang', lang);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setThemeState(next);
    localStorage.setItem('tamila_portfolio_theme', next);
  };

  // Sync theme class to html/body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
  }, [theme]);

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
