const translations = {
    es: {
        nav_about: "Quién Soy",
        nav_tech: "Tecnologías",
        nav_exp: "Experiencia",
        nav_projects: "Proyectos",
        nav_arch: "Arquitectura",
        nav_contact: "Contacto",
        nav_cv: "Descargar CV",
        bnav_home: "Inicio",
        bnav_stack: "Stack",
        bnav_apps: "Apps",
        bnav_code: "Código",
        bnav_more: "Más",
        palette_title: "Color del tema",
        badge_available: "Disponible para proyectos Android",
        about_title_1: "Hola, soy",
        about_title_2: "Android Developer.",
        about_desc: "Ingeniero de Software enfocado en el desarrollo de aplicaciones móviles eficientes, modernas y escalables. Especialista en el ecosistema Android con Kotlin y arquitecturas robustas.",
        stat_apps: "Apps Android",
        stat_apks: "APK instalables",
        stat_tests: "Pruebas automatizadas",
        btn_contact: "Contrátame",
        btn_projects: "Ver Proyectos",
        tech_title: "Stack Tecnológico",
        tech_hint: "Toca una tecnología para ver los proyectos donde la uso.",
        libs_title: "Jetpack y librerías",
        specialties_title: "Especialidades",
        tools_title: "Otras Herramientas",
        exp_title: "Experiencia Android",
        projects_title: "Proyectos Android",
        projects_hint: "Pasa el cursor sobre una app para verla funcionando. Cada una tiene su caso de estudio y las que lo permiten se instalan con un QR.",
        projects_hint_touch: "Desliza para ver cada app funcionando. Toca una para leer su caso de estudio o instalarla.",
        arch_title: "Cómo construyo una app",
        arch_desc: "Todas mis apps siguen la misma idea: la interfaz solo dibuja un estado, el dominio no sabe nada de Android y los datos pueden venir de la red o de la caché sin que el resto de la app se entere.",
        layer_ui: "Presentación",
        layer_ui_desc: "Dibuja un UiState inmutable y envía eventos. Sin lógica de negocio.",
        layer_domain: "Dominio",
        layer_domain_desc: "Kotlin puro: reglas de negocio e interfaces. Se prueba con JUnit sin emulador.",
        layer_data: "Datos",
        layer_data_desc: "Una sola fuente de verdad: primero la caché local, después la red.",
        link_1: "↓ casos de uso · ↑ Flow<T>",
        link_2: "implementa las interfaces del dominio",
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
        exp_date_1: "Agosto 2021 - Presente",
        exp_job_1: "Desarrollador de software",
        exp_comp_1: "Freelance | Independiente",
        exp_desc_1: "Desarrollo en Java y Kotlin, aplicando MVVM y Clean Architecture. Uso avanzado de Android SDK, Jetpack y Compose. Integración con APIs REST y Firebase.",
        exp_date_2: "Febrero 2021 - Marzo 2024",
        exp_job_2: "Asesor soporte técnico",
        exp_comp_2: "Webhelp",
        exp_desc_2: "Soporte técnico y atención al cliente para herramientas y servicios digitales.",
        exp_date_3: "Agosto 2020 - Agosto 2021",
        exp_job_3: "Junior Web Developer",
        exp_comp_3: "Target Medios",
        exp_desc_3: "Desarrollo full-stack de aplicaciones usando HTML5, NodeJS, React y Kotlin. Gestión de bases de datos relacionales y optimización de rendimiento. Implementación de pruebas unitarias con JUnit y Espresso.",
        spec_1: "Desarrollo Android nativo con Kotlin",
        spec_2: "UI declarativa con Compose y Material 3",
        spec_3: "APIs REST y Firebase en tiempo real",
        spec_4: "Apps offline-first con Room y DataStore",
        spec_5: "Pruebas con JUnit, MockK y Compose UI Test",
        spec_6: "Trabajo en segundo plano: WorkManager y alarmas",
        btn_view_github: "Ver en GitHub",
        // Strings used only from JavaScript
        filter_all: "Todos",
        projects_count: n => n === 1 ? "1 proyecto" : `${n} proyectos`,
        tests_count: n => `${n} pruebas`,
        case_study: "Caso de estudio",
        install_apk: "Instalar APK",
        demo: "Demo",
        apk_title: name => `Instalar ${name}`,
        apk_scan: "Escanéalo con la cámara de tu Android para descargarlo.",
        apk_download: size => `Descargar APK · ${size} MB`,
        apk_android: (version, sdk) => `Android ${version} o superior (minSdk ${sdk})`,
        apk_signed: "APK de demostración firmado con clave de desarrollo; no está en Google Play.",
        apk_unknown: "Android te pedirá permitir \"Instalar apps desconocidas\".",
        apk_none: "Sin APK público",
        see_code: "Ver el código",
        snack_email: "Correo copiado al portapapeles",
        snack_download: name => `Descargando ${name}.apk`,
        snack_color: name => `Color del tema: ${name}`,
        snack_filter: (tag, n) => `${tag}: ${n === 1 ? "1 proyecto" : n + " proyectos"}`,
        snack_sent: "Mensaje enviado. ¡Gracias!",
        snack_error: "No se pudo enviar el mensaje. Intenta de nuevo.",
        snack_offline: "Sin conexión. Revisa tu internet.",
        snack_undo: "Deshacer",
        sending: "Enviando..."
    },
    en: {
        nav_about: "About Me",
        nav_tech: "Tech Stack",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_arch: "Architecture",
        nav_contact: "Contact",
        nav_cv: "Download CV",
        bnav_home: "Home",
        bnav_stack: "Stack",
        bnav_apps: "Apps",
        bnav_code: "Code",
        bnav_more: "More",
        palette_title: "Theme color",
        badge_available: "Available for Android projects",
        about_title_1: "Hi, I am",
        about_title_2: "Android Developer.",
        about_desc: "Software Engineer focused on developing efficient, modern, and scalable mobile applications. Specialist in the Android ecosystem with Kotlin and robust architectures.",
        stat_apps: "Android apps",
        stat_apks: "Installable APKs",
        stat_tests: "Automated tests",
        btn_contact: "Hire Me",
        btn_projects: "View Projects",
        tech_title: "Tech Stack",
        tech_hint: "Tap a technology to see the projects where I use it.",
        libs_title: "Jetpack and libraries",
        specialties_title: "Specialties",
        tools_title: "Other Tools",
        exp_title: "Android Experience",
        projects_title: "Android Projects",
        projects_hint: "Hover over an app to see it running. Each one has a case study, and those that can be installed come with a QR code.",
        projects_hint_touch: "Scroll to see each app running. Tap one to read its case study or install it.",
        arch_title: "How I build an app",
        arch_desc: "All my apps follow the same idea: the UI only draws a state, the domain knows nothing about Android, and data can come from the network or the cache without the rest of the app noticing.",
        layer_ui: "Presentation",
        layer_ui_desc: "Draws an immutable UiState and sends events. No business logic.",
        layer_domain: "Domain",
        layer_domain_desc: "Pure Kotlin: business rules and interfaces. Tested with JUnit, no emulator.",
        layer_data: "Data",
        layer_data_desc: "A single source of truth: local cache first, then the network.",
        link_1: "↓ use cases · ↑ Flow<T>",
        link_2: "implements the domain interfaces",
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
        exp_date_1: "August 2021 - Present",
        exp_job_1: "Software Developer",
        exp_comp_1: "Freelance | Independent",
        exp_desc_1: "Development in Java and Kotlin, applying MVVM and Clean Architecture. Advanced use of Android SDK, Jetpack, and Compose. Integration with REST APIs and Firebase.",
        exp_date_2: "February 2021 - March 2024",
        exp_job_2: "Technical Support Advisor",
        exp_comp_2: "Webhelp",
        exp_desc_2: "Technical support and customer service for digital tools and services.",
        exp_date_3: "August 2020 - August 2021",
        exp_job_3: "Junior Web Developer",
        exp_comp_3: "Target Medios",
        exp_desc_3: "Full-stack application development using HTML5, NodeJS, React, and Kotlin. Relational database management and performance optimization. Implementation of unit tests with JUnit and Espresso.",
        spec_1: "Native Android development with Kotlin",
        spec_2: "Declarative UI with Compose and Material 3",
        spec_3: "REST APIs and real-time Firebase",
        spec_4: "Offline-first apps with Room and DataStore",
        spec_5: "Testing with JUnit, MockK and Compose UI Test",
        spec_6: "Background work: WorkManager and alarms",
        btn_view_github: "View on GitHub",
        filter_all: "All",
        projects_count: n => n === 1 ? "1 project" : `${n} projects`,
        tests_count: n => `${n} tests`,
        case_study: "Case study",
        install_apk: "Install APK",
        demo: "Demo",
        apk_title: name => `Install ${name}`,
        apk_scan: "Scan it with your Android camera to download it.",
        apk_download: size => `Download APK · ${size} MB`,
        apk_android: (version, sdk) => `Android ${version} or later (minSdk ${sdk})`,
        apk_signed: "Demo APK signed with a development key; not on Google Play.",
        apk_unknown: "Android will ask you to allow \"Install unknown apps\".",
        apk_none: "No public APK",
        see_code: "See the code",
        snack_email: "Email copied to clipboard",
        snack_download: name => `Downloading ${name}.apk`,
        snack_color: name => `Theme color: ${name}`,
        snack_filter: (tag, n) => `${tag}: ${n === 1 ? "1 project" : n + " projects"}`,
        snack_sent: "Message sent. Thank you!",
        snack_error: "The message could not be sent. Please try again.",
        snack_offline: "You are offline. Check your connection.",
        snack_undo: "Undo",
        sending: "Sending..."
    }
};

