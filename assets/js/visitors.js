/* ============================================================
   VISITORS.JS — Renders all visitors page sections
   ============================================================ */

(function () {
    const d = ICONMAT.data;
    const icon = ICONMAT.icon;

    function renderExperience() {
        const el = document.getElementById('experience-section');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">What You'll Discover</span>
          <h2 class="section-title dark">What to <span>Experience</span> at ICONMAT</h2>
          <p class="section-subtitle" style="margin:0 auto">ICONMAT is the ultimate sourcing destination for construction materials in South India.</p>
        </div>
        <div class="experience-grid">
          ${d.visitorExperience.map((exp, i) => `
            <div class="benefit-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="benefit-icon">${icon(exp.icon)}</div>
              <div class="benefit-body">
                <h3>${exp.title}</h3>
                <p>${exp.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderWho() {
        const el = document.getElementById('visitor-who');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Visitor Profiles</span>
          <h2 class="section-title">Who Should <span>Attend</span></h2>
          <p class="section-subtitle" style="margin:0 auto">ICONMAT welcomes every stakeholder in the construction ecosystem — from specifiers to procurement heads.</p>
        </div>
        <div class="visitor-profiles-grid">
          ${d.visitorProfiles.map((p, i) => `
            <div class="profile-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="profile-icon">${icon(p.icon)}</div>
              <h3>${p.title}</h3>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderCTA() {
        const el = document.getElementById('visitor-cta');
        if (!el) return;
        el.innerHTML = `
      <div class="cta-banner cta-banner-orange">
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <div class="cta-tag">Free Registration</div>
              <h2 class="cta-title">Free Entry for<br><span>Industry Professionals</span></h2>
            </div>
            <div class="cta-actions">
              <a href="contact.html" class="btn btn-primary btn-lg">Register Now — Free</a>
              <a href="floor-plan.html" class="btn btn-outline btn-lg">View Expo Map</a>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderExperience();
        renderWho();
        renderCTA();
        if (ICONMAT.initReveal) ICONMAT.initReveal();
    });
})();
