// Case-study page: renders one project of PROJECTS, chosen with ?p=<slug>.
const CASE_TEXT = {
    es: {
        page: 'Caso de estudio',
        back: 'Volver a proyectos',
        problem: 'El problema',
        decisions: 'Decisiones técnicas',
        challenge: 'El reto más interesante',
        tests: 'Pruebas',
        no_tests: 'Este proyecto todavía no tiene pruebas automatizadas propias.',
        stack: 'Tecnologías',
        github: 'Ver el código en GitHub',
        apk: 'Descargar APK',
        scan: 'Escanéalo con tu Android',
        min_sdk: 'Android mínimo',
        tests_label: 'Pruebas',
        language: 'Lenguaje',
        next: 'Siguiente proyecto',
        previous: 'Proyecto anterior',
        not_found: 'No encontré ese proyecto.',
        signed: 'APK de demostración firmado con clave de desarrollo.'
    },
    en: {
        page: 'Case study',
        back: 'Back to projects',
        problem: 'The problem',
        decisions: 'Technical decisions',
        challenge: 'The most interesting challenge',
        tests: 'Tests',
        no_tests: 'This project has no automated tests of its own yet.',
        stack: 'Technologies',
        github: 'See the code on GitHub',
        apk: 'Download APK',
        scan: 'Scan it with your Android',
        min_sdk: 'Minimum Android',
        tests_label: 'Tests',
        language: 'Language',
        next: 'Next project',
        previous: 'Previous project',
        not_found: 'I could not find that project.',
        signed: 'Demo APK signed with a development key.'
    }
};
const ANDROID_VERSION = { 23: '6.0', 24: '7.0', 26: '8.0' };

let lang = 'es';
try { lang = localStorage.getItem('lang') || 'es'; } catch (e) { }

function slugFromUrl() {
    return new URLSearchParams(location.search).get('p');
}

function section(icon, title, body) {
    return `<section class="py-10 border-t border-slate-200 dark:border-slate-800">
        <h2 class="text-2xl font-bold mb-5 flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 flex items-center justify-center"><i data-lucide="${icon}" class="w-5 h-5"></i></span>${title}</h2>
        ${body}</section>`;
}

