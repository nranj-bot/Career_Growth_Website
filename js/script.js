// ============================================================
// Career Growth by Nahal — shared site behavior
// ============================================================

// ---- Dark mode toggle (remembers choice on this browser) ----
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('cgn-theme');
  if (saved) root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    updateIcon();
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('cgn-theme', next);
      updateIcon();
    });
    function updateIcon() {
      const isDark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀' : '☾';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  });
})();

// ---- Mobile nav toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // ---- Search bar (site-search via Google, since this is a static site) ----
  const searchToggle = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');
  const searchForm = document.getElementById('search-form');
  if (searchToggle && searchBox) {
    searchToggle.addEventListener('click', () => {
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) searchBox.querySelector('input').focus();
    });
  }
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = searchForm.querySelector('input').value.trim();
      if (!q) return;
      // Replace YOURDOMAIN.com below once the site is live, to search only this site.
      window.open(`https://www.google.com/search?q=site:YOURDOMAIN.com+${encodeURIComponent(q)}`, '_blank');
    });
  }

  // ---- "World at your fingertips" fan-card interaction (tap for touch devices) ----
  const fan = document.querySelector('.card-fan');
  if (fan) {
    fan.addEventListener('click', () => fan.classList.toggle('spread'));
  }

  // ---- Basic newsletter form feedback (until connected to a real email service) ----
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      // If you've connected this form to Mailchimp/FormSubmit/etc., remove this
      // preventDefault so it actually submits to that service.
      const email = form.querySelector('input[type="email"]').value;
      if (email) {
        e.preventDefault();
        form.innerHTML = '<p style="color:#fff;margin:0;">Thanks for joining — check your inbox to confirm.</p>';
      }
    });
  });
});