let currentLang = localStorage.getItem('lang') || 'es';
let isDarkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
let activeFilter = 'all';

const t = key => translations[currentLang][key];
const ANDROID_VERSION = { 23: '6.0', 24: '7.0', 26: '8.0' };
const APK_SIZE_MB = { pokeverse: 11.6, criptopulse: 12.0, enfoca: 11.5, scanvault: 33.2, arbarrio: 19.8, pronostika: 7.3 };
const GITHUB_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';

// Initialize UI
function init() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    applySavedPalette();
    startIntro();
    renderTech();
    renderFilters();
    renderProjects();
    renderCode(0);
    renderPalette();
    updateLanguage();
    updateThemeIcon();
    initScrollToTop();
    initScrollSpy();
    initStatusBar();
    initRipple();
    initYear();
    initContactForm();
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeApkSheet(); });
}

// Intro Logic
function startIntro() {
    const loader = document.getElementById('intro-loader');
    const portal = document.getElementById('intro-portal');
    const name = document.getElementById('intro-name');
    const sub = document.getElementById('intro-sub');

    createFragments();

    // 1. Reveal Portal
    setTimeout(() => {
        portal.classList.add('active');
    }, 400);

    // 2. Reveal Name
    setTimeout(() => {
        name.classList.add('active');
    }, 1200);

    // 3. Reveal Subtitle
    setTimeout(() => {
        sub.classList.add('active');
    }, 1800);

    // 4. Final Reveal (Portal expansion)
    setTimeout(() => {
        loader.classList.add('reveal');
        document.body.classList.remove('overflow-hidden');

        // Start hero typewriter slightly after
        setTimeout(() => {
            initTypewriter();
        }, 800);
    }, 4000);
}

