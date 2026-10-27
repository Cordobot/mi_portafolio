// Shared by index.html and proyecto.html: Material You palette, the browser toolbar color and the ripple.
// Material You: every accent shade keeps its lightness and chroma, only the hue changes
const EMERALD = { 50: [97.9, .021], 100: [95, .052], 200: [90.5, .093], 300: [84.5, .143], 400: [76.5, .177], 500: [69.6, .17], 600: [59.6, .145], 700: [50.8, .118], 800: [43.2, .095], 900: [37.8, .077], 950: [26.2, .051] };
const TEAL = { 50: [98.4, .014], 100: [95.3, .051], 200: [91, .096], 300: [85.5, .138], 400: [77.7, .152], 500: [70.4, .14], 600: [60, .118], 700: [51.1, .096], 800: [43.7, .078], 900: [38.6, .063], 950: [27.7, .046] };
const PALETTES = [
    { hue: 163, es: 'Esmeralda', en: 'Emerald' },
    { hue: 250, es: 'Azul', en: 'Blue' },
    { hue: 285, es: 'Índigo', en: 'Indigo' },
    { hue: 320, es: 'Magenta', en: 'Magenta' },
    { hue: 15, es: 'Coral', en: 'Coral' },
    { hue: 65, es: 'Ámbar', en: 'Amber' }
];

function applyPalette(hue) {
    const root = document.documentElement.style;
    if (hue === 163) {
        // Default palette: drop the overrides so Tailwind's own colors apply
        Object.keys(EMERALD).forEach(k => { root.removeProperty(`--color-emerald-${k}`); root.removeProperty(`--color-teal-${k}`); });
    } else {
        Object.entries(EMERALD).forEach(([k, [l, c]]) => root.setProperty(`--color-emerald-${k}`, `oklch(${l}% ${c} ${hue})`));
        Object.entries(TEAL).forEach(([k, [l, c]]) => root.setProperty(`--color-teal-${k}`, `oklch(${l}% ${c} ${hue + 20})`));
    }
    document.documentElement.dataset.hue = hue;
    updateThemeColorMeta();
}

function applySavedPalette() {
    let hue = 163;
    try { hue = Number(localStorage.getItem('palette')) || 163; } catch (e) { }
    applyPalette(hue);
}

// Android Chrome tints its own toolbar with this color
function updateThemeColorMeta() {
    const probe = document.createElement('span');
    probe.style.color = document.documentElement.classList.contains('dark') ? '#020617' : 'var(--color-emerald-600, #059669)';
    document.body.appendChild(probe);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = getComputedStyle(probe).color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    probe.remove();
    document.querySelector('meta[name="theme-color"]').setAttribute('content', `rgb(${r}, ${g}, ${b})`);
}

// Material ripple on every element marked with data-ripple
function initRipple() {
    document.addEventListener('pointerdown', e => {
        const host = e.target.closest('[data-ripple]');
        if (!host || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
        const rect = host.getBoundingClientRect();
        const size = Math.hypot(rect.width, rect.height) * 2;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        host.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
}
