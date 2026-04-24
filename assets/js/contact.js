/* ============================================================
   CONTACT.JS — Renders contact page + handles form submission
   ============================================================ */

(function () {
  const d = ICONMAT.data;
  const icon = ICONMAT.icon;
  const contact = d.contact;

  function renderContact() {
    const el = document.getElementById('contact-section');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="contact-layout">

          <!-- Contact Info -->
          <div class="reveal-left">
            <span class="section-tag">Get in Touch</span>
            <h2 class="section-title dark">Contact <span>Our Team</span></h2>
            <div class="divider"></div>
            <p class="dark">Have questions about exhibiting, sponsorship, or visiting ICONMAT 2027? Our team is ready to help you make the most of India's premier construction materials expo.</p>

            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('briefcase')}</div>
                <div class="contact-info-body">
                  <strong>Organizer</strong>
                  <span>${contact.organizer}</span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('map-pin')}</div>
                <div class="contact-info-body">
                  <strong>Venue</strong>
                  <span>${contact.address}</span>
                </div>
              </div>
              <a href="mailto:${contact.email}" class="contact-info-item">
                <div class="contact-info-icon">${icon('mail')}</div>
                <div class="contact-info-body">
                  <strong>Email</strong>
                  <span>${contact.email}</span>
                </div>
              </a>
              <a href="tel:${contact.phone}" class="contact-info-item">
                <div class="contact-info-icon">${icon('phone')}</div>
                <div class="contact-info-body">
                  <strong>Phone</strong>
                  <span>${contact.phone}</span>
                </div>
              </a>
            </div>

            <div class="contact-social-row">
              <a href="${contact.social.linkedin}" class="contact-social-link">${icon('share-2')} LinkedIn</a>
              <a href="${contact.social.instagram}" class="contact-social-link">${icon('star')} Instagram</a>
              <a href="${contact.social.facebook}" class="contact-social-link">${icon('users')} Facebook</a>
            </div>
          </div>

          <!-- Location Map -->
          <div class="contact-map-wrap reveal-right" style="margin: auto 0; padding: 1.25rem; background: var(--bg); border-top: 3px solid var(--primary); box-shadow: 0 10px 30px rgba(0,0,0,0.4); text-align: center;">
            <h3 style="font-family: var(--font-display); font-size: 1.1rem; text-transform: uppercase; font-weight: 800; color: var(--text); margin-bottom: 1rem; letter-spacing: 0.05em;">Find Us on <span style="color: var(--primary);">Google Maps</span></h3>
            <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-light);">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279690623348!2d80.19163271482255!3d13.017838590825316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715fbc7ae8f%3A0xc3f145cbe2cf13f5!2sChennai%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1703698246473!5m2!1sen!2sin" 
                width="100%" 
                height="320" 
                style="border:0; display: block; filter: invert(90%) hue-rotate(180deg) opacity(0.85);" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>
      </div>
    `;

    /* Form submit handler */
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
          const inputs = form.querySelectorAll('[required]');
          inputs.forEach(input => {
            if (!input.value.trim()) {
              input.style.borderColor = '#e53e3e';
              input.addEventListener('input', () => { input.style.borderColor = ''; }, { once: true });
            }
          });
          return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        /* Simulate API call */
        setTimeout(() => {
          form.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = `${icon('send')} Send Enquiry`;
          if (success) success.classList.add('show');
          setTimeout(() => { if (success) success.classList.remove('show'); }, 5000);
        }, 1200);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderContact();
    if (ICONMAT.initReveal) ICONMAT.initReveal();
  });
})();
