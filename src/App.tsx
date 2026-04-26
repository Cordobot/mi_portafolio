import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CheckCircle, PenTool, Database, Box, Cloud, Flame, Github, ExternalLink, Mail, Triangle, Globe, Layout, GitBranch, Smartphone, Code2, Layers, Zap, Rocket, Download, Activity, Compass } from 'lucide-react';

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
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
        <svg className="absolute bottom-0 w-[200%] h-full animate-wave" viewBox="0 0 120 28" preserveAspectRatio="none">
          <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="currentColor" className="text-blue-500" />
        </svg>
      </div>

      <Navbar currentLang={currentLang} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />

      {/* Floating Contact Button */}
      <div className="fixed top-8 right-8 z-[60] hidden lg:block">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactOpen(true)}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative px-8 py-4 bg-white dark:bg-slate-900 rounded-2xl leading-none flex items-center gap-3 border border-slate-200 dark:border-slate-800 shadow-xl">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-slate-800 dark:text-white font-bold">{currentLang === 'es' ? 'Contacto' : 'Contact'}</span>
            <Mail size={18} className="text-blue-500" />
          </div>
        </motion.button>
      </div>

      <main className="lg:ml-64 p-8 lg:p-16 max-w-7xl mx-auto transition-all duration-300">
        <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-20 gap-12 relative">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 w-fit">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
              {currentLang === 'es' ? 'Disponible para proyectos Android' : 'Available for Android projects'}
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              {currentLang === 'es' ? 'Hola, soy' : 'Hi, I am'} <br />
              <TypewriterText text="Adrián Alvarez" />
              <br />
              <span className="text-3xl lg:text-5xl">Android Developer.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-6">
              {currentLang === 'es' 
                ? 'Ingeniero de Software enfocado en el desarrollo de aplicaciones móviles eficientes, modernas y escalables. Especialista en el ecosistema Android con Kotlin y arquitecturas robustas.' 
                : 'Software Engineer focused on developing efficient, modern, and scalable mobile applications. Specialist in the Android ecosystem with Kotlin and robust architectures.'}
            </motion.p>
            
            <p className="flex items-center gap-2 text-slate-500 dark:text-slate-500 mb-10 font-medium">
              <Globe size={18} /> Medellín, Colombia
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">{currentLang === 'es' ? 'Contrátame' : 'Hire Me'}</button>
              <a href="#projects" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:border-blue-500 transition-all">{currentLang === 'es' ? 'Ver Proyectos' : 'View Projects'}</a>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/20 backdrop-blur-sm shadow-2xl">
              <img src="/src/assets/hero_avatar.png" alt="Android Developer Avatar" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Smartphone className="text-white" size={32} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white"><Cpu size={20} /></span>
            {currentLang === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            <TechItem name="Kotlin" level={currentLang === 'es' ? 'Experto' : 'Expert'} color="text-purple-500" icon={<Zap size={40} />} />
            <TechItem name="Jetpack Compose" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-green-500" icon={<Layout size={40} />} />
            <TechItem name="Android SDK" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-green-600" icon={<Smartphone size={40} />} />
            <TechItem name="Coroutines" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-blue-500" icon={<Zap size={40} />} />
            <TechItem name="Flow / StateFlow" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-cyan-500" icon={<Activity size={40} />} />
            <TechItem name="Clean Architecture" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-blue-600" icon={<Code2 size={40} />} />
            <TechItem name="MVVM" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-indigo-400" icon={<Box size={40} />} />
            <TechItem name="Hilt / Dagger" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-yellow-600" icon={<Layers size={40} />} />
            <TechItem name="Retrofit" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-blue-400" />
            <TechItem name="Room" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-slate-400" icon={<Database size={40} />} />
            <TechItem name="Firebase" level={currentLang === 'es' ? 'Intermedio' : 'Intermediate'} color="text-orange-500" icon={<Flame size={40} />} />
            <TechItem name="Navigation" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-blue-500" icon={<Compass size={40} />} />
            <TechItem name="WorkManager" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-purple-400" />
            <TechItem name="KMP" level={currentLang === 'es' ? 'Intermedio' : 'Intermediate'} color="text-blue-400" icon={<Layers size={40} />} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CheckCircle className="text-blue-500" />{currentLang === 'es' ? 'Especialidades' : 'Specialties'}</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                {['Desarrollo Android Nativo', 'UI Declarativa (Compose)', 'Consumo de APIs REST', 'Persistencia de Datos (Room)', 'Testing (JUnit)'].map(s => <li key={s} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span>{s}</li>)}
              </ul>
            </div>
            <div className="p-8 bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><PenTool className="text-slate-500" />{currentLang === 'es' ? 'Otras Herramientas' : 'Other Tools'}</h3>
              <div className="grid grid-cols-2 gap-4">
                <ToolItem icon={<Cpu size={24} />} name="Android Studio" level={currentLang === 'es' ? 'Experto' : 'Expert'} color="text-green-500" />
                <ToolItem icon={<GitBranch size={24} />} name="Git / GitHub" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-orange-600" />
                <ToolItem icon={<CheckCircle size={24} />} name="JUnit + MockK" level={currentLang === 'es' ? 'Avanzado' : 'Advanced'} color="text-red-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white"><Smartphone size={20} /></span>
            {currentLang === 'es' ? 'Experiencia Android' : 'Android Experience'}
          </h2>
          <div className="space-y-12">
            <ExpItem 
              title={currentLang === 'es' ? 'Senior Android Developer' : 'Senior Android Developer'}
              company="Tech Solutions Medellín"
              period={currentLang === 'es' ? '2022 - Presente' : '2022 - Present'}
              desc={currentLang === 'es' ? 'Liderazgo técnico en aplicaciones móviles nativas. Implementación de Jetpack Compose y Clean Architecture para mejorar la escalabilidad y mantenibilidad.' : 'Technical leadership in native mobile apps. Implementation of Jetpack Compose and Clean Architecture to improve scalability and maintainability.'}
            />
            <ExpItem 
              title={currentLang === 'es' ? 'Software Engineer - Mobile' : 'Software Engineer - Mobile'}
              company="App Factory"
              period="2020 - 2022"
              desc={currentLang === 'es' ? 'Desarrollo de módulos compartidos en Kotlin Multiplatform y optimización de consumo de red mediante Retrofit y Corrutinas.' : 'Development of shared modules in Kotlin Multiplatform and network consumption optimization using Retrofit and Coroutines.'}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white"><Code2 size={20} /></span>
            {currentLang === 'es' ? 'Proyectos Android' : 'Android Projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Rick and Morty App" description={currentLang === 'es' ? 'App Android usando Kotlin, Jetpack Compose y Retrofit.' : 'Android app using Kotlin, Jetpack Compose and Retrofit.'} img="/src/assets/projects/project_mobile_app_mockup_1777221281169.png" tags={['Kotlin', 'Compose', 'MVVM']} />
            <ProjectCard title="Pokedex KMP" description={currentLang === 'es' ? 'App multiplataforma compartiendo lógica con Kotlin Multiplatform.' : 'Multiplatform app sharing logic with Kotlin Multiplatform.'} img="/src/assets/projects/project_mobile_app_mockup_1777221281169.png" tags={['KMP', 'Compose']} />
            <ProjectCard title="Crypto Tracker" description={currentLang === 'es' ? 'Monitoreo de criptomonedas con gráficos de alto rendimiento.' : 'Real-time crypto monitoring app with high-performance charts.'} img="/src/assets/projects/project4.png" tags={['Android', 'Room', 'Hilt']} />
            <ProjectCard title="Fitness App" description={currentLang === 'es' ? 'Seguimiento de entrenamientos con WorkManager y Sensores.' : 'Workout tracking with WorkManager and Sensors.'} img="https://api.dicebear.com/7.x/initials/svg?seed=FA" tags={['Compose', 'WorkManager']} />
            <ProjectCard title="News App" description={currentLang === 'es' ? 'Lector de noticias con Clean Architecture y paginación 3.' : 'News reader with Clean Architecture and Paging 3.'} img="https://api.dicebear.com/7.x/initials/svg?seed=NA" tags={['Kotlin', 'Dagger Hilt']} />
            <ProjectCard title="Task Manager" description={currentLang === 'es' ? 'Gestor de tareas con DataStore y Notificaciones Locales.' : 'Task manager with DataStore and Local Notifications.'} img="https://api.dicebear.com/7.x/initials/svg?seed=TM" tags={['Android', 'DataStore']} />
          </div>
        </section>

        <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} <span className="font-bold text-slate-900 dark:text-white">Adrián Alvarez</span>. {currentLang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </footer>
      </main>

      <ScrollToTop />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} currentLang={currentLang} />
    </div>
  );
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[60] p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all border-4 border-white dark:border-slate-950 group"
          aria-label="Scroll to top"
        >
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Triangle className="w-6 h-6 fill-current rotate-0" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const TechItem = ({ name, level, color, icon }: { name: string, level: string, color: string, icon?: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl z-20">
            {name} - {level}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${color} group-hover:scale-110 transition-transform`}>{icon || <Code2 size={40} />}</div>
      <span className="text-sm font-bold">{name}</span>
    </div>
  );
};

const ToolItem = ({ icon, name, level, color }: { icon: React.ReactNode, name: string, level: string, color: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg whitespace-nowrap z-20">
            {level}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${color} group-hover:rotate-12 transition-transform`}>{icon}</div>
      <span className="text-xs font-bold text-center">{name}</span>
    </div>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const characters = text.split("");
  
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 inline-block relative">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: i * 0.1,
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-12 lg:h-16 bg-blue-600 ml-1 align-middle"
      />
    </span>
  );
};

const ExpItem = ({ title, company, period, desc }: { title: string, company: string, period: string, desc: string }) => (
  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group hover:border-blue-500 transition-colors">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-500 transition-colors border-4 border-white dark:border-slate-950"></div>
    <div className="mb-1 text-sm font-bold text-blue-600">{period}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">{company}</p>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ title, description, img, tags }: { title: string, description: string, img: string, tags: string[] }) => (
  <motion.div whileHover={{ y: -10 }} className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all">
    <div className="aspect-video overflow-hidden"><img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
    <div className="p-6">
      <div className="flex gap-2 mb-4">{tags.map(t => <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold">{t}</span>)}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex gap-4 mt-6">
        <a href="#" className="text-blue-600 hover:underline flex items-center gap-1 font-bold text-sm"><ExternalLink size={16} /> Demo</a>
        <a href="https://github.com/Cordobot" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
      </div>
    </div>
  </motion.div>
);

export default App;
