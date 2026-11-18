# Aaron Sidhu - Engineering Portfolio

A static, dependency-free portfolio prepared for GitHub Pages. The site keeps the original three-page structure:

- `index.html` - introduction and selected project links
- `cv.html` - embedded and downloadable public CV
- `portfolio.html` - curated project case studies with category filters and image viewer

## Publish

1. Unzip this package.
2. Upload the contents of the folder (not the enclosing folder) to the root of the GitHub Pages repository.
3. In GitHub, select **Settings > Pages**, choose deployment from the `main` branch and `/ (root)`.
4. Check the published homepage, CV download and project galleries.

No build step, server, framework or external library is required. All site assets are local.

## Update content

Project copy and image captions are in `portfolio.html`; visual styling is in `assets/css/style.css`; filters and the accessible image viewer are in `assets/js/site.js`. Replace `assets/images/headshot.webp` with an approved portrait if desired, keeping the same filename or updating the `src` in `index.html`.

## Before publication

Read `EDITORIAL_REVIEW.txt` in this package. Source material contains NDA and internal-use signals, so employer-specific details and some imagery are intentionally omitted. The bundled CV is a public-safe derivative of the supplied CV, not the original PDF.
