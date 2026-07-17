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

const initSectionHighlight = () => {
  const links = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
  if (!links.length) {
    return;
  }

  const sections = links
    .map(link => {
      const id = link.getAttribute('href')?.slice(1);
      if (!id || id === 'page-top') {
        return { link, section: document.getElementById('home') };
      }
      return { link, section: document.getElementById(id) };
    })
    .filter(item => item.section);

  if (!sections.length) {
    return;
  }

  const setActive = activeLink => {
    links.forEach(link => {
      link.classList.toggle('active', link === activeLink);
    });
  };

  const updateActiveSection = () => {
    const offset = 120;
    const marker = window.scrollY + offset;
    let current = sections[0];

    for (const item of sections) {
      if (item.section.offsetTop <= marker) {
        current = item;
      }
    }

    // Near the bottom of the page, keep the last section active.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }

    setActive(current.link);
  };

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
};

const initAutoplayMedia = () => {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const registeredVideos = new Set();
  let observer = null;

  const playVideo = video => {
    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  };

  const syncVideo = video => {
    if (!video.isConnected) {
      return;
    }

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

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.dataset.inView = String(entry.isIntersecting);
        syncVideo(entry.target);
      });
    }, { threshold: 0.2 });
  }

  const unregisterDisconnectedVideos = () => {
    registeredVideos.forEach(video => {
      if (video.isConnected) {
        return;
      }

      observer?.unobserve(video);
      registeredVideos.delete(video);
    });
  };

  const registerVideos = (root = document) => {
    unregisterDisconnectedVideos();

    const videos = Array.from(root.querySelectorAll('video[data-autoplay]'));
    videos.forEach(video => {
      if (registeredVideos.has(video)) {
        return;
      }

      video.dataset.inView = 'false';
      video.pause();
      registeredVideos.add(video);

      if (observer) {
        observer.observe(video);
      } else {
        video.dataset.inView = 'true';
        syncVideo(video);
      }
    });
  };

  const handleMotionChange = () => {
    registeredVideos.forEach(syncVideo);
  };

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', handleMotionChange);
  } else {
    reducedMotionQuery.addListener(handleMotionChange);
  }

  document.addEventListener('site:media-updated', event => {
    registerVideos(event.detail?.root ?? document);
  });

  registerVideos();
};

const initSite = () => {
  initNavigation();
  initSectionHighlight();
  initAutoplayMedia();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
