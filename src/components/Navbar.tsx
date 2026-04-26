import React, { useState } from 'react';
import { User, Briefcase, Code, Moon, Sun, Cpu, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentLang: 'es' | 'en';
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentLang, 
  isDarkMode, 
  toggleDarkMode, 
  toggleLanguage
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    es: { about: 'Quién Soy', tech: 'Tecnologías', exp: 'Experiencia', projects: 'Proyectos' },
    en: { about: 'About Me', tech: 'Tech Stack', exp: 'Experience', projects: 'Projects' }
  };

  const t = translations[currentLang];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden fixed top-6 left-6 z-[70] p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl text-blue-600"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay (Mobile Only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      <nav className={`
        fixed left-0 top-0 h-screen w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 
        flex flex-col justify-between p-8 z-[65] transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden leading-[0] rotate-180 -z-10 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="text-blue-500"></path>
          </svg>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-lg shadow-blue-500/20">
              <img src="/src/assets/Perfil_navbar.png" alt="Adrián Alvarez" className="w-full h-full rounded-full object-cover bg-white dark:bg-slate-800" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-center">Adrián Alvarez</h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono text-center break-all">Adnalvarez95@gmail.com</p>
          </div>

          <ul className="flex flex-col gap-2">
            <NavItem href="#about" icon={<User size={20} />} label={t.about} onClick={() => setIsOpen(false)} />
            <NavItem href="#tech" icon={<Cpu size={20} />} label={t.tech} onClick={() => setIsOpen(false)} />
            <NavItem href="#experience" icon={<Briefcase size={20} />} label={t.exp} onClick={() => setIsOpen(false)} />
            <NavItem href="#projects" icon={<Code size={20} />} label={t.projects} onClick={() => setIsOpen(false)} />
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 bg-slate-200 dark:bg-slate-800/80 p-2 rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-sm">
            <button onClick={toggleDarkMode} className="p-2 rounded-xl bg-white dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm group">
              {isDarkMode ? <Sun size={20} className="group-hover:scale-110 transition-transform" /> : <Moon size={20} className="group-hover:scale-110 transition-transform" />}
            </button>
            <button onClick={toggleLanguage} className="p-2 rounded-xl bg-white dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm font-bold text-xs uppercase group">
              <span className="group-hover:scale-110 transition-transform inline-block">{currentLang}</span>
            </button>
          </div>

          <div className="flex justify-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-4 w-full">
            <a href="#" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm" aria-label="Github">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:scale-110 transition-transform"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="#" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm" aria-label="Linkedin">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:scale-110 transition-transform"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-[#F48024] hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm" aria-label="Stack Overflow">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.117 14.27l10.592 2.185.435-2.087-10.591-2.186-.436 2.088zm1.029-4.545l9.452 4.938.995-1.905-9.452-4.938-.995 1.905zm2.342-4.148l7.695 7.425 1.48-1.536-7.695-7.426-1.48 1.537zm3.846-3.15l5.44 9.191 1.839-1.088-5.44-9.192-1.839 1.089zM18.253 0l-1.63 1.38 4.029 4.764 1.63-1.38L18.253 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ href, icon, label, onClick }: { href: string, icon: React.ReactNode, label: string, onClick?: () => void }) => (
  <li>
    <a 
      href={href} 
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-900/40 text-slate-600 dark:text-slate-400 transition-all group shadow-sm hover:shadow-blue-500/30"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}</span>
    </a>
  </li>
);

export default Navbar;
