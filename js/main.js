// =============================================
// GLOWGUIDE – MAIN JS (Shared utilities)
// =============================================

// ── AUTH STATE ──
const Auth = {
  getUser: () => JSON.parse(localStorage.getItem('gg_user') || 'null'),
  setUser: (user) => localStorage.setItem('gg_user', JSON.stringify(user)),
  logout: () => { 
    localStorage.removeItem('gg_user'); 
    window.location.href = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html'; 
  },
  isLoggedIn: () => !!localStorage.getItem('gg_user'),
  isAdmin: () => { const u = Auth.getUser(); return u && u.role === 'admin'; }
};

// ── WISHLIST ──
const Wishlist = {
  get: () => JSON.parse(localStorage.getItem('gg_wishlist') || '[]'),
  add: (productId) => {
    const list = Wishlist.get();
    if (!list.includes(productId)) { list.push(productId); localStorage.setItem('gg_wishlist', JSON.stringify(list)); }
    return list;
  },
  remove: (productId) => {
    const list = Wishlist.get().filter(id => id !== productId);
    localStorage.setItem('gg_wishlist', JSON.stringify(list));
    return list;
  },
  toggle: (productId) => {
    const list = Wishlist.get();
    return list.includes(productId) ? Wishlist.remove(productId) : Wishlist.add(productId);
  },
  has: (productId) => Wishlist.get().includes(productId)
};

// ── CONSULTATION HISTORY ──
const History = {
  get: () => JSON.parse(localStorage.getItem('gg_history') || '[]'),
  add: (entry) => {
    const list = History.get();
    list.unshift({ ...entry, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('gg_history', JSON.stringify(list.slice(0, 20)));
  },
  clear: () => localStorage.removeItem('gg_history')
};

// ── TOAST NOTIFICATIONS ──
const Toast = {
  container: null,
  init() {
    if (!document.getElementById('toastContainer')) {
      this.container = document.createElement('div');
      this.container.id = 'toastContainer';
      document.body.appendChild(this.container);
    } else {
      this.container = document.getElementById('toastContainer');
    }
  },
  show(message, type = 'default', duration = 3500) {
    if (!this.container) this.init();
    const icons = { success: '✅', error: '❌', info: 'ℹ️', default: '💕' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${icons[type] || icons.default}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
  success: (msg) => Toast.show(msg, 'success'),
  error: (msg) => Toast.show(msg, 'error'),
  info: (msg) => Toast.show(msg, 'info')
};
Toast.init();

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navActions = document.getElementById('navActions');

  // Scroll behavior
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Hamburger
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks && navLinks.classList.toggle('open');
      navActions && navActions.classList.toggle('open');
    });
  }

  // Update nav actions based on auth state
  updateNavAuth();
}

function updateNavAuth() {
  const navActions = document.getElementById('navActions');
  const btnLogin = document.getElementById('btnLogin');
  const btnRegister = document.getElementById('btnRegister');
  if (!navActions) return;

  const inPages = window.location.pathname.includes('/pages/');

  if (Auth.isLoggedIn()) {
    const user = Auth.getUser();
    if (btnLogin) {
      btnLogin.textContent = Auth.isAdmin() ? 'Dashboard Admin' : 'Profil Saya';
      btnLogin.href = Auth.isAdmin() 
        ? (inPages ? 'admin.html' : 'pages/admin.html') 
        : (inPages ? 'profile.html' : 'pages/profile.html');
      btnLogin.className = 'btn-outline';
    }
    if (btnRegister) {
      btnRegister.textContent = 'Logout';
      btnRegister.href = '#';
      btnRegister.addEventListener('click', (e) => { e.preventDefault(); Auth.logout(); });
    }
  }
}

// ── NUMBER FORMAT ──
function formatRupiah(num) {
  return 'Rp ' + parseInt(num).toLocaleString('id-ID');
}

// ── SMOOTH ANIMATION ON SCROLL ──
function initScrollAnimations() {
  const els = document.querySelectorAll('.feature-card, .skin-type-card, .step-item, .stat-card, .ingredient-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ── INITIALIZE ──
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
});
