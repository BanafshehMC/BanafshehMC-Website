const notReady = () => {
  confirm(`
  سرور بنفشه ام
  `)
};

document.querySelectorAll('[data-action="not-ready"]').forEach((button) => {
  button.addEventListener('click', notReady);
});

const header = document.querySelector('.header');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.getElementById('primary-navigation');

const setNavOpen = (isOpen) => {
  if (!header || !navToggle) {
    return;
  }

  header.classList.toggle('header--open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
};

if (header && navToggle) {
  navToggle.addEventListener('click', () => {
    setNavOpen(!header.classList.contains('header--open'));
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (header.classList.contains('header--open') && !header.contains(event.target)) {
      setNavOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      setNavOpen(false);
    }
  });

  const updateHeaderShadow = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 8);
  };

  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });
}
