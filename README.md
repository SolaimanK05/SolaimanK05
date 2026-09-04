# Solaiman Kalam — Portfolio

Personal portfolio site for Solaiman Kalam, a CSE undergrad at Islamic University of Technology (IUT), Bangladesh, working on the software/algorithms side of robotics (control logic, computer vision, path planning) with [Blueprint Robotics](https://github.com/Blueprint-Robotics).

**Live site:** https://solaimank05.github.io/SolaimanK05/

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies. Deployed as a static site via GitHub Pages.

## Structure

```
index.html          # single-page site: nav, hero, about, projects, achievements, skills, contact
css/style.css        # design tokens, layout, animations
js/main.js            # typewriter effect, scroll reveal, hero mouse spotlight
assets/icons/         # self-hosted brand SVGs (Simple Icons, downloaded locally)
assets/img/           # project photos
```

## Features

- Dark, terminal-inspired design with a typewriter hero, animated background grid, and scroll-triggered reveals
- Fully responsive with fluid (`clamp()`-based) type and spacing — no fixed breakpoints
- Respects `prefers-reduced-motion`
- No external runtime dependencies — fonts load from Google Fonts, icons are self-hosted, everything else is inline

## Local development

No build step required. Serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Static HTML on GitHub Pages, served from `main` at the repository root.
