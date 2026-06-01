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

const initAutoplayMedia = () => {
  const videos = Array.from(document.querySelectorAll('video[autoplay]'));

  if (!videos.length) {
    return;
  }

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const playVideo = video => {
    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  };

  const syncVideo = video => {
    if (reducedMotionQuery.matches) {
      video.pause();
      return;
    }

    if (video.dataset.inView === 'true') {
      playVideo(video);
    } else {
      video.pause();
    }
  };

  videos.forEach(video => {
    video.dataset.inView = 'false';
    syncVideo(video);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.dataset.inView = String(entry.isIntersecting);
        syncVideo(entry.target);
      });
    }, { threshold: 0.2 });

    videos.forEach(video => observer.observe(video));
  } else {
    videos.forEach(video => {
      video.dataset.inView = 'true';
      syncVideo(video);
    });
  }

  const handleMotionChange = () => {
    videos.forEach(syncVideo);
  };

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', handleMotionChange);
  } else {
    reducedMotionQuery.addListener(handleMotionChange);
  }
};

const initSite = () => {
  initNavigation();
  initAutoplayMedia();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
