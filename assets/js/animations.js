/* ============================================================
   ANIMATIONS.JS — Scroll reveal + counter animations
   ============================================================ */

(function () {

    /* ---- INTERSECTION OBSERVER SCROLL REVEAL ---- */
    function initReveal() {
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        elements.forEach(el => observer.observe(el));
    }

    /* ---- COUNTER ANIMATION ---- */
    function animateCounter(el, target, duration = 1800) {
        const start = performance.now();
        const isDecimal = target % 1 !== 0;

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el.textContent = isDecimal
                ? current.toFixed(1)
                : Math.floor(current).toLocaleString('en-IN');
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    const target = parseFloat(entry.target.dataset.counter);
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        counters.forEach(el => observer.observe(el));
    }

    /* ---- STAGGERED CARD REVEAL ---- */
    function initStaggeredCards() {
        const groups = document.querySelectorAll('[data-stagger]');
        groups.forEach(group => {
            const children = group.children;
            Array.from(children).forEach((child, i) => {
                child.classList.add('reveal');
                child.style.transitionDelay = `${i * 0.1}s`;
            });
        });
    }

    /* ---- ACTIVE NAV HIGHLIGHT ---- */
    function highlightActiveNav() {
        const path = window.location.pathname;
        document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            const isHome = (href.endsWith('index.html') || href === '/') &&
                (path === '/' || path.endsWith('index.html') || path === '');
            const isMatch = href === path || path.endsWith(href);
            if (isHome || isMatch) link.classList.add('active');
        });
    }

    /* ---- SMOOTH SCROLL for anchor links ---- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                const id = this.getAttribute('href').slice(1);
                const target = document.getElementById(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* ---- INIT ---- */
    function init() {
        initStaggeredCards();
        initReveal();
        initCounters();
        highlightActiveNav();
        initSmoothScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* ---- EXPOSE FOR PAGES ---- */
    ICONMAT.animateCounter = animateCounter;
    ICONMAT.initReveal = initReveal;

})();