function createFragments() {
    const container = document.getElementById('intro-fragments');
    const snippets = [
        "val intent = Intent()",
        "fun onCreate() { }",
        "@Composable",
        "remember { mutableStateOf() }",
        "viewModelScope.launch { }",
        "HiltAndroidApp",
        "Room.databaseBuilder()",
        "flow.collect { }",
        "override fun onStart()",
        "data class User(val id: Int)",
        "Retrofit.Builder()",
        "AndroidSDK.version >= 34",
        "Jetpack Navigation",
        "suspend fun fetch()",
        "Modifier.fillMaxSize()",
        "println(\"Hello Kotlin!\")",
        "binding.root",
        "lifecycleScope"
    ];

    const fragment = document.createDocumentFragment();
    const isMobile = window.innerWidth < 768;
    const fragmentCount = isMobile ? 20 : 50;

    for (let i = 0; i < fragmentCount; i++) {
        const span = document.createElement('span');
        span.className = 'intro-fragment';
        span.textContent = snippets[Math.floor(Math.random() * snippets.length)];

        const colors = ['#3b82f6', '#22d3ee', '#a855f7', '#4ade80'];
        span.style.color = colors[Math.floor(Math.random() * colors.length)];

        const startX = Math.random() * 100 + "vw";
        const startY = Math.random() * 100 + "vh";
        const endX = (Math.random() * 80 + 10) + "vw";
        const endY = (Math.random() * 80 + 10) + "vh";

        span.style.setProperty('--start-x', startX);
        span.style.setProperty('--start-y', startY);
        span.style.setProperty('--end-x', endX);
        span.style.setProperty('--end-y', endY);

        span.style.left = "0";
        span.style.top = "0";
        span.style.animationDuration = (Math.random() * 4 + 3) + "s";
        span.style.animationDelay = (Math.random() * 3) + "s";
        span.style.fontSize = (Math.random() * 0.4 + 0.4) + "rem";
        span.style.opacity = Math.random() * 0.5 + 0.2;

        fragment.appendChild(span);
    }
    container.appendChild(fragment);
}

