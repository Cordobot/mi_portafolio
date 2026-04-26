import React from 'react';
import { User, Briefcase, Code, Mail, Moon, Sun, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  currentLang: 'es' | 'en';
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  openContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentLang, 
  isDarkMode, 
  toggleDarkMode, 
  toggleLanguage,
  openContact 
}) => {
  const translations = {
    es: { about: 'Quién Soy', exp: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    en: { about: 'About Me', exp: 'Experience', projects: 'Projects', contact: 'Contact' }
  };

  const t = translations[currentLang];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-8 z-50 transition-all duration-300 max-lg:w-full max-lg:h-auto max-lg:bottom-0 max-lg:top-auto max-lg:flex-row max-lg:p-4">
      {/* Wave in Navbar background (SVG) */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden leading-[0] rotate-180 -z-10 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="text-blue-500"></path>
        </svg>
      </div>

      <div className="flex flex-col gap-8 max-lg:hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-lg shadow-blue-500/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full rounded-full bg-white dark:bg-slate-800" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-center">Felix Dev</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center break-all">hola@felix.dev</p>
        </div>

        <ul className="flex flex-col gap-2">
          <NavItem href="#about" icon={<User size={20} />} label={t.about} />
          <NavItem href="#experience" icon={<Briefcase size={20} />} label={t.exp} />
          <NavItem href="#projects" icon={<Code size={20} />} label={t.projects} />
          <li>
            <button onClick={openContact} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span>{t.contact}</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 max-lg:flex-row max-lg:w-full max-lg:justify-between items-center">
        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
          <button onClick={toggleDarkMode} className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleLanguage} className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm font-bold text-xs uppercase">
            {currentLang}
          </button>
        </div>

        <div className="flex justify-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-4 w-full">
          <SocialLink href="#" icon={<Github size={24} />} label="Github" />
          <SocialLink href="#" icon={<Linkedin size={24} />} label="Linkedin" />
          <a href="#" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-[#F48024] hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm" aria-label="Stack Overflow">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.117 14.27l10.592 2.185.435-2.087-10.591-2.186-.436 2.088zm1.029-4.545l9.452 4.938.995-1.905-9.452-4.938-.995 1.905zm2.342-4.148l7.695 7.425 1.48-1.536-7.695-7.426-1.48 1.537zm3.846-3.15l5.44 9.191 1.839-1.088-5.44-9.192-1.839 1.089zM18.253 0l-1.63 1.38 4.029 4.764 1.63-1.38L18.253 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <li>
    <a href={href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}</span>
    </a>
  </li>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a href={href} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm" aria-label={label}>
    {icon}
  </a>
);

export default Navbar;
