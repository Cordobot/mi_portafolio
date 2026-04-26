import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'es' | 'en';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, currentLang }) => {
  const translations = {
    es: { title: 'Hablemos', subtitle: 'Cuéntame sobre tu próximo gran proyecto.', name: 'Nombre', email: 'Email', message: 'Mensaje', submit: 'Enviar Mensaje' },
    en: { title: 'Let\'s Talk', subtitle: 'Tell me about your next big project.', name: 'Name', email: 'Email', message: 'Message', submit: 'Send Message' }
  };

  const t = translations[currentLang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 lg:p-12 border border-white/20 overflow-hidden"
          >
            {/* Wave decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
            
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <X size={24} />
            </button>
            
            <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">{t.subtitle}</p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{t.name}</label>
                <input type="text" className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{t.email}</label>
                <input type="email" className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{t.message}</label>
                <textarea rows={4} className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02]">
                {t.submit}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
