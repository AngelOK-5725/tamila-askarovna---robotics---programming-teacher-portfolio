import { User, Calendar, Award, Code, Globe, GraduationCap, ChevronRight, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from './AppContext';

export default function About() {
  const { t, language } = useApp();

  const infoItems = [
    {
      icon: Calendar,
      label: t.about.birthDate,
      value: t.about.birthDateValue,
    },
    {
      icon: Globe,
      label: t.about.nationality,
      value: t.about.nationalityValue,
    },
    {
      icon: User,
      label: t.about.languages,
      value: t.about.languagesValue,
    },
  ];

  const timelineEvents = [
    {
      year: '2005',
      title: language === 'ru' ? 'Рождение' : 'Дүниеге келуі',
      desc: language === 'ru' ? 'Родилась в Республике Казахстан' : 'Қазақстан Республикасында дүниеге келді',
      status: 'completed',
    },
    {
      year: '2021',
      title: language === 'ru' ? 'Начало пути в IT' : 'IT саласындағы жолдың басталуы',
      desc: language === 'ru' ? 'Поступила на специальность «Разработка программного обеспечения» и начала преподавать робототехнику самым маленьким.' : '«Бағдарламалық қамтамасыз етуді әзірлеу» мамандығына түсіп, ең кішкентайларға робототехникадан сабақ бере бастады.',
      status: 'completed',
    },
    {
      year: '2023',
      title: language === 'ru' ? 'Python Сертификация' : 'Python Сертификаттау',
      desc: language === 'ru' ? 'Успешно завершила углубленные курсы программирования на Python (Базовый, Средний, Продвинутый).' : 'Python бағдарламалау бойынша тереңдетілген курстарды (Бастапқы, Орта, Жоғары) сәтті аяқтады.',
      status: 'completed',
    },
    {
      year: '2025',
      title: language === 'ru' ? 'Выпуск и Квалификация' : 'Колледжді бітіру және біліктілік',
      desc: language === 'ru' ? 'Окончила обучение по специальности Software Engineering с получением квалификации «Техник-программист».' : 'Software Engineering мамандығы бойынша оқуын аяқтап, «Техник-бағдарламашы» біліктілігін алды.',
      status: 'completed',
    },
    {
      year: '2026',
      title: language === 'ru' ? 'Активное преподавание' : 'Белсенді оқыту қызметі',
      desc: language === 'ru' ? 'Обучает более 50 детей, разрабатывает авторские методические пособия для образовательных центров.' : '50-ден астам баланы оқытуда, білім беру орталықтарына арналған авторлық әдістемелік құралдарды әзірлеуде.',
      status: 'current',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-brand-dark transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.about.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.about.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bento Cards (Bento grid style) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-cyan-400/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue dark:bg-cyan-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-blue/10">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                    {t.about.education}
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">
                    {t.about.educationValue}
                  </h3>
                  <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                    <Award className="w-4.5 h-4.5 text-brand-blue dark:text-cyan-400" />
                    <span className="text-sm font-medium">{t.about.qualificationValue}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Python Program Progression Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-cyan-600/10 flex items-center justify-center text-brand-blue dark:text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase block leading-none mb-1">
                    {t.about.additionalEdu}
                  </span>
                  <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white">
                    Python Programming
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { level: t.about.pythonLevels.basic, desc: language === 'ru' ? 'Основы синтаксиса, переменные, циклы' : 'Синтаксис негіздері, айнымалылар, циклдер', active: true },
                  { level: t.about.pythonLevels.intermediate, desc: language === 'ru' ? 'Функции, структуры данных, модули' : 'Функциялар, деректер құрылымы, модульдер', active: true },
                  { level: t.about.pythonLevels.advanced, desc: language === 'ru' ? 'ООП, алгоритмы, разработка проектов' : 'ОББ, алгоритмдер, жобаларды әзірлеу', active: true },
                ].map((course, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800/80 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-brand-blue dark:text-cyan-400 fill-brand-blue dark:fill-cyan-400" />
                      <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-800 mb-1 leading-tight ">{course.level}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{course.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* General Information Bento cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="p-5 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-brand-blue dark:text-cyan-400 flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight block">
                        {item.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Beautiful Timeline */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-brand-blue dark:text-cyan-400" />
              <span>{t.about.timelineTitle}</span>
            </h3>

            <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-10">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-900 transition-all duration-300 ${
                    event.status === 'current'
                      ? 'border-brand-blue dark:border-cyan-500 scale-125 shadow-md shadow-brand-blue/20'
                      : 'border-slate-200 dark:border-slate-700 group-hover:border-brand-blue'
                  }`} />

                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide mb-2 ${
                    event.status === 'current'
                      ? 'bg-blue-50 text-brand-blue dark:bg-slate-800 dark:text-cyan-400'
                      : 'bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {event.year}
                  </span>
                  
                  <h4 className="text-base font-bold font-display text-slate-800 dark:text-slate-200 mb-1 leading-tight group-hover:text-brand-blue dark:group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h4>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {event.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