function render() {
    const T = CASE_TEXT[lang];
    const index = PROJECTS.findIndex(p => p.slug === slugFromUrl());
    const main = document.getElementById('case');
    document.documentElement.lang = lang;
    document.getElementById('lang-btn').textContent = lang.toUpperCase();
    document.getElementById('back-link').setAttribute('aria-label', T.back);

    if (index < 0) {
        main.innerHTML = `<p class="py-24 text-center text-lg">${T.not_found} <a class="text-emerald-600 font-bold" href="index.html#projects">${T.back}</a></p>`;
        lucide.createIcons();
        return;
    }
    const p = PROJECTS[index];
    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    document.title = `${p.name} · ${T.page} | Adrián Alvarez`;
    document.getElementById('bar-title').textContent = p.name;

    const device = p.frame === 'tv'
        ? `<div class="tv max-w-md"><div class="tv-screen"><img src="${p.cover}" alt="${p.name}" class="w-full aspect-video object-cover rounded"></div><div class="tv-stand"></div></div>`
        : `<div class="phone !h-[30rem] md:!h-[34rem]"><div class="phone-screen"><span class="phone-camera"></span>
            <video autoplay muted loop playsinline poster="assets/projects/video/${p.slug}.webp" aria-label="${p.name}">
            <source src="assets/projects/video/${p.slug}.mp4" type="video/mp4"></video></div></div>`;

    const apk = p.apk
        ? `<div class="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div class="hidden sm:block shrink-0 p-2 rounded-xl bg-white border border-slate-200"><img src="assets/qr/${p.slug}.svg" alt="QR" class="w-24 h-24"></div>
                <div class="flex flex-col gap-2">
                    <span class="hidden sm:block text-sm font-semibold">${T.scan}</span>
                    <a href="${p.apk}" data-ripple class="btn-filled !h-11"><i data-lucide="download" class="w-5 h-5"></i>${T.apk}</a>
                    <span class="text-xs text-slate-500">${T.signed}</span>
                </div>
            </div>`
        : (p.apkNote ? `<p class="p-4 rounded-2xl bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200 text-sm flex gap-3"><i data-lucide="info" class="w-5 h-5 shrink-0"></i>${p.apkNote[lang]}</p>` : '');

    const decisions = p.decisions[lang].map((d, i) => `
        <li class="min-w-0 flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">${i + 1}</span>
            <span class="min-w-0 [overflow-wrap:anywhere] text-slate-700 dark:text-slate-200 leading-relaxed">${d}</span></li>`).join('');

    const [challengeTitle, challengeBody] = p.challenge[lang];

    main.innerHTML = `
        <div class="grid md:grid-cols-2 gap-10 items-center py-10 md:py-16">
            <div class="device-stage !w-full !h-auto !py-10 rounded-[2rem]" style="--accent:${p.accent}">${device}</div>
            <div>
                <p class="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">${T.page}</p>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">${p.name}</h1>
                <p class="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">${p.desc[lang]}</p>
                <dl class="grid grid-cols-3 gap-2 mb-6">
                    <div class="stat-card"><dt>${T.min_sdk}</dt><dd class="!text-xl md:!text-2xl">${ANDROID_VERSION[p.minSdk]}</dd></div>
                    <div class="stat-card"><dt>${T.tests_label}</dt><dd class="!text-xl md:!text-2xl">${p.testCount || '—'}</dd></div>
                    <div class="stat-card"><dt>${T.language}</dt><dd class="!text-xl md:!text-2xl">Kotlin</dd></div>
                </dl>
                <div class="flex flex-wrap gap-1.5 mb-6">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                <div class="flex flex-col gap-4">
                    <a href="${p.repo}" target="_blank" rel="noopener" data-ripple class="btn-github self-start !h-11"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg><span>${T.github}</span></a>
                    ${apk}
                </div>
            </div>
        </div>
        ${section('target', T.problem, `<p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl">${p.problem[lang]}</p>`)}
        ${section('git-branch', T.decisions, `<ol class="grid grid-cols-1 md:grid-cols-2 gap-4">${decisions}</ol>`)}
        ${section('flame', T.challenge, `<div class="p-6 md:p-8 rounded-[2rem] text-white" style="background: linear-gradient(135deg, color-mix(in oklab, ${p.accent} 70%, #020617), #020617)">
            <h3 class="text-xl md:text-2xl font-bold mb-3">${challengeTitle}</h3>
            <p class="text-white/85 leading-relaxed max-w-3xl">${challengeBody}</p></div>`)}
        ${section('check-check', T.tests, `<p class="text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl">${p.tests ? p.tests[lang] : T.no_tests}</p>`)}
        <nav class="grid grid-cols-2 gap-4 pt-10 border-t border-slate-200 dark:border-slate-800">
            <a href="proyecto.html?p=${prev.slug}" data-ripple class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-colors">
                <span class="text-xs text-slate-500 flex items-center gap-1"><i data-lucide="arrow-left" class="w-3 h-3"></i>${T.previous}</span>
                <span class="block font-bold text-lg">${prev.name}</span></a>
            <a href="proyecto.html?p=${next.slug}" data-ripple class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-colors text-right">
                <span class="text-xs text-slate-500 flex items-center gap-1 justify-end">${T.next}<i data-lucide="arrow-right" class="w-3 h-3"></i></span>
                <span class="block font-bold text-lg">${next.name}</span></a>
        </nav>`;
    lucide.createIcons();
}

function toggleCaseLanguage() {
    lang = lang === 'es' ? 'en' : 'es';
    try { localStorage.setItem('lang', lang); } catch (e) { }
    render();
}

function toggleCaseTheme() {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { }
    updateThemeIcon();
    updateThemeColorMeta();
}

function updateThemeIcon() {
    document.getElementById('theme-icon').setAttribute('data-lucide', document.documentElement.classList.contains('dark') ? 'sun' : 'moon');
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    let theme = null;
    try { theme = localStorage.getItem('theme'); } catch (e) { }
    if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    applySavedPalette();
    document.getElementById('year').textContent = new Date().getFullYear();
    initRipple();
    render();
    updateThemeIcon();
});
