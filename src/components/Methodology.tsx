import { Heart, Compass, Layout, Cpu, Smile, Lightbulb, TrendingUp, CheckSquare, Sparkles, Star, Quote, AlertCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';

export default function Methodology() {
  const { t } = useApp();

  const principles = [
    { key: 'diff' as const, icon: Compass, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30 border-blue-500/10' },
    { key: 'interest' as const, icon: Lightbulb, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 border-yellow-500/10' },
    { key: 'projects' as const, icon: Layout, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30 border-cyan-500/10' },
    { key: 'practice' as const, icon: Cpu, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30 border-purple-500/10' },
    { key: 'individual' as const, icon: Heart, color: 'text-red-500 bg-red-50 dark:bg-red-950/30 border-red-500/10' },
    { key: 'atmosphere' as const, icon: Smile, color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/30 border-teal-500/10' },
    { key: 'creative' as const, icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/30 border-pink-500/10' },
    { key: 'logical' as const, icon: TrendingUp, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-500/10' },
    { key: 'fearless' as const, icon: Star, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/30 border-orange-500/10' },
    { key: 'trial' as const, icon: CheckSquare, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/10' },
  ];

  return (
    <section id="methodology" className="py-24 bg-slate-50 dark:bg-brand-dark/50 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-[10%] top-[10%] w-[300px] h-[300px] bg-blue-400/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-teal-400/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.methodology.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.methodology.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Master quote highlight (The core philosophy) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-brand-blue to-brand-cyan text-white relative overflow-hidden shadow-xl"
        >
          {/* Subtle background decorative shapes */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-tl-full pointer-events-none" />
          <div className="absolute left-6 top-6 opacity-10">
            <Quote className="w-24 h-24 stroke-[4]" />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-100/70 block mb-4">
              {t.methodology.quoteAuthor}
            </span>
            <p className="font-display text-2xl sm:text-3.5xl font-semibold italic tracking-tight leading-tight mb-6">
              «{t.methodology.quote}»
            </p>
            <div className="w-8 h-0.5 bg-white/30 mx-auto" />
          </div>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            const item = t.methodology.principles[p.key];

            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${p.color} border flex items-center justify-center mb-5 shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Age Recommendations Section (Apple-like styled block) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Robotics Age Detail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-brand-blue dark:text-cyan-400 font-mono text-xs font-bold rounded-lg border border-blue-500/10">
                  AGE 5+
                </span>
                <h4 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100">
                  {t.methodology.notes.roboticsAge}
                </h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-6">
                {t.methodology.notes.roboticsAgeDetail}
              </p>
            </div>
            <div className="w-full h-1 bg-brand-blue dark:bg-cyan-600" />
          </motion.div>

          {/* Card 2: Programming Age Detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/40 text-brand-blue dark:text-cyan-400 font-mono text-xs font-bold rounded-lg border border-cyan-500/10">
                  AGE 10+
                </span>
                <h4 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100">
                  {t.methodology.notes.programmingAge}
                </h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-6">
                {t.methodology.notes.programmingAgeDetail}
              </p>
            </div>
            <div className="w-full h-1 bg-brand-blue dark:bg-cyan-600" />
          </motion.div>

          {/* Core recommendation note */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1 leading-none">
                {t.methodology.notes.recommendation}
              </h5>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.methodology.notes.recommendationDetail}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