// Language Logic
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    document.documentElement.lang = currentLang;
    const touch = !matchMedia('(hover: hover)').matches;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (touch && t(key + '_touch')) key += '_touch';
        const value = t(key);
        if (typeof value === 'string') el.textContent = value;
    });
    document.getElementById('lang-text').textContent = currentLang.toUpperCase();
    // Pieces rendered from data carry their own text
    renderTech();
    renderFilters();
    renderProjects();
    renderCode(currentSnippet);
}

// Dark Mode Logic
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
    updateThemeColorMeta();
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

function renderPalette() {
    const container = document.getElementById('palette-swatches');
    const current = Number(document.documentElement.dataset.hue);
    container.innerHTML = PALETTES.map(p => `
        <button type="button" data-hue="${p.hue}" aria-label="${p[currentLang]}" title="${p[currentLang]}" aria-pressed="${p.hue === current}"
            class="w-7 h-7 rounded-full ring-offset-2 ring-offset-white dark:ring-offset-slate-900 transition-transform hover:scale-110 cursor-pointer ${p.hue === current ? 'ring-2 ring-slate-900 dark:ring-white' : ''}"
            style="background: oklch(62% 0.16 ${p.hue})"></button>`).join('');
    container.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
        const hue = Number(btn.dataset.hue);
        const previous = Number(document.documentElement.dataset.hue);
        applyPalette(hue);
        try { localStorage.setItem('palette', hue); } catch (e) { }
        renderPalette();
        const palette = PALETTES.find(p => p.hue === hue);
        showSnackbar(t('snack_color')(palette[currentLang]), t('snack_undo'), () => {
            applyPalette(previous);
            try { localStorage.setItem('palette', previous); } catch (e) { }
            renderPalette();
        });
    }));
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

