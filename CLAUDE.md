# Claude Code Context

## Project Overview

A mathematics blog built with Hugo, featuring:
- **Build-time KaTeX rendering** - Math renders at build time, no client-side delay
- **Knowl system** - Clickable terms that expand inline to show definitions (inspired by nLab)
- **Giscus comments** - GitHub Discussions-based comments with fallback form for non-GitHub users
- **GitHub Pages deployment** - Automated via GitHub Actions

## Quick Start

```bash
# Start development server
hugo server

# Build for production
hugo --minify
```

## Architecture

```
Hugo (v0.132+) + Build-time KaTeX (htmlAndMathml) + Custom Knowls + Giscus + Form Submission
```

Theme: **PaperMod**

## Key Files

### Layouts
- `layouts/_default/_markup/render-passthrough.html` - Build-time KaTeX math rendering
- `layouts/partials/extend_head.html` - Loads KaTeX CSS and knowls JS/CSS
- `layouts/partials/comments.html` - Giscus widget + fallback form (needs configuration)
- `layouts/shortcodes/knowl.html` - `{{</* knowl id="term" text="display text" */>}}` shortcode
- `layouts/glossary/single.html` - Full glossary entry page (with knowl-extractable content)
- `layouts/glossary/list.html` - Glossary index with knowl links

### Static Assets
- `static/js/knowls.js` - Vanilla JS for fetching/caching/displaying knowl popups
- `static/css/knowls.css` - Styling for knowl triggers and panels
- `assets/css/extended/custom.css` - Color customization (CSS variables)

### Content
- `content/posts/` - Blog posts
- `content/glossary/` - Mathematical definitions (used by knowl system)

### Deployment
- `.github/workflows/hugo.yml` - GitHub Actions workflow for Pages deployment

## Configuration Needed Before Deploy

### 1. Giscus (in `layouts/partials/comments.html`)
1. Enable GitHub Discussions on your repo
2. Install Giscus app: https://github.com/apps/giscus
3. Configure at https://giscus.app/
4. Replace placeholders: `YOUR_USERNAME/YOUR_REPO`, `YOUR_REPO_ID`, `YOUR_CATEGORY_ID`

### 2. Formspree (in `layouts/partials/comments.html`)
1. Sign up at https://formspree.io
2. Replace `YOUR_FORM_ID` with your form endpoint

### 3. GitHub Pages
1. Push to GitHub
2. Go to repo Settings → Pages → Source: "GitHub Actions"

## Knowl Usage

In any markdown file:
```markdown
A {{</* knowl id="vector-space" text="vector space" */>}} is a set V with...
```

The `id` must match a file in `content/glossary/` (e.g., `vector-space.md`).

Knowls support nesting up to 2 levels deep, then fall back to navigation.

## Color Customization

Edit `assets/css/extended/custom.css` to override PaperMod's CSS variables:

```css
:root {
    --primary: #2563eb;  /* Blue accent */
}
.dark {
    --primary: #60a5fa;
}
```

## Theme Switching (Development)

Other themes installed in `themes/`: coder, congo, blowfish

```bash
# Switch themes via config override
hugo server --config "hugo.toml,config.coder.toml"
```

Config files: `config.papermod.toml`, `config.coder.toml`, `config.congo.toml`, `config.blowfish.toml`

## Math Rendering Notes

- Uses `htmlAndMathml` output for accessibility
- For posts/glossary entries shown in lists, add explicit `summary:` in front matter to avoid garbled math in previews
- Glossary entries use `build: list: local` to exclude from homepage

## Files to Ignore

See `.gitignore` - notably `/public/`, `/resources/`, `.hugo_build.lock`

## Reference Docs

- `PLAN.md` - Original project vision
- `SYNTHESIS.md` - Architecture decision rationale
- `IMPLEMENTATION.md` - Detailed implementation roadmap
