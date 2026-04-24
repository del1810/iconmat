/* ============================================================
   NAVBAR.JS — Renders and controls the navbar + mobile menu
   ============================================================ */

(function () {
    const data = ICONMAT.data;
    const currentPath = window.location.pathname;

    /* SVG Icons inline */
    const icons = {
        mapPin: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        mail: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        phone: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18C1.61 2.1 2.35 1 3.44 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.54-.45a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
        menu: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
        close: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    };

    /* Build nav links HTML */
    function buildNavLinks(isMobile = false) {
        return data.navLinks.map(link => {
            const isActive = currentPath.endsWith(link.href.replace('index.html', '/')) ||
                currentPath === link.href ||
                (link.href === 'index.html' && (currentPath === '/' || currentPath === ''));
            const activeClass = isActive ? ' active' : '';
            return `<a href="${link.href}" class="${activeClass}"${isMobile ? ' onclick="ICONMAT.closeMobileMenu()"' : ''}>${link.label}</a>`;
        }).join('');
    }

    /* TOP BAR */
    const topBarHTML = `
    <div id="top-bar">
      <div class="container">
        <div class="top-bar-inner">
          <div class="top-bar-left">
            <div class="top-bar-item">
              ${icons.mapPin}
              <span>Chennai Trade Centre, Tamil Nadu</span>
            </div>
            <div class="top-bar-item">
              ${icons.mail}
              <a href="mailto:info@iconmat.in">info@iconmat.in</a>
            </div>
            <div class="top-bar-item">
              ${icons.phone}
              <a href="tel:+919500070800">+91 95000 70800</a>
            </div>
          </div>
          <div class="top-bar-right">
            <span class="top-bar-date">May 14, 15 & 16, 2027</span>
            <div class="top-bar-socials">
              <a href="#" aria-label="LinkedIn">${icons.linkedin}</a>
              <a href="#" aria-label="Instagram">${icons.instagram}</a>
              <a href="#" aria-label="Facebook">${icons.facebook}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    /* MAIN NAV */
    const navHTML = `
    <nav id="main-nav">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo" aria-label="ICONMAT Home">
            <div class="logo-icon"><img
              src="assets/images/Iconmat_Logo.png"
              alt="Icon Mat Logo"
            />
            </div>

          </a>

          <div class="nav-links">
            ${buildNavLinks(false)}
          </div>

          <div class="nav-cta">
            <a href="exhibitors.html" class="btn btn-primary btn-sm">Book Stall</a>
          </div>

          <button class="nav-hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
            <span id="hamburger-icon">${icons.menu}</span>
          </button>
        </div>
      </div>
    </nav>

    <div id="mobile-menu" role="navigation" aria-label="Mobile navigation">
      ${buildNavLinks(true)}
      <div class="mobile-cta">
        <a href="exhibitors.html" class="btn btn-primary" onclick="ICONMAT.closeMobileMenu()">Book Your Stall</a>
      </div>
    </div>
  `;

    /* INJECT INTO DOM */
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = topBarHTML + navHTML;
    }

    /* ---- SCROLL BEHAVIOR ---- */
    const nav = document.getElementById('main-nav');
    function handleScroll() {
        if (!nav) return;
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* ---- MOBILE MENU TOGGLE ---- */
    let menuOpen = false;

    ICONMAT.closeMobileMenu = function () {
        const menu = document.getElementById('mobile-menu');
        const btn = document.getElementById('hamburger-btn');
        const icon = document.getElementById('hamburger-icon');
        if (menu) menu.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.innerHTML = icons.menu;
        menuOpen = false;
    };

    document.addEventListener('click', function (e) {
        const btn = document.getElementById('hamburger-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('hamburger-icon');
        if (!btn || !menu) return;

        if (btn.contains(e.target)) {
            menuOpen = !menuOpen;
            if (menuOpen) {
                menu.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
                if (icon) icon.innerHTML = icons.close;
            } else {
                ICONMAT.closeMobileMenu();
            }
        } else if (menuOpen && !menu.contains(e.target)) {
            ICONMAT.closeMobileMenu();
        }
    });
})();