// Android status bar: real time and, where the browser allows it, the real battery level
function initStatusBar() {
    const time = document.getElementById('status-time');
    const tick = () => {
        time.textContent = new Date().toLocaleTimeString(currentLang === 'es' ? 'es-CO' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    tick();
    setInterval(tick, 15000);

    if (!navigator.getBattery) return;
    navigator.getBattery().then(battery => {
        const label = document.getElementById('status-battery');
        const icon = document.getElementById('status-battery-icon');
        const update = () => {
            const level = Math.round(battery.level * 100);
            label.textContent = `${level}%`;
            label.classList.remove('hidden');
            const name = battery.charging ? 'battery-charging' : level > 70 ? 'battery-full' : level > 35 ? 'battery-medium' : 'battery-low';
            const fresh = document.createElement('i');
            fresh.id = 'status-battery-icon';
            fresh.className = 'w-4 h-4';
            fresh.setAttribute('data-lucide', name);
            document.getElementById('status-battery-icon').replaceWith(fresh);
            lucide.createIcons();
        };
        update();
        battery.addEventListener('levelchange', update);
        battery.addEventListener('chargingchange', update);
    }).catch(() => { });
}

// Snackbar
let snackbarTimer;
function showSnackbar(message, actionLabel, action) {
    const bar = document.getElementById('snackbar');
    const button = document.getElementById('snackbar-action');
    document.getElementById('snackbar-text').textContent = message;
    if (actionLabel) {
        button.textContent = actionLabel;
        button.classList.remove('hidden');
        button.onclick = () => { action(); bar.classList.remove('show'); };
    } else {
        button.classList.add('hidden');
    }
    bar.classList.add('show');
    clearTimeout(snackbarTimer);
    snackbarTimer = setTimeout(() => bar.classList.remove('show'), 4000);
}

function copyEmail() {
    navigator.clipboard.writeText('Adnalvarez95@gmail.com').then(() => showSnackbar(t('snack_email')));
}

// Technology cards
function projectsWithTag(tag) {
    return tag ? PROJECTS.filter(p => p.tags.includes(tag)).length : PROJECTS.length;
}

function logoSvg(logo, size) {
    const color = logo.color || 'currentColor';
    return `<svg viewBox="0 0 24 24" class="${size} transition-transform group-hover:scale-110" fill="${color}" aria-hidden="true"><path d="${logo.path}"/></svg>`;
}

function renderTech() {
    document.getElementById('tech-logos').innerHTML = TECH_LOGOS.map(logo => {
        const count = logo.tag || logo.all ? projectsWithTag(logo.tag) : 0;
        const inner = `${logoSvg(logo, 'w-8 h-8 md:w-11 md:h-11 text-slate-800 dark:text-white')}
            <span class="text-[11px] md:text-sm font-bold text-center leading-tight">${logo.name}</span>
            ${count ? `<span class="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">${t('projects_count')(count)}</span>` : ''}`;
        return logo.tag
            ? `<button type="button" class="tech-logo group" data-ripple data-tag="${logo.tag}">${inner}</button>`
            : `<div class="tech-logo group">${inner}</div>`;
    }).join('');

    document.getElementById('tech-libs').innerHTML = LIBRARIES.map(lib => {
        const count = lib.tag ? projectsWithTag(lib.tag) : 0;
        const inner = `<i data-lucide="${lib.icon}" class="w-4 h-4 text-emerald-600 dark:text-emerald-400"></i>${lib.name}${count ? `<span class="ml-1 px-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">${count}</span>` : ''}`;
        return lib.tag
            ? `<button type="button" class="lib-pill" data-ripple data-tag="${lib.tag}">${inner}</button>`
            : `<span class="lib-pill">${inner}</span>`;
    }).join('');

    document.getElementById('tool-logos').innerHTML = TOOL_LOGOS.map(logo => `
        <div class="tech-logo group !p-4">${logoSvg(logo, 'w-7 h-7 text-slate-800 dark:text-white')}
            <span class="text-xs font-bold text-center">${logo.name}</span></div>`).join('');

    document.querySelectorAll('#tech [data-tag]').forEach(el => el.addEventListener('click', () => {
        setFilter(el.dataset.tag, true);
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }));
    lucide.createIcons();
}

// Project filters
function tagLabel(tag) {
    return (PROJECT_TAG_LABELS[currentLang] || {})[tag] || tag;
}

function renderFilters() {
    const tags = PROJECT_FILTERS.includes(activeFilter) || activeFilter === 'all' ? PROJECT_FILTERS : [activeFilter, ...PROJECT_FILTERS];
    const chip = (value, label, count) => {
        const pressed = value === activeFilter;
        return `<button type="button" class="chip" data-ripple data-filter="${value}" aria-pressed="${pressed}">
            ${pressed ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}${label}<span class="chip-count">${count}</span></button>`;
    };
    const container = document.getElementById('project-filters');
    container.innerHTML = chip('all', t('filter_all'), PROJECTS.length) +
        tags.map(tag => chip(tag, tagLabel(tag), projectsWithTag(tag))).join('');
    container.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));
    lucide.createIcons();
}

