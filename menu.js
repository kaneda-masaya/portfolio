const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'メニューを開く' : 'メニューを閉じる');
  menu?.classList.toggle('is-open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
  if (!event.matches) return;
  toggle?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
  document.body.style.overflow = '';
});
