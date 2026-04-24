/* ============================================================
   FLOOR-PLAN.JS — Renders floor plan page sections
   ============================================================ */

(function () {
    const d = ICONMAT.data;
    const icon = ICONMAT.icon;

    function renderZones() {
        const el = document.getElementById('floor-plan-zones');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Exhibition Layout</span>
          <h2 class="section-title dark">Exhibition <span>Zones</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Four dedicated halls, each purpose-built to serve a specific segment of the construction materials industry.</p>
        </div>
        <div class="zones-grid">
          ${d.exhibitionZones.map((zone, i) => `
            <div class="zone-card reveal" style="transition-delay:${i * 0.1}s">
              <span class="zone-label">${zone.zone} &bull; ${zone.size}</span>
              <h3>${zone.title}</h3>
              <p>${zone.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    function renderMap() {
        const el = document.getElementById('floor-plan-map');
        if (!el) return;
        el.innerHTML = `
      <div class="container">
        <div class="text-center reveal">
          <span class="section-tag">Venue Layout</span>
          <h2 class="section-title">Interactive <span>Floor Map</span></h2>
          <p class="section-subtitle" style="margin:0 auto">Chennai Trade Centre — four interconnected halls covering 22,000 sqm of exhibition space.</p>
        </div>
        <div class="floor-map-grid">
          ${d.exhibitionZones.map(zone => `
            <div class="map-zone">
              <div class="map-zone-label">${zone.zone}</div>
              <div class="map-zone-name">${zone.title}</div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:2.5rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <a href="contact.html" class="btn btn-primary btn-lg">${icon('download')} Download Floor Plan</a>
          <a href="exhibitors.html" class="btn btn-outline-orange btn-lg">Book a Stall</a>
        </div>
      </div>
    `;
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderZones();
        // renderMap();
        if (ICONMAT.initReveal) ICONMAT.initReveal();
    });
})();
