# Lazra Labs — Site v2 (Lazra Nexus)

Static marketing site for **Lazra Nexus**: "One mind for the entire store." Main entry is `index.html` (inline CSS and JS, no build step). Legal: `privacy-policy.html`, `terms.html`.

The page presents one product, Lazra Nexus: the hub ("Every store. One surface.") and its four dashboards (DealerDash, ReconDash, Ledger, BlockIQ), each shown with a product illustration. It is platform first. Agents get one line ("a small private roster"), Claire is the only one named, and there is no pricing. Every call to action books a private briefing on Calendly.

The hub panel and the dashboard cards are HTML and CSS illustrations with made-up figures (the panel says "Illustrative figures"). They are not screenshots and not live data.

## Design tokens

Defined on `:root` in `index.html`:

| Token | Value | Role |
|--------|--------|------|
| `--obsidian` | `#070708` | Page background |
| `--gold` | `#C5A258` | The only accent: CTAs, numerals, hairlines |
| `--gold-pale` | `#E4CF9A` | Hover and gradient highlight |
| `--gold-line` | `rgba(197,162,88,0.28)` | Accent borders |
| `--bone` | `#EDE8DF` | Primary text |
| `--muted` | `rgba(237,232,223,0.58)` | Secondary text |
| `--faint` | `rgba(237,232,223,0.34)` | Labels, fine print |
| `--hairline` | `rgba(237,232,223,0.10)` | Dividers |

## Typography

- **Headlines:** Cormorant Garamond, weight 300, italic gold for the emphasized word.
- **Labels and body:** Plus Jakarta Sans, weight 300 to 500; labels are uppercase with wide tracking.

Both load from Google Fonts.

## The stage (WebGL background)

One fixed `<canvas id="stage">` behind the content, raw WebGL with no library. About 72k gold particles (26k on small screens) are positioned entirely in the vertex shader and morph between five forms as you scroll.

Each `<section>` declares its own keyframe with data attributes:

| Attribute | Meaning |
|---|---|
| `data-shape` | `0` core orb, `1` four orbiting bodies, `2` constellation, `3` lattice, `4` halo |
| `data-x`, `data-y` | Offset of the form in clip space (desktop) |
| `data-scale`, `data-alpha` | Size and brightness (desktop) |
| `data-mx`, `data-my`, `data-mscale`, `data-malpha` | The same, at 900px wide and below |

To restage a section, change its attributes. To add a form, add a branch to `shape()` in the vertex shader.

Fallbacks: without WebGL the page shows a static gold glow (`.no-gl`); with `prefers-reduced-motion` the field holds still and only redraws on scroll; rendering pauses when the tab is hidden.

## Claire widget

- Script is served from the widget CDN (`lazralabswebsitewidget.pages.dev/widget.js`), built from `lazralabs-eng/claire-bear`.
- Configure via `data-*` attributes on the `<script>` tag at the bottom of `index.html`. `data-brand-color` is gold `#C5A258` to match the page.

## Local preview

Serve the repo root with any static server, for example `python3 -m http.server`, and open `index.html`.
