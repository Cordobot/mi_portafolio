import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import { motion } from 'framer-motion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setCurrentLang(currentLang === 'es' ? 'en' : 'es');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* Background Wave Animation */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
        <svg className="absolute bottom-0 w-[200%] h-full animate-wave" viewBox="0 0 120 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="currentColor" className="text-blue-500" />
        </svg>
      </div>

      <Navbar 
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        openContact={() => setIsContactOpen(true)}
      />

      <main className="lg:ml-64 p-8 lg:p-16 max-w-7xl mx-auto">
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {currentLang === 'es' ? 'Disponible para proyectos' : 'Available for hire'}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            {currentLang === 'es' ? 'Hola, soy' : 'Hi, I am'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Felix</span>, <br />
            <span className="text-3xl lg:text-5xl">{currentLang === 'es' ? 'Full Stack Developer.' : 'Full Stack Developer.'}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            {currentLang === 'es' 
              ? 'Me especializo en construir experiencias digitales excepcionales que combinan un diseño impecable con un rendimiento sólido.' 
              : 'I specialize in building exceptional digital experiences that combine flawless design with solid performance.'}
          </motion.p>
        </section>

        {/* Other sections like Experience and Projects would follow a similar pattern */}
        
        <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} - Todos los derechos reservados.</p>
        </footer>
      </main>

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}

export default App;
