import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Award } from 'lucide-react';
import { AppProvider } from './components/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Methodology from './components/Methodology';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioAppContent() {
  const [loading, setLoading] = useState(true);

  // Initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinning tech gear/ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full border-4 border-t-blue-500 border-r-cyan-400 border-b-teal-400 border-l-slate-800 flex items-center justify-center relative shadow-[0_0_30px_rgba(6,182,212,0.15)] mb-6"
              >
                <Cpu className="w-8 h-8 text-cyan-400" />
              </motion.div>

              {/* Glowing name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h1 className="font-display text-2xl font-bold tracking-tight text-white mb-1.5 flex items-center justify-center space-x-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>Тамила Аскаровна</span>
                </h1>
                <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  ROBOTICS & CODING TEACHER
                </p>
              </motion.div>

              {/* Progress feedback bar */}
              <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden mt-8">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col"
          >
            {/* Nav */}
            <Navbar />

            {/* Layout Main */}
            <main className="flex-grow w-full">
              <Hero />
              <About />
              <Experience />
              <Courses />
              <Methodology />
              <Achievements />
              <Portfolio />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PortfolioAppContent />
    </AppProvider>
  );
}
