# Hsin-Ying Lee's Personal Website

This is the source code for my personal website, hosted at [hsinyinglee.com](https://hsinyinglee.com).

## Features
- **Current Work**: Illoca/Tracing Paper overview with optimized product demos.
- **Researcher Profile**: Overview of my research interests and background.
- **Publications**: Selected research by default, with search, category, year, and full-archive controls.
- **News**: Recent updates with an expandable older archive.
- **Education**: Academic background.

## Structure
- `index.html`: Main homepage content and section order.
- `css/main.css`: Site-specific styling and responsive layout.
- `js/site.js`: Mobile navigation behavior.
- `data/publications.json`: Publication data used by the homepage.
- `js/publications.js`: Publication search, filters, and generated publication cards.
- `scripts/validate-publications.mjs`: Lightweight checks for publication data and local assets.
- `images/profile/`: Portrait and social preview imagery.
- `images/backgrounds/`: Page-level background imagery.
- `images/education/`: School logos used in the education section.
- `images/publications/`: Publication thumbnails and animated previews.
- `videos/illoca/optimized/`: Web-ready Illoca app demo clips and poster images.
- `videos/illoca/source/`: Local-only original Illoca app demo captures. Keep source captures outside the published GitHub Pages repo and commit only optimized web assets. Current originals have been moved to `../hsinyinglee.github.com-media-source/videos/illoca/source/`.
- `videos/publications/`: Publication-specific video previews.
- `icons/`: Social icons.
- `Project_page/`: Legacy project pages and their assets.

## Adding Illoca Media
The Illoca section uses optimized MP4 demos from `videos/illoca/optimized/`. Prefer MP4/WebM for app demos because they are usually much smaller and smoother than GIFs. Replace a demo in `index.html` with an asset in `videos/illoca/optimized/`, for example:

```html
<video src="videos/illoca/optimized/prompted-plans.mp4" autoplay muted loop playsinline preload="metadata"></video>
```

Use original capture files from your private media archive as source assets, then export web-ready versions without audio and with poster images. Keep those originals out of the GitHub Pages publish path; `videos/illoca/source/` is ignored for new files, and this repo's current local source archive lives at `../hsinyinglee.github.com-media-source/videos/illoca/source/`.

## Adding Publications
Add or edit entries in `data/publications.json`, then validate the data and local media paths:

```bash
node scripts/validate-publications.mjs
```

The homepage loads this JSON at runtime and renders the selected-publications view, search, category filters, year filters, and full archive controls from it.


## Local Development
To view the website locally, you can use any static file server. For example, using Python:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Tech Stack
- HTML5 / CSS3 with custom responsive layout
- JavaScript (Vanilla)
- Google Material Icons
- Hosted on GitHub Pages
