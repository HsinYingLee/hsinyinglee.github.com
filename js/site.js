const initNavigation = () => {
  const menu = document.getElementById('primary-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');

  if (!menu || !toggle) {
    return;
  }

  const setMenuOpen = isOpen => {
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 769px)');
  const handleDesktopChange = event => {
    if (event.matches) {
      setMenuOpen(false);
    }
  };

  if (typeof desktopQuery.addEventListener === 'function') {
    desktopQuery.addEventListener('change', handleDesktopChange);
  } else {
    desktopQuery.addListener(handleDesktopChange);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}
