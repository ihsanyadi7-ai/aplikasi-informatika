// ===== SEMUA FUNGSI DIBUNGKUS DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', function () {

  // ===== NAVIGASI =====
  window.showSection = function (id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    var target = document.getElementById(id);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    var map = { home: 0, materi: 1, kuis: 2, biodata: 3 };
    var links = document.querySelectorAll('.nav-link');
    if (map[id] !== undefined && links[map[id]]) {
      links[map[id]].classList.add('active');
    }

    document.getElementById('navLinks').classList.remove('open');
    window.scrollTo(0, 0);

    if (id === 'kuis') {
      if (typeof window.initKuis === 'function') window.initKuis();
    }
    if (id === 'materi') {
      var activeItem = document.querySelector('.materi-item.active');
      var bab = activeItem ? activeItem.id.replace('menu-', '') : 'bab1';
      _renderMateri(bab);
    }
  };

  // ===== HAMBURGER =====
  window.toggleMenu = function () {
    document.getElementById('navLinks').classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    var navbar = document.getElementById('navbar');
    var navLinks = document.getElementById('navLinks');
    if (navbar && navLinks && !navbar.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  // ===== MODAL =====
  window.showModal = function (icon, title, msg, btnText) {
    document.getElementById('modalIcon').innerHTML = icon;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalBtn').textContent = btnText || 'OK';
    document.getElementById('modalOverlay').classList.add('show');
  };

  window.closeModal = function () {
    document.getElementById('modalOverlay').classList.remove('show');
  };

  document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) window.closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeModal();
  });

  // ===== MATERI =====
  // Fungsi internal render (tidak switch section)
  function _renderMateri(bab) {
    document.querySelectorAll('.materi-item').forEach(el => el.classList.remove('active'));
    var menuEl = document.getElementById('menu-' + bab);
    if (menuEl) menuEl.classList.add('active');

    var content = document.getElementById('materiContent');
    if (content && typeof materiData !== 'undefined' && materiData[bab]) {
      content.innerHTML = materiData[bab];
      content.scrollTop = 0;
    }
  }

  // Fungsi publik showMateri (dipanggil dari tombol)
  window.showMateri = function (bab) {
    // Switch ke section materi
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    var materiSection = document.getElementById('materi');
    if (materiSection) materiSection.classList.add('active');

    // Update navbar
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    var links = document.querySelectorAll('.nav-link');
    if (links[1]) links[1].classList.add('active');

    // Tutup hamburger
    document.getElementById('navLinks').classList.remove('open');

    // Render konten
    _renderMateri(bab);

    window.scrollTo(0, 0);
  };

  // ===== KUIS — initKuis sudah didefinisikan di kuis.js =====

  // ===== INIT HALAMAN =====
  // Render materi bab1 di background agar sidebar sudah siap
  _renderMateri('bab1');

  // Tampilkan home
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  var homeSection = document.getElementById('home');
  if (homeSection) homeSection.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  var links = document.querySelectorAll('.nav-link');
  if (links[0]) links[0].classList.add('active');
});
