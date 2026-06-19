// =============================================
// GLOWGUIDE – LANDING PAGE JS
// =============================================
document.addEventListener('DOMContentLoaded', () => {

  // Update CTA buttons based on auth
  const btnStartConsult = document.getElementById('btnStartConsult');
  const btnSkinQuiz = document.getElementById('btnSkinQuiz');
  const btnJoinNow = document.getElementById('btnJoinNow');

  if (Auth.isLoggedIn()) {
    if (btnJoinNow) {
      btnJoinNow.textContent = 'Dashboard Saya';
      btnJoinNow.href = Auth.isAdmin() ? 'pages/admin.html' : 'pages/history.html';
    }
  }

  // Skin type card hover
  document.querySelectorAll('.skin-type-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      window.location.href = `pages/catalog.html?skinType=${type}`;
    });
  });

  // Feature cards click
  document.querySelectorAll('.feature-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const link = card.querySelector('.feature-link');
      if (link) {
        window.location.href = link.href;
      }
    });
  });

  // Counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));

  function animateCounter(el) {
    const target = el.textContent;
    const isPercent = target.includes('%');
    const num = parseInt(target);
    if (isNaN(num)) return;
    let current = 0;
    const duration = 1500;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      el.textContent = current + (isPercent ? '%' : (target.includes('+') ? '+' : ''));
      if (current >= num) clearInterval(timer);
    }, 16);
  }
});
