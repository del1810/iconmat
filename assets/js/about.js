/* ============================================================
   ABOUT.JS — Renders all about page sections
   ============================================================ */

(function () {
    const d = ICONMAT.data;
    const icon = ICONMAT.icon;

    function renderIntro() {
        const el = document.getElementById('about-intro');
        if (!el) return;
        el.innerHTML = `
      <div class="container light-mode">
        <div class="about-layout">
          <div class="about-image-wrap reveal-left">
            <img src="assets/images/hero-about.png" alt="ICONMAT Exhibition Hall" loading="lazy">
            <div class="about-image-badge">
              <span class="badge-num">B2B</span>
              <span class="badge-text">Platform</span>
            </div>
          </div>
          <div class="reveal-right">
            <span class="section-tag">About ICONMAT</span>
            <h2 class="section-title">A Specialized <span>Materials Platform</span></h2>
            <div class="divider"></div>
            <p>ICONMAT is designed as a specialized platform for construction materials, addressing the growing need for efficient sourcing, innovation, and supply chain connectivity in Tamil Nadu.</p>
            <p style="margin-top:1rem">The expo enables businesses to:</p>
            <div class="about-bullet-list">
              <div class="about-bullet">Launch new materials and products directly to buyers</div>
              <div class="about-bullet">Expand distribution networks across South India</div>
              <div class="about-bullet">Connect with bulk buyers and project procurement teams</div>
              <div class="about-bullet">Enter and establish presence in South India markets</div>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    function renderGrowthDrivers() {
        const el = document.getElementById('growth-drivers');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Tamil Nadu Market</span>
          <h2 class="section-title dark">Key <span>Growth Drivers</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Tamil Nadu stands as one of India's largest consumers of construction materials — here's why.</p>
        </div>
        <div class="benefits-grid" style="margin-top:2.5rem">
          ${d.growthDrivers.map((driver, i) => `
            <div class="benefit-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="benefit-icon">${icon(driver.icon)}</div>
              <div class="benefit-body">
                <h3>${driver.title}</h3>
                <p>${driver.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderVisionMission() {
        const el = document.getElementById('vision-mission');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Our Purpose</span>
          <h2 class="section-title dark">Vision & <span>Mission</span></h2>
        </div>
        <div class="vm-grid">
          <div class="vm-card vision reveal delay-1">
            <div class="vm-icon">${icon('eye')}</div>
            <h3 class="vm-title">Our Vision</h3>
            <p>To become India's most influential construction materials sourcing and networking platform — connecting every manufacturer, supplier, and buyer in the construction ecosystem.</p>
          </div>
          <div class="vm-card mission reveal delay-2">
            <div class="vm-icon">${icon('target')}</div>
            <h3 class="vm-title">Our Mission</h3>
            <ul class="vm-list">
              <li>Connect manufacturers directly with bulk buyers</li>
              <li>Promote innovative and sustainable materials</li>
              <li>Enable smarter construction practices across India</li>
              <li>Drive business expansion for materials companies</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderIntro();
        renderGrowthDrivers();
        renderVisionMission();
        if (ICONMAT.initReveal) ICONMAT.initReveal();
    });
})();
