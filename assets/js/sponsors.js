/* ============================================================
   SPONSORS.JS — Renders all sponsors page sections
   ============================================================ */

(function () {
  const d = ICONMAT.data;
  const icon = ICONMAT.icon;

  function renderIntro() {
    const el = document.getElementById('sponsor-intro');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="sponsor-intro-layout">
          <div class="reveal-left">
            <span class="section-tag">Sponsorship</span>
            <h2 class="section-title">Align Your Brand with <span>Tamil Nadu's Boom</span></h2>
            <div class="divider"></div>
            <p>Become a sponsor at ICONMAT 2027 and place your brand at the center of India's most dynamic construction materials market. Connect with 12,000+ industry professionals, decision-makers, and procurement heads over 4 days.</p>
            <div class="sponsor-benefits-list">
              ${d.sponsorBenefits.map(b => `
                <div class="sponsor-benefit-item">
                  ${icon(b.icon)}
                  <span>${b.title}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="reveal-right">
            <img src="assets/images/hero-banner.png" alt="ICONMAT Sponsorship Opportunity" loading="lazy" style="width:100%;aspect-ratio:4/3;object-fit:cover">
          </div>
        </div>
      </div>
    `;
  }

  function renderTiers() {
    const el = document.getElementById('sponsor-tiers');
    if (!el) return;
    el.innerHTML = `
      <div class="container light-mode">
        <div class="text-center reveal">
          <span class="section-tag">Sponsorship Packages</span>
          <h2 class="section-title">Choose Your <span>Sponsorship Tier</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Each tier is designed to maximize your brand impact and business returns at ICONMAT 2027.</p>
        </div>
        <div class="tiers-grid">
          ${d.sponsorTiers.map((tier, i) => `
            <div class="tier-card${tier.featured ? ' featured' : ''} reveal" style="transition-delay:${i * 0.1}s">
              <div class="tier-icon">${icon(tier.icon)}</div>
              <div class="tier-name">${tier.name}</div>
              <div class="tier-title">${tier.title}</div>
              <ul class="tier-features">
                ${tier.features.map(f => `
                  <li>${icon('check')}<span>${f}</span></li>
                `).join('')}
              </ul>
              <a href="/contact.html" class="btn ${tier.featured ? 'btn-primary' : 'btn-outline-orange'}" style="width:100%">Enquire Now</a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderCTA() {
    const el = document.getElementById('sponsor-cta');
    if (!el) return;
    el.innerHTML = `
      <div class="cta-banner cta-banner-dark">
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <div class="cta-tag">Partner with Growth</div>
              <h2 class="cta-title">Request Our <span>Sponsorship Brochure</span></h2>
            </div>
            <div class="cta-actions">
              <a href="/contact.html" class="btn btn-primary btn-lg">Request Brochure</a>
              <a href="/contact.html" class="btn btn-outline btn-lg">Talk to Our Team</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderIntro();
    renderTiers();
    renderCTA();
    if (ICONMAT.initReveal) ICONMAT.initReveal();
  });
})();
