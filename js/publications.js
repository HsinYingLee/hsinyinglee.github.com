const PUBLICATIONS_DATA_URL = 'data/publications.json?v=20260717a';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('publications-container');
  const pubSection = document.querySelector('.publication-section .container');
  const categoriesContainer = document.querySelector('.pub-categories');

  if (!container || !pubSection || !categoriesContainer) {
    return;
  }

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

  const normalizePublication = publication => {
    const normalized = { ...publication };

    if (!Number.isInteger(normalized.year)) {
      const yearMatch = String(normalized.venue ?? '').match(/20\d{2}/);
      normalized.year = yearMatch ? Number(yearMatch[0]) : null;
    }

    if (normalized.imageUrl?.endsWith('.gif')) {
      const filename = normalized.imageUrl.split('/').pop();
      const stem = filename.slice(0, -4);
      normalized.videoUrl = `videos/publications/optimized/${stem}.mp4`;
      normalized.posterUrl = `videos/publications/optimized/${stem}.jpg`;
      delete normalized.imageUrl;
    } else if (normalized.videoUrl && !normalized.posterUrl) {
      const filename = normalized.videoUrl.split('/').pop();
      const stem = filename.replace(/\.mp4$/i, '');
      normalized.posterUrl = `videos/publications/optimized/${stem}.jpg`;
    }

    return normalized;
  };

  const getPublicationYear = publication => {
    return Number.isInteger(publication.year) ? String(publication.year) : 'Other';
  };

  const fetchPublications = async url => {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Unable to load publications from ${url}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Publication data must be an array.');
    }

    return data.map(normalizePublication);
  };

  const loadPublications = async () => {
    const urls = [
      PUBLICATIONS_DATA_URL,
      `data/publications.json?retry=${Date.now()}`
    ];
    let lastError = null;

    for (const url of urls) {
      try {
        return await fetchPublications(url);
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  };

  const renderLoadError = () => {
    container.innerHTML = '<p class="empty-state">Publications could not be loaded. Please refresh the page.</p>';
  };

  let publications = [];

  try {
    publications = await loadPublications();
  } catch (error) {
    console.error(error);
    renderLoadError();
    return;
  }

  const publicationYears = [...new Set(publications.map(getPublicationYear))]
    .sort((a, b) => {
      if (a === 'Other') return 1;
      if (b === 'Other') return -1;
      return Number(b) - Number(a);
    });
  const selectedPublications = publications.filter(pub => pub.featured);

  const scopeControls = document.createElement('div');
  scopeControls.className = 'publication-scope';
  scopeControls.innerHTML = `
    <div class="publication-summary">
      <span class="publication-kicker">Publication view</span>
      <span id="publication-view-label">Selected Publications</span>
      <span id="publication-count" aria-live="polite" aria-atomic="true"></span>
    </div>
    <div class="publication-view-switch" role="group" aria-label="Publication list scope">
      <button type="button" id="publication-selected" class="publication-toggle is-active" aria-pressed="true">Selected</button>
      <button type="button" id="publication-all" class="publication-toggle" aria-pressed="false">All publications</button>
    </div>
  `;
  pubSection.insertBefore(scopeControls, categoriesContainer);

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.innerHTML = `
    <div class="pub-search-field">
      <i class="material-icons" aria-hidden="true">search</i>
      <input type="search" id="pub-search" aria-label="Search publications" placeholder="Search title, author, or venue">
    </div>
  `;
  pubSection.insertBefore(searchContainer, categoriesContainer);

  const yearFilter = document.createElement('div');
  yearFilter.className = 'year-filter';
  yearFilter.innerHTML = `
    <label for="pub-year-filter">Year</label>
    <select id="pub-year-filter" class="pub-year-select" aria-label="Filter publications by year">
      <option value="all">All years</option>
      ${publicationYears.map(year =>
        `<option value="${escapeHTML(year)}">${escapeHTML(year)}</option>`
      ).join('')}
    </select>
  `;
  pubSection.insertBefore(yearFilter, container);

  const searchInput = document.getElementById('pub-search');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const yearSelect = document.getElementById('pub-year-filter');
  const selectedPublicationsButton = document.getElementById('publication-selected');
  const allPublicationsButton = document.getElementById('publication-all');
  const publicationViewLabel = document.getElementById('publication-view-label');
  const publicationCount = document.getElementById('publication-count');

  let currentCategory = 'all';
  let currentYear = 'all';
  let showAllPublications = false;
  let searchTerm = '';

  const notifyMediaUpdated = () => {
    document.dispatchEvent(new CustomEvent('site:media-updated', {
      detail: { root: container }
    }));
  };

  const renderPublications = pubs => {
    if (!pubs.length) {
      container.innerHTML = '<p class="empty-state">No publications match this filter.</p>';
      notifyMediaUpdated();
      return;
    }

    container.innerHTML = pubs.map((pub, index) => {
      const titleId = `publication-title-${index}`;
      const media = pub.videoUrl
        ? `<video src="${escapeHTML(pub.videoUrl)}"${pub.posterUrl ? ` poster="${escapeHTML(pub.posterUrl)}"` : ''} data-autoplay muted loop playsinline preload="none" aria-label="${escapeHTML(pub.title)} preview"></video>`
        : `<img src="${escapeHTML(pub.imageUrl)}" alt="${escapeHTML(pub.title)}" loading="lazy" decoding="async">`;

      return `
      <article class="pubwrap" aria-labelledby="${titleId}">
        <div class="pub-card">
          <div class="pub-media">
            <div class="pubimg">
              ${media}
            </div>
          </div>
          <div class="pub-content">
            <div class="pub">
              <h3 class="pubt" id="${titleId}">${escapeHTML(pub.title)}</h3>
              ${pub.description ? `<p class="pubd">${escapeHTML(pub.description)}</p>` : ''}
              <p class="puba">${escapeHTML(pub.authors)}</p>
              <p class="pubv">${escapeHTML(pub.venue)}</p>
              <div class="publ">
                <ul aria-label="${escapeHTML(pub.title)} links">
                  ${pub.links.map(link =>
                    `<li><a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.text)}</a></li>`
                  ).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
    }).join('');

    notifyMediaUpdated();
  };

  const filterAndRender = () => {
    const sourcePubs = showAllPublications ? publications : selectedPublications;
    const filteredPubs = sourcePubs.filter(pub => {
      const matchesCategory = currentCategory === 'all' || pub.category === currentCategory;
      const matchesYear = currentYear === 'all' || getPublicationYear(pub) === currentYear;
      const searchableText = [pub.title, pub.authors, pub.venue].join(' ').toLowerCase();
      const matchesSearch = searchableText.includes(searchTerm);
      return matchesCategory && matchesYear && matchesSearch;
    });

    const hasActiveFilter = currentCategory !== 'all' || currentYear !== 'all' || searchTerm;
    publicationViewLabel.textContent = showAllPublications ? 'Full Publication Archive' : 'Selected Publications';
    publicationCount.textContent = hasActiveFilter
      ? `${filteredPubs.length} of ${sourcePubs.length} shown`
      : `${sourcePubs.length} papers`;
    selectedPublicationsButton.classList.toggle('is-active', !showAllPublications);
    allPublicationsButton.classList.toggle('is-active', showAllPublications);
    selectedPublicationsButton.setAttribute('aria-pressed', String(!showAllPublications));
    allPublicationsButton.setAttribute('aria-pressed', String(showAllPublications));

    renderPublications(filteredPubs);
  };

  filterAndRender();

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(button => {
        const isActive = button === btn;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
      currentCategory = btn.dataset.category;
      filterAndRender();
    });
  });

  yearSelect.addEventListener('change', event => {
    currentYear = event.target.value;
    filterAndRender();
  });

  selectedPublicationsButton.addEventListener('click', () => {
    showAllPublications = false;
    filterAndRender();
  });

  allPublicationsButton.addEventListener('click', () => {
    showAllPublications = true;
    filterAndRender();
  });

  searchInput.addEventListener('input', event => {
    searchTerm = event.target.value.toLowerCase();
    filterAndRender();
  });
});
