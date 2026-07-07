import { Briefcase, MapPin, CheckCircle, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';

export default function Experience() {
  const { t, language } = useApp();

  const experiences = [
    {
      id: 1,
      companyKey: 'fastTrackKids' as const,
      yearRange: '2025 - 2026',
      subjects: ['LEGO WeDo 2.0', 'LEGO MINDSTORMS EV3', 'Computer Literacy', 'Roblox Studio', 'Python', 'Web Design'],
    },
    {
      id: 2,
      companyKey: 'eduCenterKaskelen' as const,
      yearRange: '2024 - 2025',
      subjects: ['LEGO WeDo 2.0', 'Computer Literacy', 'Roblox Studio', 'Python', 'Web Design'],
    },
    {
      id: 3,
      companyKey: 'asUzynagash' as const,
      yearRange: '2023 - 2024',
      subjects: ['LEGO WeDo 2.0'],
    },
    {
      id: 4,
      companyKey: 'nadezhdaUzynagash' as const,
      yearRange: '2023 - 2024',
      subjects: ['LEGO WeDo 2.0'],
    },
    {
      id: 5,
      companyKey: 'saidaShoppingCenter' as const,
      yearRange: '2022 - 2023',
      subjects: ['LEGO WeDo 2.0'],
    },
    {
      id: 6,
      companyKey: 'asemayKindergarten' as const,
      yearRange: '2022 - 2023',
      subjects: ['LEGO WeDo 2.0'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-brand-dark/50 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.experience.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.experience.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Experience Timeline Grid / Stack */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (hidden on small devices, off-center on large) */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-turquoise opacity-20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const comp = t.experience.companies[exp.companyKey];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline central dot */}
                  <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center z-10 shadow-sm hidden md:flex">
                    <Briefcase className="w-3.5 h-3.5 text-brand-blue dark:text-cyan-400" />
                  </div>

                  {/* Empty helper column to force alignment on desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Card Content Column */}
                  <div className="w-full md:w-[45%]">
                    <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden shadow-sm">
                      {/* Ambient corner light */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 rounded-full pointer-events-none" />

                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide bg-blue-50 text-brand-blue dark:bg-slate-800 dark:text-cyan-400">
                          {exp.yearRange}
                        </span>
                        <div className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{comp.location}</span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                        {comp.name}
                      </h3>

                      {/* Brief description */}
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                        {comp.desc}
                      </p>

                      {/* Subjects Section */}
                      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-3">
                          {t.experience.subjectsLabel}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/50 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-colors"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
