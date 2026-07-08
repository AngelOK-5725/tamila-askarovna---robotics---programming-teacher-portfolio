import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Trash2, ShieldCheck, Github, MessageCircle, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './AppContext';
import { ContactForm, SubmittedMessage } from '../types';

export default function Contact() {
  const { t, language } = useApp();
  const [form, setForm] = useState<ContactForm>({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Real local storage state for reviews (Admin Logs)
  const [messages, setMessages] = useState<SubmittedMessage[]>([]);
  const [showHub, setShowHub] = useState(false);

  // Load existing logged messages on startup
  useEffect(() => {
    const saved = localStorage.getItem('tamila_portfolio_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = language === 'ru' ? 'Введите ваше имя' : 'Атыңызды енгізіңіз';
    
    if (!form.phone.trim()) {
      newErrors.phone = language === 'ru' ? 'Введите номер телефона' : 'Телефон нөмірін енгізіңіз';
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(form.phone.trim())) {
      newErrors.phone = language === 'ru' ? 'Неверный формат номера' : 'Телефон нөмірінің пішімі қате';
    }

    if (!form.email.trim()) {
      newErrors.email = language === 'ru' ? 'Введите email' : 'Электрондық поштаны енгізіңіз';
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      newErrors.email = language === 'ru' ? 'Неверный формат email' : 'Пошта пішімі қате';
    }

    if (!form.message.trim()) newErrors.message = language === 'ru' ? 'Введите сообщение' : 'Хабарламаңызды жазыңыз';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate server response delay
    setTimeout(() => {
      const newMessage: SubmittedMessage = {
        ...form,
        id: Math.random().toString(36).substring(2, 9),
        date: new Date().toLocaleString(),
      };

      const updated = [newMessage, ...messages];
      setMessages(updated);
      localStorage.setItem('tamila_portfolio_messages', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });

      // Clear success banner after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleDeleteMessage = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('tamila_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      
      {/* Ambient backgrounds */}
      <div className="absolute right-[5%] top-[15%] w-[350px] h-[350px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute left-[10%] bottom-[10%] w-[300px] h-[300px] bg-cyan-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-brand-blue dark:text-cyan-400 uppercase mb-3"
          >
            {t.contact.title}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4.5xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {t.contact.subtitle}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-600 mx-auto mt-4" />
        </div>

        {/* Contact panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Info Cards Stack */}
            <div className="space-y-6">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 flex items-start space-x-4 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-cyan-400 shrink-0 border border-brand-blue/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-1">
                    {t.contact.info.location}
                  </h4>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {t.contact.info.locationValue}
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 flex items-start space-x-4 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-cyan-400 shrink-0 border border-brand-blue/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-1">
                    {t.contact.info.email}
                  </h4>
                  <a 
                    href="mailto:youdo5725@gmail.com" 
                    className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-blue transition-colors"
                  >
                    youdo5725@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 flex items-start space-x-4 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-cyan-400 shrink-0 border border-brand-blue/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-400 dark:text-slate-500 uppercase font-mono tracking-wider mb-1">
                    {t.contact.info.phone}
                  </h4>
                  <a 
                    href="https://wa.me/77051334565" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-blue transition-colors"
                  >
                    +7 (705) 133-4565
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Handles Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 text-center shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                {t.contact.info.socials}
              </span>
              <div className="flex items-center justify-center space-x-4">
                {[
                  { icon: MessageCircle, url: 'https://t.me/Amidamn', color: 'hover:bg-sky-500 hover:text-white text-sky-500 border-sky-500/20' },
                  { icon: Phone, url: 'https://wa.me/77051334565', color: 'hover:bg-emerald-500 hover:text-white text-emerald-500 border-emerald-500/20' },
                  { icon: Instagram, url: 'https://instagram.com/InGear_studi', color: 'hover:bg-pink-500 hover:text-white text-pink-500 border-pink-500/20' },
                  { icon: Github, url: 'https://github.com/AngelOK-5725', color: 'hover:bg-slate-800 hover:text-white text-slate-700 dark:text-slate-300 border-slate-500/20' },
                ].map((soc, idx) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${soc.color}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/30 shadow-lg flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form Input fields */}
              <div>
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950/20 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-brand-blue/20 focus:border-brand-blue'
                  }`}
                  placeholder={language === 'ru' ? 'Иван Иванов' : 'Асанәлі Асан'}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                    {t.contact.form.phone} *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950/20 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-brand-blue/20 focus:border-brand-blue'
                    }`}
                    placeholder="+7 (777) 123-4567"
                  />
                  {errors.phone && <span className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.phone}</span>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950/20 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-brand-blue/20 focus:border-brand-blue'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.email}</span>}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950/20 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-brand-blue/20 focus:border-brand-blue'
                  }`}
                  placeholder={language === 'ru' ? 'Здравствуйте, хотим записаться...' : 'Сәлеметсіз бе, үйірмеге жазылғымыз келеді...'}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.message}</span>}
              </div>

              {/* Submit Buttons and Messages */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-4.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold shadow-lg shadow-brand-blue/10 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.contact.form.submitting : t.contact.form.submit}</span>
                </button>

                {/* Show Admin logs button if messages exist */}
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowHub(!showHub)}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 flex items-center space-x-1 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{showHub ? (language === 'ru' ? 'Скрыть сообщения' : 'Жасыру') : `${language === 'ru' ? 'Просмотр сообщений' : 'Хабарламаларды көру'} (${messages.length})`}</span>
                  </button>
                )}
              </div>

              {/* Success/Error overlays */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-start space-x-3 text-xs"
                  >
                    <CheckCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                    <span>{t.contact.form.success}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

        {/* Message Hub overlay (Reviewing typed messages client-side) */}
        <AnimatePresence>
          {showHub && messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-5xl mx-auto mt-12 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-8 overflow-hidden shadow-inner"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-display font-bold text-slate-800 dark:text-white text-lg">
                    {language === 'ru' ? 'Хаб Отправленных Сообщений (Локальный)' : 'Жіберілген хабарламалар хабы'}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('tamila_portfolio_messages');
                    setMessages([]);
                    setShowHub(false);
                  }}
                  className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center space-x-1.5 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{language === 'ru' ? 'Очистить все' : 'Барлығын тазарту'}</span>
                </button>
              </div>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm relative group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100 block">{msg.name}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono leading-none">{msg.email} | {msg.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-medium">{msg.date}</span>
                        <button
                          onClick={(e) => handleDeleteMessage(msg.id, e)}
                          className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-emerald-500 pl-3">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
