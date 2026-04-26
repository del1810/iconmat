/* ============================================================
   FOOTER.JS — Renders the site footer component
   ============================================================ */

(function () {
  const data = ICONMAT.data;
  const contact = data.contact;

  const icons = {
    mapPin: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18C1.61 2.1 2.35 1 3.44 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.54-.45a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  };

  /* Build footer link columns */
  function buildLinkColumns() {
    return data.footerLinks.map(col => `
      <div>
        <h3 class="footer-col-title">${col.title}</h3>
        <ul class="footer-links-list">
          ${col.links.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  const footerHTML = `
    <footer id="site-footer">
      <div class="container">
        <div class="footer-grid">

          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">
              <div class="logo-text">
                <span class="logo-name"><img
              src="assets/images/Iconmat_Logo.png"
              alt="Icon Mat Logo"
            /></span>
              </div>
            </a>
            <p>India's premier B2B construction materials expo, connecting manufacturers, suppliers, and buyers to power Tamil Nadu's infrastructure growth.</p>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                ${icons.mapPin}
                <span>${contact.address}</span>
              </div>
              <a href="tel:${contact.phone}" class="footer-contact-item">
                ${icons.phone}
                <span>${contact.phone}</span>
              </a>
              <a href="mailto:${contact.email}" class="footer-contact-item">
                ${icons.mail}
                <span>${contact.email}</span>
              </a>
            </div>
          </div>

          <!-- Link Columns -->
          ${buildLinkColumns()}

        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p class="footer-copy">
            &copy; 2027 ICONMAT. Organized by <a href="https://fairconnects.in/" target = "_blank">${contact.organizer}</a>. All rights reserved.
          </p>
          <div class="footer-socials">
            <a href="${contact.social.linkedin}" aria-label="LinkedIn">${icons.linkedin}</a>
            <a href="${contact.social.instagram}" aria-label="Instagram">${icons.instagram}</a>
            <a href="${contact.social.facebook}" aria-label="Facebook">${icons.facebook}</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  }
})();
