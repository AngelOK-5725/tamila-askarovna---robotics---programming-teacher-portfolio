import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';

// Simple lightweight Counter component using requestAnimationFrame
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const { t } = useApp();

  const achievements = [
    {
      key: 'years' as const,
      num: 3,
      suffix: '+',
      icon: Award,
      color: 'from-blue-600 to-indigo-500 text-blue-500 dark:text-cyan-400',
    },
    {
      key: 'students' as const,
      num: 50,
      suffix: '+',
      icon: Users,
      color: 'from-cyan-500 to-teal-400 text-cyan-500 dark:text-teal-400',
    },
    {
      key: 'hours' as const,
      num: 2000,
      suffix: '+',
      icon: Clock,
      color: 'from-teal-500 to-emerald-400 text-teal-600 dark:text-teal-400',
    },
    {
      key: 'centers' as const,
      num: 6,
      suffix: '',
      icon: MapPin,
      color: 'from-indigo-600 to-purple-500 text-indigo-500 dark:text-purple-400',
    },
    {
      key: 'method' as const,
      num: 100,
      suffix: '%',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-400 text-pink-500 dark:text-rose-400',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.achievements.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.achievements.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Counters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            const item = t.achievements.items[ach.key];

            return (
              <motion.div
                key={ach.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative group p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 text-center flex flex-col items-center justify-between hover:scale-105 duration-300 shadow-sm"
              >
                {/* Custom glowing colored background blob inside card */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${ach.color} opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500`} />

                <div className="flex flex-col items-center">
                  {/* Floating Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 dark:bg-cyan-600/10 text-brand-blue dark:text-cyan-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Absolute Ticker Container */}
                  <div className="text-4xl sm:text-5xl font-bold font-display tracking-tighter text-slate-800 dark:text-white mb-3">
                    <AnimatedNumber value={ach.num} suffix={ach.suffix} />
                  </div>
                </div>

                <div className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-normal font-medium mt-1">
                  {item.label}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
