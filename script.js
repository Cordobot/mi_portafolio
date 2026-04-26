const translations = {
    es: {
        nav_about: "Quién Soy",
        nav_tech: "Tecnologías",
        nav_exp: "Experiencia",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        nav_cv: "Descargar CV",
        badge_available: "Disponible para proyectos Android",
        about_title_1: "Hola, soy",
        about_title_2: "Android Developer.",
        about_desc: "Ingeniero de Software enfocado en el desarrollo de aplicaciones móviles eficientes, modernas y escalables. Especialista en el ecosistema Android con Kotlin y arquitecturas robustas.",
        btn_contact: "Contrátame",
        btn_projects: "Ver Proyectos",
        tech_title: "Stack Tecnológico",
        specialties_title: "Especialidades",
        tools_title: "Otras Herramientas",
        exp_title: "Experiencia Android",
        projects_title: "Proyectos Android",
        contact_title: "Hablemos",
        contact_subtitle: "Cuéntame sobre tu próximo gran proyecto.",
        form_name: "Nombre",
        form_email: "Email",
        form_message: "Mensaje",
        form_submit: "Enviar Mensaje",
        footer_rights: "Todos los derechos reservados.",
        form_success_title: "¡Mensaje Enviado!",
        form_success_desc: "Gracias por contactarme. Te responderé lo antes posible.",
        btn_close: "Cerrar",
        p1_title: "Rick and Morty App",
        p1_desc: "App Android usando Kotlin, Jetpack Compose y Retrofit.",
        p2_title: "Pokedex KMP",
        p2_desc: "App multiplataforma compartiendo lógica con Kotlin Multiplatform.",
        p3_title: "Crypto Tracker",
        p3_desc: "Monitoreo de criptomonedas con gráficos de alto rendimiento.",
        p4_title: "Fitness App",
        p4_desc: "Seguimiento de entrenamientos con WorkManager y Sensores.",
        p5_title: "News App",
        p5_desc: "Lector de noticias con Clean Architecture y paginación 3.",
        p6_title: "Task Manager",
        p6_desc: "Gestor de tareas con DataStore y Notificaciones Locales.",
        exp_date_1: "2022 - Presente",
        exp_desc_1: "Liderazgo técnico en aplicaciones móviles nativas. Implementación de Jetpack Compose y Clean Architecture para mejorar la escalabilidad y mantenibilidad.",
        exp_date_2: "2020 - 2022",
        exp_desc_2: "Desarrollo de módulos compartidos en Kotlin Multiplatform y optimización de consumo de red mediante Retrofit y Corrutinas.",
        spec_1: "Desarrollo Android Nativo",
        spec_2: "UI Declarativa (Compose)",
        spec_3: "Consumo de APIs REST",
        spec_4: "Persistencia de Datos (Room)",
        spec_5: "Testing (JUnit)"
    },
    en: {
        nav_about: "About Me",
        nav_tech: "Tech Stack",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_cv: "Download CV",
        badge_available: "Available for Android projects",
        about_title_1: "Hi, I am",
        about_title_2: "Android Developer.",
        about_desc: "Software Engineer focused on developing efficient, modern, and scalable mobile applications. Specialist in the Android ecosystem with Kotlin and robust architectures.",
        btn_contact: "Hire Me",
        btn_projects: "View Projects",
        tech_title: "Tech Stack",
        specialties_title: "Specialties",
        tools_title: "Other Tools",
        exp_title: "Android Experience",
        projects_title: "Android Projects",
        contact_title: "Let's Talk",
        contact_subtitle: "Tell me about your next big project.",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",
        footer_rights: "All rights reserved.",
        form_success_title: "Message Sent!",
        form_success_desc: "Thank you for reaching out. I will get back to you as soon as possible.",
        btn_close: "Close",
        p1_title: "Rick and Morty App",
        p1_desc: "Android app using Kotlin, Jetpack Compose and Retrofit.",
        p2_title: "Pokedex KMP",
        p2_desc: "Multiplatform app sharing logic with Kotlin Multiplatform.",
        p3_title: "Crypto Tracker",
        p3_desc: "Real-time crypto monitoring app with high-performance charts.",
        p4_title: "Fitness App",
        p4_desc: "Workout tracking with WorkManager and Sensors.",
        p5_title: "News App",
        p5_desc: "News reader with Clean Architecture and Paging 3.",
        p6_title: "Task Manager",
        p6_desc: "Task manager with DataStore and Local Notifications.",
        exp_date_1: "2022 - Present",
        exp_desc_1: "Technical leadership in native mobile apps. Implementation of Jetpack Compose and Clean Architecture to improve scalability and maintainability.",
        exp_date_2: "2020 - 2022",
        exp_desc_2: "Development of shared modules in Kotlin Multiplatform and network consumption optimization using Retrofit and Coroutines.",
        spec_1: "Native Android Development",
        spec_2: "Declarative UI (Compose)",
        spec_3: "REST API Consumption",
        spec_4: "Data Persistence (Room)",
        spec_5: "Testing (JUnit)"
    }
};

