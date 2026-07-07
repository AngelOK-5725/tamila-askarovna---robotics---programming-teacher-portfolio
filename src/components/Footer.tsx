import { useState, useEffect } from 'react';
import { ArrowUp, Award, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './AppContext';

export default function Footer() {
  const { t } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const checkScrollHeight = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => window.removeEventListener('scroll', checkScrollHeight);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-white dark:bg-brand-dark border-t border-slate-100 dark:border-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Brand logo/identity */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 bg-brand-blue text-white flex items-center justify-center font-display font-bold text-lg mb-3 shadow-md border border-brand-blue">
            TA
          </div>
          <span className="font-display font-bold text-slate-800 dark:text-white text-base">
            Тамила Аскаровна
          </span>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
            Robotics & Coding Teacher
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          {t.footer.tagline}
        </p>

        {/* Separator line */}
        <div className="w-16 h-[1px] bg-slate-100 dark:bg-slate-800/80 mx-auto mb-8" />

        {/* Legal/Rights text */}
        <div className="text-xs text-slate-400 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1.5 font-sans">
          <span>&copy; {currentYear} {t.hero.title}.</span>
          <span className="hidden sm:inline">|</span>
          <span>{t.footer.rights}</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center text-rose-500/80">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 mx-1 animate-pulse" />
            <span>in Kazakhstan</span>
          </span>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-blue dark:bg-slate-800 text-white hover:bg-brand-blue/90 dark:hover:bg-slate-700 shadow-xl cursor-pointer border border-brand-blue/10 dark:border-slate-700/80 transition-all flex items-center justify-center hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
