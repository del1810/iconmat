/* ============================================================
   EXHIBITORS.JS — Renders all exhibitors page sections
   ============================================================ */

(function () {
    const d = ICONMAT.data;
    const icon = ICONMAT.icon;

    function renderCategories() {
        const el = document.getElementById('categories-section');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">What to Exhibit</span>
          <h2 class="section-title dark">High-Demand <span>Product Categories</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Tamil Nadu offers one of India's fastest-growing materials markets — every segment is in demand.</p>
        </div>
        <div class="categories-grid">
          ${d.productCategories.map((cat, i) => {
            let bentoClass = '';
            if (i === 0) bentoClass = 'bento-large';
            else if (i % 2 === 0) bentoClass = 'bento-wide';
            return `
            <div class="category-card reveal ${bentoClass}" style="transition-delay:${i * 0.07}s;">
              <img src="${cat.img}" alt="${cat.title}" class="category-card-img">
              <div class="category-card-title-wrap">
                <span class="category-card-title">${cat.title}</span>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    }

    function renderEmerging() {
        const el = document.getElementById('emerging-section');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Future-Forward</span>
          <h2 class="section-title">Emerging <span>Segments</span></h2>
          <p class="section-subtitle" style="margin:0 auto">These high-growth segments represent the next wave of construction materials innovation.</p>
        </div>
        <div class="emerging-grid">
          ${d.emergingSegments.map((seg, i) => `
            <div class="emerging-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="icon-box">${icon(seg.icon)}</div>
              <h3>${seg.title}</h3>
              <p>${seg.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderBenefits() {
        const el = document.getElementById('benefits-section');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Exhibitor Advantages</span>
          <h2 class="section-title dark">Why <span>Exhibit</span> at ICONMAT</h2>
          <p class="section-subtitle" style="margin:0 auto">Strategic exposure, direct buyer access, and measurable ROI — ICONMAT delivers on every front.</p>
        </div>
        <div class="benefits-grid">
          ${d.exhibitorBenefits.map((b, i) => `
            <div class="benefit-card reveal" style="transition-delay:${i * 0.1}s">
              <div class="benefit-icon">${icon(b.icon)}</div>
              <div class="benefit-body">
                <h3>${b.title}</h3>
                <p>${b.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderCTA() {
        const el = document.getElementById('exhibit-cta');
        if (!el) return;
        el.innerHTML = `
      <div class="cta-banner cta-banner-orange">
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <div class="cta-tag">Limited Availability</div>
              <h2 class="cta-title">Premium Booths<br>Filling <span>Fast</span></h2>
            </div>
            <div class="cta-actions">
              <a href="contact.html" class="btn btn-primary btn-lg">Book Your Stall</a>
              
            </div>
          </div>
        </div>
      </div>
    `;
    // <a href="floor-plan.html" class="btn btn-outline btn-lg">View Floor Plan</a>
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderCategories();
        renderEmerging();
        renderBenefits();
        renderCTA();
        if (ICONMAT.initReveal) ICONMAT.initReveal();
    });
})();
