// Technology Background Animation
const techBg = document.getElementById('tech-bg');
const techTerms = ['HTML', 'CSS', 'JS', 'React', 'Node', 'API', 'UI/UX', 'Git'];
for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = techTerms[Math.floor(Math.random() * techTerms.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = Math.random() * 10 + 10 + 's';
    span.style.animationDelay = Math.random() * 5 + 's';
    techBg.appendChild(span);
}

// Coding Animation for Header
const codeBg = document.getElementById('code-bg');
const codeSnippets = [
    'function hello() {',
    'console.log("Hello");',
    'let x = 10;',
    'if (true) {',
    'return result;',
    'const data = [];',
    'div.style.display',
    'window.onload ='
];
for (let i = 0; i < 15; i++) {
    const span = document.createElement('span');
    span.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = Math.random() * 5 + 5 + 's';
    span.style.animationDelay = Math.random() * 3 + 's';
    codeBg.appendChild(span);
}

// Theme Switcher
const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', (e) => {
    const theme = e.target.value;
    document.body.className = theme === 'system' ? 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 
        theme;
});

// Language Switcher
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-en]').forEach(elem => {
        elem.textContent = elem.dataset[lang];
    });
});

// Set Default Language to Khmer
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-en]').forEach(elem => {
        elem.textContent = elem.dataset['kh'];
    });
});

// System Theme Detection
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (themeSelect.value === 'system') {
        document.body.className = e.matches ? 'dark' : 'light';
    }
});

// Scroll and Navigation Animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const skillItems = document.querySelectorAll('.skill-item');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    // Initial header animation
    setTimeout(() => header.classList.add('active'), 500);

    // Scroll Animation Handler
    const revealElements = () => {
        const windowHeight = window.innerHeight;
        
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });

        skillItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 50) {
                setTimeout(() => item.classList.add('visible'), index * 100);
            }
        });
    };

    // Navigation Click Handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Pulse animation on target section
            targetSection.style.transition = 'transform 0.5s ease';
            targetSection.style.transform = 'scale(1.02)';
            setTimeout(() => {
                targetSection.style.transform = 'scale(1)';
            }, 500);
        });
    });

    // Event Listeners
    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check
});