function setFilter(value, announce) {
    activeFilter = activeFilter === value && value !== 'all' ? 'all' : value;
    renderFilters();
    document.querySelectorAll('.project-card').forEach(card => {
        const project = PROJECTS.find(p => p.slug === card.dataset.slug);
        const visible = activeFilter === 'all' || project.tags.includes(activeFilter);
        card.classList.toggle('is-hidden', !visible);
        if (visible) {
            card.classList.remove('is-entering');
            void card.offsetWidth;
            card.classList.add('is-entering');
        }
    });
    if (announce && activeFilter !== 'all') {
        showSnackbar(t('snack_filter')(tagLabel(activeFilter), projectsWithTag(activeFilter)));
    }
}

// Project cards
function deviceMarkup(p) {
    if (p.frame === 'tv') {
        return `<div class="tv"><div class="tv-screen"><img src="${p.cover}" alt="${p.name}" loading="lazy" class="w-full aspect-video object-cover rounded"></div><div class="tv-stand"></div></div>`;
    }
    return `<div class="phone"><div class="phone-screen"><span class="phone-camera"></span>
        <video muted loop playsinline preload="none" poster="assets/projects/video/${p.slug}.webp" aria-label="${p.name}">
            <source src="assets/projects/video/${p.slug}.mp4" type="video/mp4"></video></div></div>
        <span class="demo-badge"><i data-lucide="play" class="w-3 h-3 fill-current"></i>${t('demo')}</span>`;
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = PROJECTS.map(p => {
        const hidden = activeFilter !== 'all' && !p.tags.includes(activeFilter);
        const tags = p.tags.filter(tag => tag !== 'Tests').slice(0, 4).map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join('');
        const tests = p.testCount ? `<span class="tag !bg-emerald-50 !text-emerald-700 dark:!bg-emerald-900/40 dark:!text-emerald-300"><i data-lucide="check-check" class="w-3 h-3"></i>${t('tests_count')(p.testCount)}</span>` : '';
        return `<article class="project-card group ${hidden ? 'is-hidden' : ''}" data-slug="${p.slug}">
            <a href="proyecto.html?p=${p.slug}" class="device-stage" style="--accent:${p.accent}" aria-label="${t('case_study')}: ${p.name}">${deviceMarkup(p)}</a>
            <div class="p-4 sm:p-6 flex flex-col flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                    <h3 class="text-lg sm:text-xl font-bold truncate">${p.name}</h3>
                    <span class="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">minSdk ${p.minSdk}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">${p.desc[currentLang]}</p>
                <div class="flex flex-wrap gap-1.5 mb-4">${tests}${tags}</div>
                <div class="mt-auto flex flex-wrap items-center gap-2">
                    <a href="proyecto.html?p=${p.slug}" data-ripple class="btn-tonal !h-9 sm:!h-10 !px-3 sm:!px-4">${t('case_study')}<i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                    <a href="${p.repo}" target="_blank" rel="noopener" data-ripple class="icon-btn !w-9 !h-9 sm:!w-10 sm:!h-10" aria-label="${t('btn_view_github')}" title="${t('btn_view_github')}">${GITHUB_ICON}</a>
                    <button type="button" data-apk="${p.slug}" data-ripple class="icon-btn !w-9 !h-9 sm:!w-10 sm:!h-10" aria-label="${t('install_apk')}" title="${p.apk ? t('install_apk') : t('apk_none')}">
                        <i data-lucide="${p.apk ? 'download' : 'info'}" class="w-4 h-4"></i></button>
                </div>
            </div>
        </article>`;
    }).join('');
    grid.querySelectorAll('[data-apk]').forEach(btn => btn.addEventListener('click', () => openApkSheet(btn.dataset.apk)));
    lucide.createIcons();
    initProjectVideos();
}

