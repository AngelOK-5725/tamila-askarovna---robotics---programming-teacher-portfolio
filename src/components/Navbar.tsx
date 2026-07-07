import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './AppContext';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for header glassmorphism and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor visible section using Intersection Observer
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'courses', 'methodology', 'achievements', 'portfolio', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in middle third of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'courses', label: t.nav.courses },
    { id: 'methodology', label: t.nav.methodology },
    { id: 'achievements', label: t.nav.achievements },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-100" 
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer"
          >
            <span className="w-10 h-10 bg-brand-blue dark:bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
              TA
            </span>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500 font-mono">portfolio</span>
              <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{language === 'ru' ? 'Тамила Аскаровна' : 'Тамила Асқарқызы'}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer relative ${
                  activeSection === item.id
                    ? 'text-brand-blue dark:text-cyan-400 font-semibold'
                    : 'text-slate-500 hover:text-brand-blue dark:hover:text-cyan-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-50/70 dark:bg-slate-800 rounded-full -z-10 border border-slate-100 dark:border-slate-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Controls: Theme & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center bg-white dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'ru'
                    ? 'bg-brand-blue dark:bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('kk')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'kk'
                    ? 'bg-brand-blue dark:bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                KK
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700/50 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Quick Language switch on mobile */}
            <button
              onClick={() => setLanguage(language === 'ru' ? 'kk' : 'ru')}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-300 cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Quick Theme switch on mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden p-6 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
