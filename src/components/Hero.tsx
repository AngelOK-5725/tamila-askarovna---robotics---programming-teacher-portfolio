import { Terminal, Gamepad2, Blocks, Cpu, Laptop, GraduationCap, ChevronRight, MessageSquare, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';
import { useEffect, useState } from 'react';

const portraitImg = "/images/tamila.jpg";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);
  return matches;
}

export default function Hero() {
  const { t, language } = useApp();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const stats = [
    {
      icon: Award,
      count: t.hero.stats.experience,
      label: t.hero.stats.experienceSub,
      color: 'from-blue-500/20 to-indigo-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Users,
      count: t.hero.stats.students,
      label: t.hero.stats.studentsSub,
      color: 'from-cyan-500/20 to-teal-500/10 text-cyan-600 dark:text-cyan-400',
    },
    {
      icon: BookOpen,
      count: t.hero.stats.programs,
      label: t.hero.stats.programsSub,
      color: 'from-teal-500/20 to-emerald-500/10 text-teal-600 dark:text-teal-400',
    },
  ];

  // Десктопные координаты (без изменений)
  const desktopIcons = [
    { icon: Terminal, label: 'Python', dotColor: 'bg-blue-500', delay: 0, x: -120, y: -160 },
    { icon: Gamepad2, label: 'Roblox', dotColor: 'bg-orange-500', delay: 1, x: 140, y: -140 },
    { icon: Blocks, label: 'LEGO WeDo', dotColor: 'bg-green-500', delay: 2, x: -150, y: 40 },
    { icon: Cpu, label: 'EV3', dotColor: 'bg-red-500', delay: 1.5, x: 160, y: 60 },
    { icon: Laptop, label: 'Web Design', dotColor: 'bg-cyan-500', delay: 0.5, x: -80, y: 190 },
    { icon: GraduationCap, label: 'STEM', dotColor: 'bg-purple-500', delay: 2.5, x: 100, y: 200 },
  ];

  // Мобильные координаты – разнесены по кругу, нижние подняты, чтобы не задеть карточку на фото
  const mobileIcons = [
    { icon: Terminal, label: 'Python', dotColor: 'bg-blue-500', delay: 0, x: -120, y: -140 },
    { icon: Gamepad2, label: 'Roblox', dotColor: 'bg-orange-500', delay: 1, x: 30, y: -120 },
    { icon: Blocks, label: 'LEGO WeDo', dotColor: 'bg-green-500', delay: 2, x: -140, y: 10 },
    { icon: Cpu, label: 'EV3', dotColor: 'bg-red-500', delay: 1.5, x: 70, y: -40 },
    { icon: Laptop, label: 'Web Design', dotColor: 'bg-cyan-500', delay: 0.5, x: -100, y: 120 },
    { icon: GraduationCap, label: 'STEM', dotColor: 'bg-purple-500', delay: 2.5, x: 30, y: 90 },
  ];

  const floatingIcons = isMobile ? mobileIcons : desktopIcons;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Drifting Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-[80px] animate-drift-slow-1" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 dark:bg-cyan-600/5 blur-[90px] animate-drift-slow-2" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-teal-400/10 dark:bg-teal-600/5 blur-[100px] animate-drift-slow-3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column - Text and CTA */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-slate-900/40 text-brand-blue dark:text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-slate-200 dark:border-slate-800/80 shadow-sm"
          >
            <span className="font-mono">{t.hero.stats.experienceSub}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            {language === 'ru' ? (
              <>
                Инновации через <br/>
                <span className="text-gradient">обучение.</span>
              </>
            ) : (
              <>
                Оқыту арқылы <br/>
                <span className="text-gradient">инновацияларға.</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-sans"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('portfolio')}
              className="px-8 py-4 rounded-2xl bg-brand-blue dark:bg-cyan-600 hover:scale-105 hover:shadow-xl hover:shadow-brand-blue/10 text-white font-semibold shadow-xl shadow-brand-blue/20 dark:shadow-cyan-950/20 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>{t.hero.viewPortfolio}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-brand-blue dark:text-cyan-400" />
              <span>{t.hero.contactMe}</span>
            </button>
          </motion.div>

          {/* Quick statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
          >
            {stats.map((stat, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/30 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/80 flex flex-col items-center lg:items-start text-center lg:text-left hover:scale-[1.02] transition-transform duration-300"
                >
                  <span className="text-3xl font-bold font-display text-brand-blue dark:text-cyan-400 mb-1">
                    {stat.count}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold font-mono">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right column - Interactive portrait & floating icons */}
        <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0 h-[480px] sm:h-[550px] w-full">
          
          {/* Main frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] sm:w-[350px] h-[380px] sm:h-[470px] self-center z-10"
          >
            {/* Soft decorative back glows */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand-blue/10 to-brand-cyan/10 opacity-40 blur-xl z-0" />
            
            {/* Picture wrapper with Apple-style radius and drop shadows */}
            <div className="w-full h-full rounded-[40px] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 group bg-white dark:bg-slate-900">
              <img
                src={portraitImg}
                alt="Tamila Askarovna"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Bottom tag block in Design HTML */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {language === 'ru' ? 'Разработчик ПО & Педагог' : 'Бағдарламалық жасақтама әзірлеушісі'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {language === 'ru' ? 'Выпускник КГТК, Робототехник' : 'КГТК түлегі, Робототехник'}
                    </p>
                  </div>
                  <div className="w-9 h-9 bg-teal-400 rounded-full flex items-center justify-center text-white shrink-0">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Floating Tech Badges around the portrait */}
          {floatingIcons.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                className="absolute z-20 pointer-events-auto"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                initial={{ 
                  opacity: 0, 
                  x: 0, 
                  y: 0 
                }}
                animate={{ 
                  opacity: 1, 
                  x: badge.x, 
                  y: badge.y 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: badge.delay,
                  type: 'spring',
                  stiffness: 80 
                }}
              >
                <motion.div
                  className={`flex items-center space-x-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 shadow-md text-slate-800 dark:text-slate-100 cursor-pointer ${
                    isMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: badge.y - 10,
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    y: [badge.y, badge.y - 6, badge.y],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: idx * 0.4
                  }}
                >
                  <span className={`w-2 h-2 rounded-full ${badge.dotColor}`} />
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold tracking-wide font-sans">{badge.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}