// Videos play on hover with a mouse, and while visible on touch screens
let videoObserver;
function initProjectVideos() {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = matchMedia('(hover: hover)').matches;
    if (videoObserver) videoObserver.disconnect();
    if (reduceMotion) return;
    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        if (canHover) {
            card.addEventListener('mouseenter', () => video.play().catch(() => { }));
            card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
        }
    });
    if (canHover) return;
    videoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (!video) return;
        if (entry.intersectionRatio >= 0.6) video.play().catch(() => { });
        else video.pause();
    }), { threshold: [0, 0.6] });
    document.querySelectorAll('.project-card').forEach(card => videoObserver.observe(card));
}

// APK bottom sheet
function openApkSheet(slug) {
    const p = PROJECTS.find(project => project.slug === slug);
    const content = document.getElementById('apk-sheet-content');
    if (p.apk) {
        content.innerHTML = `
            <h2 id="apk-title" class="text-2xl font-bold mb-1">${t('apk_title')(p.name)}</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-5">${p.desc[currentLang]}</p>
            <div class="hidden md:flex flex-col items-center gap-3 mb-5">
                <div class="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm"><img src="assets/qr/${p.slug}.svg" alt="QR ${p.name}" class="w-44 h-44"></div>
                <p class="text-xs text-slate-500 text-center">${t('apk_scan')}</p>
            </div>
            <a href="${p.apk}" data-ripple class="btn-filled w-full mb-5" id="apk-download">
                <i data-lucide="download" class="w-5 h-5"></i>${t('apk_download')(APK_SIZE_MB[p.slug])}</a>
            <ul class="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li class="flex gap-3"><i data-lucide="smartphone" class="w-4 h-4 shrink-0 mt-0.5 text-emerald-600"></i>${t('apk_android')(ANDROID_VERSION[p.minSdk], p.minSdk)}</li>
                <li class="flex gap-3"><i data-lucide="shield-check" class="w-4 h-4 shrink-0 mt-0.5 text-emerald-600"></i>${t('apk_signed')}</li>
                <li class="flex gap-3"><i data-lucide="settings-2" class="w-4 h-4 shrink-0 mt-0.5 text-emerald-600"></i>${t('apk_unknown')}</li>
            </ul>`;
        content.querySelector('#apk-download').addEventListener('click', () => showSnackbar(t('snack_download')(p.name.replace('ó', 'o'))));
    } else {
        content.innerHTML = `
            <h2 id="apk-title" class="text-2xl font-bold mb-1">${p.name}</h2>
            <p class="text-sm font-semibold text-slate-500 mb-4">${t('apk_none')}</p>
            <p class="text-slate-600 dark:text-slate-300 mb-6">${p.apkNote ? p.apkNote[currentLang] : ''}</p>
            <a href="${p.repo}" target="_blank" rel="noopener" data-ripple class="btn-filled w-full">${GITHUB_ICON}${t('see_code')}</a>`;
    }
    lucide.createIcons();
    const sheet = document.getElementById('apk-sheet');
    sheet.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('open')));
}

function closeApkSheet() {
    const sheet = document.getElementById('apk-sheet');
    if (sheet.classList.contains('hidden')) return;
    sheet.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => sheet.classList.add('hidden'), 350);
}

