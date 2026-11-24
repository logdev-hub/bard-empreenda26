(function () {
  'use strict';

  /* ---------- header height + anchor offset ---------- */
  const header = document.querySelector('.site-header');
  const setHeaderHeight = () => document.documentElement.style.setProperty('--header', `${header.offsetHeight}px`);
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight, { passive: true });

  /* ---------- mobile nav auto-close ---------- */
  const nav = document.querySelector('#mainNav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  navLinks.forEach(link => link.addEventListener('click', () => {
    if (nav && nav.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  /* ---------- reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }), { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- scrollspy on primary nav ---------- */
  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  }), { rootMargin: `-${header.offsetHeight + 30}px 0px -60% 0px`, threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  /* ---------- site map (offcanvas) search filter ---------- */
  const mapSearch = document.querySelector('#mapSearch');
  const mapItems = [...document.querySelectorAll('.map-list li')];
  if (mapSearch) {
    mapSearch.addEventListener('input', () => {
      const q = mapSearch.value.trim().toLowerCase();
      mapItems.forEach(li => {
        const text = li.textContent.toLowerCase();
        li.classList.toggle('hidden', q.length > 0 && !text.includes(q));
      });
    });
  }
  const offcanvasMapEl = document.querySelector('#offcanvasMap');
  if (offcanvasMapEl && window.bootstrap) {
    offcanvasMapEl.addEventListener('shown.bs.offcanvas', () => mapSearch && mapSearch.focus());
  }

  /* ---------- dossiê: busca por palavra nos 11 pilares ---------- */
  const dossieSearch = document.querySelector('#dossieSearch');
  const pillarCards = [...document.querySelectorAll('.pillar-card')];
  const dossieCount = document.querySelector('#dossieCount');
  const updateDossieCount = () => {
    if (!dossieCount) return;
    const visible = pillarCards.filter(c => !c.classList.contains('hidden')).length;
    dossieCount.textContent = `${visible} de ${pillarCards.length} pilares`;
  };
  if (dossieSearch) {
    dossieSearch.addEventListener('input', () => {
      const q = dossieSearch.value.trim().toLowerCase();
      pillarCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.classList.toggle('hidden', q.length > 0 && !text.includes(q));
      });
      updateDossieCount();
    });
    updateDossieCount();
  }

  /* ---------- atalho de teclado: "/" foca a busca do dossiê visível ---------- */
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      const dossieVisible = document.querySelector('#dossie');
      if (dossieVisible && dossieSearch) {
        const rect = dossieVisible.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          e.preventDefault();
          dossieSearch.focus();
        }
      }
    }
  });

  /* ---------- abre automaticamente a gaveta (details) apontada pela URL ---------- */
  const openDetailsFromHash = () => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el && el.tagName === 'DETAILS') el.open = true;
  };
  window.addEventListener('hashchange', openDetailsFromHash);
  openDetailsFromHash();
  document.querySelectorAll('a[href^="#pilar-"]').forEach(a => a.addEventListener('click', () => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el && el.tagName === 'DETAILS') el.open = true;
  }));

  const year = document.querySelector('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
}());
