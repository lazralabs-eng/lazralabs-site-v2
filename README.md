# Lazra Labs — Site v2

Static marketing site: **“Turning Opportunity into Action.”** Main entry is `index.html` (inline CSS). Legal: `privacy-policy.html`, `terms.html`.

## Brand & design tokens

Defined on `:root` in `index.html`:

| Token | Value | Role |
|--------|--------|------|
| `--navy` | `#0D1828` | Page background, deep base |
| `--navy-mid` | `#1B2A4A` | Surfaces, cards |
| `--navy-light` | `#243557` | Layered UI |
| `--gold` | `#C5A258` | Primary accent, CTAs, highlights |
| `--gold-light` | `#D4B86A` | Hover / brighter gold |
| `--gold-dim` | `rgba(197,162,88,0.15)` | Soft gold fills |
| `--gold-border` | `rgba(197,162,88,0.25)` | Accent borders |
| `--white` | `#F4F1EC` | Primary text |
| `--muted` | `rgba(244,241,236,0.45)` | Secondary text |
| `--subtle` | `rgba(244,241,236,0.12)` | Hairlines, dividers |

**Semantic green (status / positive):** `#5ECC84` — used for “live” states and checkmarks in comparison blocks (not a CSS variable today; matches agent/carousel “live” styling).

**Claire widget:** Embedded script uses `data-brand-color="#a855f7"` in `index.html` (purple accent for the chat chrome); site chrome stays **navy + gold**.

## Typography

- **Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (weights 300–800), loaded from Google Fonts in `index.html`.
- **Logo / headings:** Same family; heavy weights (700–800) for display.

## Claire widget

- Script: `snippets/widget.js`
- Configure via `data-*` attributes on the `<script>` tag in `index.html` (`data-api-url`, `data-dealer`, `data-brand-color`, etc.).

## Local preview

Open `index.html` in a browser, or serve the repo root with any static server (paths assume `/snippets/...` from site root).