// Architecture: Kotlin code viewer
let currentSnippet = 0;
const KOTLIN_KEYWORDS = new Set(['fun', 'val', 'var', 'override', 'suspend', 'return', 'if', 'else', 'while', 'for', 'in', 'is', 'class', 'object', 'private', 'true', 'false', 'null', 'to']);

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightKotlin(code) {
    const token = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(@[A-Za-z]+)|\b(\d+L?)\b|\b([A-Za-z_][A-Za-z0-9_]*)\b(\s*(?=[({<]))?/g;
    let out = '', last = 0, match;
    while ((match = token.exec(code))) {
        out += escapeHtml(code.slice(last, match.index));
        const [whole, comment, string, annotation, number, word] = match;
        if (comment) out += `<span class="c">${escapeHtml(comment)}</span>`;
        else if (string) out += `<span class="s">${escapeHtml(string)}</span>`;
        else if (annotation) out += `<span class="a">${annotation}</span>`;
        else if (number) out += `<span class="n">${number}</span>`;
        else if (KOTLIN_KEYWORDS.has(word)) out += `<span class="k">${word}</span>${escapeHtml(whole.slice(word.length))}`;
        else if (/^[a-z]/.test(word) && match[6] !== undefined && /\(|\{/.test(code[match.index + whole.length] || '')) out += `<span class="f">${word}</span>${escapeHtml(whole.slice(word.length))}`;
        else if (/^[A-Z][A-Z_]+$/.test(word)) out += `<span class="t">${word}</span>`;
        else out += escapeHtml(whole);
        last = match.index + whole.length;
    }
    return out + escapeHtml(code.slice(last));
}

function renderCode(index) {
    currentSnippet = index;
    const snippet = SNIPPETS[index];
    const tabs = document.getElementById('code-tabs');
    tabs.innerHTML = SNIPPETS.map((s, i) => `
        <button type="button" role="tab" class="code-tab" data-ripple data-index="${i}" aria-selected="${i === index}">
            <span class="w-2 h-2 rounded-sm bg-[#7f52ff]"></span>${s.file}</button>`).join('');
    tabs.querySelectorAll('[data-index]').forEach(btn => btn.addEventListener('click', () => renderCode(Number(btn.dataset.index))));
    document.getElementById('code-view').innerHTML = highlightKotlin(snippet.code);
    document.getElementById('code-path').textContent = `${snippet.project} › ${snippet.layer} › ${snippet.file}`;
    document.getElementById('code-note').textContent = `${snippet.project}: ${snippet.note[currentLang]}`;
    document.querySelectorAll('.arch-layer').forEach(layer => layer.classList.toggle('is-active', layer.dataset.layer === snippet.layer));
}

// Scroll Logic
function initScrollToTop() {
    const btn = document.getElementById('scroll-to-top');
    const fab = document.getElementById('fab-contact');
    let ticking = false;
    let lastY = window.pageYOffset;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const y = window.pageYOffset;
                const show = y > 300;
                btn.classList.toggle('opacity-0', !show);
                btn.classList.toggle('pointer-events-none', !show);
                btn.classList.toggle('translate-y-6', !show);
                // Material 3: the extended FAB shrinks while scrolling down and grows back going up
                if (Math.abs(y - lastY) > 8) {
                    fab.classList.toggle('collapsed', y > lastY && y > 200);
                    lastY = y;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Highlights the current section in the bottom navigation and the side navigation
function initScrollSpy() {
    const sections = ['about', 'tech', 'experience', 'projects', 'arch'].map(id => document.getElementById(id));
    const bottomTarget = { about: 'about', tech: 'tech', experience: 'tech', projects: 'projects', arch: 'arch' };
    const observer = new IntersectionObserver(entries => {
        entries.filter(e => e.isIntersecting).forEach(entry => {
            const id = entry.target.id;
            document.querySelectorAll('.bnav-item[data-nav]').forEach(item => item.classList.toggle('active', item.dataset.nav === bottomTarget[id]));
            document.querySelectorAll('#navbar a[href^="#"]').forEach(link => link.classList.toggle('nav-active', link.getAttribute('href') === `#${id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(section => observer.observe(section));
}

// Modal Logic
function toggleModal(show) {
    const modal = document.getElementById('contact-modal');
    if (show) {
        document.body.classList.add('overflow-hidden');
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.relative').classList.remove('scale-95');
        }, 10);
    } else {
        document.body.classList.remove('overflow-hidden');
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
        document.body.classList.add('overflow-hidden');
        icon.setAttribute('data-lucide', 'x');
    } else {
        document.body.classList.remove('overflow-hidden');
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
        submitBtn.textContent = t('sending');

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
                showSnackbar(t('snack_sent'));
            } else {
                console.error("Formspree Error:", data);
                showSnackbar(data.error || t('snack_error'));
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            showSnackbar(t('snack_offline'));
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = t('form_submit');
        }
    });
}

// Reset modal state when closed
const originalToggleModal = toggleModal;
toggleModal = function (show) {
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
