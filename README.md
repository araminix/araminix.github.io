# araminix.github.io

The Araminix website: https://araminix.github.io/

A static page with no framework and no dependencies. Node.js builds it from plain data, GitHub Pages serves the
files as they are.

## Editing

Change the text in `scripts/content.mjs`, then build:

```sh
node scripts/build.mjs
```

The build writes `index.html` and one cover picture per repository in `assets/img/covers/`. Commit both.

| File | Holds |
| --- | --- |
| `scripts/content.mjs` | Everything the page says: products, the featured library and starters, the other repositories, capabilities, the technology list, writing, the founder |
| `scripts/build.mjs` | The page's markup |
| `scripts/art.mjs` | The drawings: the hero, the package diagrams and the repository covers |
| `scripts/icons.mjs` | The icons used (Lucide, and the GitHub mark) |
| `assets/css/site.css` | All styles, light and dark |
| `assets/js/theme.js` | Applies the chosen theme before the page draws |
| `assets/js/site.js` | Theme switch, phone menu, and live star and download counts |

A repository shown like a product (gach, the boilerplates) goes in `featured`, with its own picture in `build.mjs`.
A smaller one goes in `repos`, with an `icon` from `scripts/icons.mjs` and a `tone` from `TONES` in
`scripts/art.mjs`; the build draws its cover. Only repositories worth advertising are listed: maintained, tested or
documented, and relevant to Araminix; every one is public on github.com/amin-abbasi, the account the Araminix
organisation belongs to. To add an icon, copy its inner SVG from https://lucide.dev into
`scripts/icons.mjs`.

## Looking at it locally

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080/. Star counts come from the GitHub API and download counts from the npm API, in the
visitor's browser, and are kept for an hour; without them the page shows the numbers written in `content.mjs`.

## Privacy and security

No cookies, no analytics and no third-party scripts or fonts. A Content Security Policy allows only the site's own
files and the two count APIs.

## Licences

- Code (scripts, styles, markup): MIT, see [LICENSE](LICENSE).
- Texts, the Araminix logo, the photo and the product screenshots: © Araminix, not covered by the MIT licence.
- Inter: SIL Open Font License 1.1, see `assets/fonts/Inter-OFL.txt`.
- Lucide icons: ISC License, © Lucide Contributors. GitHub mark: Octicons, MIT License, © GitHub.
