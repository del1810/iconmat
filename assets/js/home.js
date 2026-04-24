/* ============================================================
   HOME.JS — Renders all home page sections
   ============================================================ */

(function () {
  const d = ICONMAT.data;
  const icon = ICONMAT.icon;

  /* ---- HERO SECTION ---- */
  function renderHero() {
    const el = document.getElementById('hero');
    if (!el) return;
    el.innerHTML = `
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">${icon('zap')} India's Premier B2B Construction Expo</div>
          <h1 class="hero-title" style="margin-bottom: 0;">ICONMAT <span>2027</span><span class="hero-subtitle" style="display: block; margin-top: 0.5rem;">India's Premier Construction Materials Expo</span></h1>
          <p class="hero-tagline">Where billion-dollar supply chains get forged. Powering the Foundation of Tomorrow's Infrastructure.</p>
          <div class="hero-meta">
            <div class="hero-meta-item">${icon('map-pin')}<span>Chennai Trade Centre, Tamil Nadu</span></div>
            <div class="hero-meta-item">${icon('zap')}<span>May 14, 15 & 16, 2027 &nbsp;</span></div>
          </div>
          <div class="hero-actions">
            <a href="exhibitors.html" class="btn btn-primary btn-lg">Book Your Stall</a>
            <a href="visitors.html" class="btn btn-outline btn-lg">Register as Visitor</a>
            <a href="sponsors.html" class="btn btn-outline btn-lg">Become a Sponsor</a>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="hero-scroll-line"></div>
        <span>Scroll</span>
      </div>
    `;
  }

  /* ---- STATS SECTION ---- */
  function renderStats() {
    const el = document.getElementById('stats-section');
    if (!el) return;

    const iconMap = { 'building': 'building', 'users': 'users', 'globe': 'globe', 'trending-up': 'trending-up' };

    el.innerHTML = `
      <div class="container">
        <div class="stats-grid" data-stagger>
          ${d.stats.map(s => `
            <div class="stat-item reveal">
              <div class="stat-icon">${icon(s.icon)}</div>
              <div class="stat-number">
                ${s.prefix ? `<span class="rupee">${s.prefix}</span>` : ''}
                <span data-counter="${s.number}">${s.number.toLocaleString('en-IN')}</span>
                <span class="plus">${s.suffix}</span>
              </div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ---- ABOUT SECTION ---- */
  function renderAbout() {
    const el = document.getElementById('about-intro');
    if (!el) return;
    el.innerHTML = `
      <div class="container light-mode">
        <div class="about-layout">
          <div class="about-image-wrap reveal-left">
            <img src="assets/images/hero-about.png" alt="ICONMAT Exhibition at Chennai Trade Centre" loading="lazy">
            <div class="about-image-badge">
              <span class="badge-num">2027</span>
              <span class="badge-text">Edition</span>
            </div>
          </div>
          <div class="reveal-right">
            <span class="section-tag">About the Expo</span>
            <h2 class="section-title">What is <span>ICONMAT?</span></h2>
            <div class="divider"></div>
            <p>ICONMAT is a dedicated B2B exhibition focused on construction materials, building products, and supply chain innovations. The expo connects manufacturers, suppliers, distributors, contractors, and decision-makers — creating a powerful marketplace for business growth.</p>
            <p style="margin-top:1rem">Driven by Tamil Nadu's <strong style="color:var(--primary)">$1 trillion economic ambition</strong>, the construction sector is witnessing rapid growth, creating strong demand for high-performance, sustainable, and cost-effective building materials.</p>
            <div class="about-bullet-list">
              <div class="about-bullet">Launch new materials and products to the market</div>
              <div class="about-bullet">Expand distribution networks across South India</div>
              <div class="about-bullet">Connect directly with bulk buyers and procurement heads</div>
              <div class="about-bullet">Enter and dominate the Tamil Nadu materials market</div>
            </div>
            <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap">
              <a href="about.html" class="btn btn-primary">Learn More</a>
              <a href="exhibitors.html" class="btn btn-outline-orange">Exhibit With Us</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- HIGHLIGHTS SECTION ---- */
  function renderHighlights() {
    const el = document.getElementById('highlights-section');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="highlights-header text-center reveal">
          <span class="section-tag">Event Highlights</span>
          <h2 class="section-title dark">What Awaits at <span>ICONMAT 2027</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Six world-class exhibition zones bringing together the entire construction materials ecosystem under one roof.</p>
        </div>
        <div class="highlights-grid">
          ${d.highlights.map((h, i) => `
            <div class="highlight-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="highlight-icon">${icon(h.icon)}</div>
              <div class="highlight-body">
                <h3>${h.title}</h3>
                <p>${h.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ---- INDUSTRY SNAPSHOT SECTION ---- */
  function renderIndustry() {
    const el = document.getElementById('industry-section');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="industry-layout">
          <div class="industry-image-wrap reveal-left">
            <img src="assets/images/hero-banner.png" alt="Tamil Nadu construction industry growth" loading="lazy">
          </div>
          <div class="reveal-right">
            <span class="section-tag">Industry Snapshot</span>
            <h2 class="section-title">Tamil Nadu's <span>Materials Boom</span></h2>
            <div class="divider"></div>
            <p>Tamil Nadu's construction ecosystem is witnessing unprecedented demand for materials — driven by urbanization, mega infrastructure, real estate expansion, and manufacturing growth.</p>
            <div class="industry-list">
              ${d.industrySnapshot.map(item => `
                <div class="industry-list-item">
                  <div class="industry-list-icon">${icon(item.icon)}</div>
                  <div class="industry-list-text">
                    <strong>${item.title}</strong>
                    <span><span style="color:var(--primary);font-family:var(--font-display);font-weight:800;font-size:1.1rem">${item.value}</span> ${item.label}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- WHY ICONMAT SECTION ---- */
  function renderWhy() {
    const el = document.getElementById('why-section');
    if (!el) return;
    el.innerHTML = `
      <div class="container light-mode">
        <div class="text-center reveal">
          <span class="section-tag">Why ICONMAT Now</span>
          <h2 class="section-title">The <span>Right Time</span> to Exhibit</h2>
          <p class="section-subtitle" style="margin:0 auto 2.5rem">The construction industry is transforming. ICONMAT is the strategic platform at the heart of this change.</p>
        </div>
        <div class="why-grid">
          ${d.whyIconmat.map((w, i) => `
            <div class="why-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="why-card-number">${w.number}</div>
              <h3>${w.title}</h3>
              <p>${w.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ---- CTA BANNER ---- */
  function renderCTA() {
    const el = document.getElementById('cta-section');
    if (!el) return;
    el.innerHTML = `
      <div class="cta-banner cta-banner-image">
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <div class="cta-tag">Limited Stalls Available</div>
              <h2 class="cta-title">Showcase Your Materials to<br>the <span>Right Buyers</span></h2>
            </div>
            <div class="cta-actions">
              <a href="exhibitors.html" class="btn btn-primary btn-lg">Book Your Stall Today</a>
              <a href="contact.html" class="btn btn-outline btn-lg">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- INIT ---- */
  document.addEventListener('DOMContentLoaded', function () {
    renderHero();
    renderStats();
    renderAbout();
    renderHighlights();
    renderIndustry();
    renderWhy();
    renderCTA();
    // Re-run reveal after dynamic content
    if (ICONMAT.initReveal) ICONMAT.initReveal();
  });
})();
