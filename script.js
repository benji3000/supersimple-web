// Theme toggle + small DOM helpers for the site
document.addEventListener('DOMContentLoaded', function () {
  var themeBtn = document.getElementById('theme-toggle');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  // Initialize theme from localStorage or system preference
  var stored = localStorage.getItem('theme');
  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  if (stored === 'light' || (!stored && prefersLight)) document.body.classList.add('light');
  updateThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var isLight = document.body.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    var isLight = document.body.classList.contains('light');
    themeBtn.textContent = isLight ? '🌙' : '☀️';
    themeBtn.setAttribute('aria-pressed', String(isLight));
  }

  // small nav toggle for mobile
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // fill current year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});