let currentLang = localStorage.getItem('lang') || 'es';
let isDarkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Initialize UI
function init() {
    updateLanguage();
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        updateThemeIcon();
    }
    lucide.createIcons();
    initTypewriter();
    initScrollToTop();
    initYear();
    initContactForm();
}

// Language Logic
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('lang-text').textContent = currentLang.toUpperCase();
}

// Dark Mode Logic
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (isDarkMode) {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

// Typewriter Effect
function initTypewriter() {
    const text = "Adrián Alvarez";
    const container = document.getElementById('typewriter');
    let i = 0;
    
    container.textContent = "";
    
    function type() {
        if (i < text.length) {
            container.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Scroll Logic
function initScrollToTop() {
    const btn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
            btn.classList.add('opacity-100', 'translate-y-0');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            btn.classList.remove('opacity-100', 'translate-y-0');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Modal Logic
function toggleModal(show) {
    const modal = document.getElementById('contact-modal');
    if (show) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.relative').classList.remove('scale-95');
        }, 10);
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('.relative').classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById('navbar');
    const overlay = document.getElementById('mobile-overlay');
    const icon = document.getElementById('menu-icon');
    
    nav.classList.toggle('open');
    overlay.classList.toggle('hidden');
    
    if (nav.classList.contains('open')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

function initYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const submitBtn = document.getElementById('form-submit-btn');
    const modalTitle = document.querySelector('#contact-modal h2');
    const modalSubtitle = document.querySelector('#contact-modal p');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            const data = await response.json();

            if (response.ok) {
                form.classList.add('hidden');
                modalTitle.classList.add('hidden');
                modalSubtitle.classList.add('hidden');
                successMsg.classList.remove('hidden');
                form.reset();
            } else {
                console.error("Formspree Error:", data);
                alert(currentLang === 'es' ? 'Hubo un error: ' + (data.error || 'Intenta de nuevo.') : 'There was an error: ' + (data.error || 'Please try again.'));
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert(currentLang === 'es' ? 'Error de conexión. Verifica tu internet.' : 'Connection error. Please check your internet.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = translations[currentLang].form_submit;
        }
    });
}

// Reset modal state when closed
const originalToggleModal = toggleModal;
toggleModal = function(show) {
    originalToggleModal(show);
    if (!show) {
        setTimeout(() => {
            const form = document.getElementById('contact-form');
            const successMsg = document.getElementById('form-success');
            const modalTitle = document.querySelector('#contact-modal h2');
            const modalSubtitle = document.querySelector('#contact-modal p');
            
            form.classList.remove('hidden');
            modalTitle.classList.remove('hidden');
            modalSubtitle.classList.remove('hidden');
            successMsg.classList.add('hidden');
        }, 300);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
