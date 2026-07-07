import { Puzzle, Cpu, Gamepad2, Code, Monitor, Palette, Sparkles, Milestone } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';

export default function Courses() {
  const { t } = useApp();

  const courseList = [
    {
      key: 'wedo' as const,
      age: '5+',
      icon: Puzzle,
      color: 'from-blue-500 to-cyan-400 text-blue-500 dark:text-blue-400',
      lightBg: 'bg-blue-500/5 dark:bg-blue-500/10',
      glowColor: 'group-hover:shadow-blue-500/10',
    },
    {
      key: 'ev3' as const,
      age: '7+',
      icon: Cpu,
      color: 'from-cyan-500 to-teal-400 text-cyan-500 dark:text-cyan-400',
      lightBg: 'bg-cyan-500/5 dark:bg-cyan-500/10',
      glowColor: 'group-hover:shadow-cyan-500/10',
    },
    {
      key: 'roblox' as const,
      age: '10+',
      icon: Gamepad2,
      color: 'from-red-500 to-rose-400 text-red-500 dark:text-red-400',
      lightBg: 'bg-red-500/5 dark:bg-red-500/10',
      glowColor: 'group-hover:shadow-red-500/10',
    },
    {
      key: 'python' as const,
      age: '10+',
      icon: Code,
      color: 'from-yellow-500 to-amber-400 text-yellow-600 dark:text-yellow-400',
      lightBg: 'bg-yellow-500/5 dark:bg-yellow-500/10',
      glowColor: 'group-hover:shadow-yellow-500/10',
    },
    {
      key: 'compLiteracy' as const,
      age: '6+',
      icon: Monitor,
      color: 'from-purple-500 to-indigo-400 text-purple-500 dark:text-purple-400',
      lightBg: 'bg-purple-500/5 dark:bg-purple-500/10',
      glowColor: 'group-hover:shadow-purple-500/10',
    },
    {
      key: 'webDesign' as const,
      age: '10+',
      icon: Palette,
      color: 'from-teal-500 to-emerald-400 text-teal-500 dark:text-teal-400',
      lightBg: 'bg-teal-500/5 dark:bg-teal-500/10',
      glowColor: 'group-hover:shadow-teal-500/10',
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative side mesh blur */}
      <div className="absolute right-0 top-1/4 w-[250px] h-[250px] bg-cyan-400/5 blur-[80px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-1/4 w-[250px] h-[250px] bg-blue-400/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.courses.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.courses.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, idx) => {
            const Icon = course.icon;
            const data = t.courses.items[course.key];

            return (
              <motion.div
                key={course.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex"
              >
                {/* Visual shadow glow behind card on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${course.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />

                {/* Main Card */}
                <div className="w-full p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 hover:scale-[1.02] duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg">
                  
                  <div>
                    {/* Header: Icon & Age limit */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue dark:bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-brand-blue/10 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
                        <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                          {t.courses.ageLabel}
                        </span>
                        <span className="text-xs font-bold font-mono text-brand-blue dark:text-cyan-400">
                          {course.age}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-cyan-400 transition-colors">
                      {data.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-8">
                      {data.desc}
                    </p>
                  </div>

                  {/* Indicator / Card footer */}
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-5">
                    <span className="text-xs font-mono font-bold tracking-wide text-slate-400 uppercase">
                      Robotics & Programming
                    </span>
                    <Sparkles className="w-4 h-4 text-brand-blue dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
