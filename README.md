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
- `js/publications.js`: Publication data, search, filters, and generated publication cards.
- `images/profile/`: Portrait and social preview imagery.
- `images/backgrounds/`: Page-level background imagery.
- `images/education/`: School logos used in the education section.
- `images/publications/`: Publication thumbnails and animated previews.
- `videos/illoca/optimized/`: Web-ready Illoca app demo clips and poster images.
- `videos/illoca/source/`: Original Illoca app demo captures kept out of the page load path.
- `videos/publications/`: Publication-specific video previews.
- `icons/`: Social icons.
- `Project_page/`: Legacy project pages and their assets.

## Adding Illoca Media
The Illoca section uses optimized MP4 demos from `videos/illoca/optimized/`. Prefer MP4/WebM for app demos because they are usually much smaller and smoother than GIFs. Replace a demo in `index.html` with an asset in `videos/illoca/optimized/`, for example:

```html
<video src="videos/illoca/optimized/prompted-plans.mp4" autoplay muted loop playsinline preload="metadata"></video>
```

Use the original files in `videos/illoca/source/` as source assets, then export web-ready versions without audio and with poster images.


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
