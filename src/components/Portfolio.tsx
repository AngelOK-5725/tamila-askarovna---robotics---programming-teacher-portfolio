import { useState } from 'react';
import { Eye, X, ZoomIn, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './AppContext';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const { t, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'robots' | 'games' | 'python' | 'classroom'>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'wedo-robot',
      category: 'robots',
      titleKey: 'wedoRobot',
      imageUrl: '/images/sortirov.webp',
    },
    {
      id: 'ev3-robot',
      category: 'robots',
      titleKey: 'ev3Robot',
      imageUrl: '/images/sumo.webp',
    },
    {
      id: 'roblox-runner',
      category: 'games',
      titleKey: 'robloxRunner',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'roblox-space',
      category: 'games',
      titleKey: 'robloxSpace',
      imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
    },
    // {
    //   id: 'python-quiz',
    //   category: 'python',
    //   titleKey: 'pythonQuiz',
    //   imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 'python-calc',
    //   category: 'python',
    //   titleKey: 'pythonCalc',
    //   imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 'class-robotics',
    //   category: 'classroom',
    //   titleKey: 'classRobotics',
    //   imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 'class-programming',
    //   category: 'classroom',
    //   titleKey: 'classProgramming',
    //   imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 'cert-software',
    //   category: 'classroom',
    //   titleKey: 'certSoftwareTech',
    //   imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 'cert-python',
    //   category: 'classroom',
    //   titleKey: 'certPythonAdvanced',
    //   imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    // },
  ];

  const categories = [
    { id: 'all' as const, label: t.portfolio.categories.all },
    { id: 'robots' as const, label: t.portfolio.categories.robots },
    { id: 'games' as const, label: t.portfolio.categories.games },
    { id: 'python' as const, label: t.portfolio.categories.python },
    { id: 'classroom' as const, label: t.portfolio.categories.classroom },
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-brand-dark/50 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare */}
      <div className="absolute top-[20%] left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.portfolio.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.portfolio.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer border relative ${
                selectedCategory === cat.id
                  ? 'text-brand-blue dark:text-cyan-400 border-slate-100 dark:border-slate-800'
                  : 'text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute inset-0 bg-white dark:bg-slate-900 shadow-sm rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Animated with Framer Motion Layout) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const trans = t.portfolio.items[item.titleKey];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveItem(item)}
                >
                  <div className="rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 shadow-sm hover:shadow-lg transition-all duration-500 relative h-[360px] flex flex-col justify-between">
                    
                    {/* Image Container with elegant overlay */}
                    <div className="relative h-56 w-full overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-950">
                      <img
                        src={item.imageUrl}
                        alt={trans.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-500 flex items-center justify-center">
                        <motion.div 
                          className="w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center shadow-lg text-slate-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Floating Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 dark:bg-slate-900/95 rounded-full text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Content text */}
                    <div className="p-6 flex flex-col justify-between h-full bg-white/50 dark:bg-transparent">
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-slate-800 dark:text-white line-clamp-1 mb-1 group-hover:text-brand-blue dark:group-hover:text-cyan-400 transition-colors">
                          {trans.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {trans.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-3.5 mt-2">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-semibold tracking-wide flex items-center space-x-1">
                          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                          <span>TAMILA PORTFOLIO</span>
                        </span>
                        <span className="text-xs font-mono font-semibold text-brand-blue dark:text-cyan-400 flex items-center group-hover:translate-x-0.5 transition-transform">
                          {language === 'ru' ? 'Подробнее' : 'Толығырақ'} →
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Overlay Modal */}
        <AnimatePresence>
          {activeItem && (() => {
            const trans = t.portfolio.items[activeItem.titleKey];
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-6"
                onClick={() => setActiveItem(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-200/50 dark:border-slate-800/80 shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveItem(null)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-slate-950/20 hover:bg-slate-950/40 text-white backdrop-blur-md z-10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Image */}
                    <div className="h-64 md:h-[450px] bg-slate-100 dark:bg-slate-950">
                      <img
                        src={activeItem.imageUrl}
                        alt={trans.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Detailed Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-blue-50 text-brand-blue dark:bg-slate-800 dark:text-cyan-400 border border-blue-500/10 uppercase">
                            {activeItem.category}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200/30">
                            STUDENT WORK
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                          {trans.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-6">
                          {trans.desc}
                        </p>
                      </div>

                      {/* Info footer */}
                      <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                        <div className="flex items-center space-x-3 text-slate-400 dark:text-slate-500 mb-3">
                          <Calendar className="w-4 h-4 text-brand-cyan" />
                          <span className="text-xs font-medium font-sans">
                            {language === 'ru' ? 'Апрель 2026 г.' : 'Сәуір 2026 ж.'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-400 dark:text-slate-500">
                          <User className="w-4 h-4 text-brand-blue" />
                          <span className="text-xs font-medium font-sans">
                            {language === 'ru' ? 'Преподаватель: Тамила А.' : 'Мұғалім: Тамила А.'}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
