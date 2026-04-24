/* ============================================================
   INSIGHTS.JS — Renders industry insights page sections
   ============================================================ */

(function () {
    const d = ICONMAT.data;
    const icon = ICONMAT.icon;

    function renderInsights() {
        const el = document.getElementById('insights-grid');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Market Intelligence</span>
          <h2 class="section-title">Future of Construction <span>Materials in Tamil Nadu</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Five major forces driving the construction materials market to unprecedented growth through 2030.</p>
        </div>
        <div class="insight-cards-list">
          ${d.insights.map((ins, i) => `
            <article class="insight-card reveal" style="transition-delay:${i * 0.08}s">
              <div class="insight-number">${ins.number}</div>
              <div class="insight-body">
                <h2>${ins.title}</h2>
                <p>${ins.desc}</p>
                <ul>
                  ${ins.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderOutlook() {
        const el = document.getElementById('market-outlook');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">2027–2030 Outlook</span>
          <h2 class="section-title dark">Market <span>Outlook</span></h2>
          <p class="section-subtitle" style="margin:0 auto">India's construction materials market is set for strong double-digit growth till 2030, with Tamil Nadu among the top contributing states.</p>
        </div>
        <div class="outlook-grid">
          ${d.marketOutlook.map((item, i) => `
            <div class="card reveal" style="transition-delay:${i * 0.1}s;text-align:center">
              <div class="icon-box" style="margin:0 auto 1.25rem">${icon(item.icon)}</div>
              <h3 style="font-size:1rem;margin-bottom:0.6rem">${item.title}</h3>
              <p style="font-size:0.875rem">${item.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="cta-banner cta-banner-dark" style="margin-top:3rem;padding:3rem">
          <div class="container" style="padding:0">
            <div style="text-align:center">
              <div class="section-tag" style="justify-content:center">Key Insight</div>
              <h2 style="font-size:clamp(1.4rem,3vw,2rem);font-family:var(--font-display);font-weight:900;text-transform:uppercase;color:var(--text);margin-bottom:1rem;line-height:1.15">
                The future of construction lies in faster, stronger,<br>smarter, and <span style="color:var(--primary)">sustainable materials</span>
              </h2>
              <p style="color:var(--text-muted);max-width:540px;margin:0 auto 2rem">ICONMAT is the platform driving this transformation — connecting innovators with India's biggest infrastructure opportunity.</p>
              <a href="exhibitors.html" class="btn btn-primary btn-lg">Be Part of ICONMAT 2027</a>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderInsights();
        renderOutlook();
        if (ICONMAT.initReveal) ICONMAT.initReveal();
    });
})();
