// Builds index.html and the repository covers from content.mjs. No dependencies: `node scripts/build.mjs`.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { cover, heroArt, icon, libArt, platformArt } from "./art.mjs";
import { capabilities, founder, kinds, principles, products, repos, site, stack, stats, writing } from "./content.mjs";

const root = new URL("../", import.meta.url);
const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const external = (href) => (href.startsWith("http") ? ' rel="noopener" target="_blank"' : "");
const link = ({ label, href, primary, icon: name }) => `<a class="btn${primary ? " primary" : ""}" href="${href}"${external(href)}>${name ? icon(name, 18) : ""}${esc(label)}</a>`;
const chips = (items, cls = "chip") => `<ul class="chips">${items.map((item) => `<li class="${cls}">${esc(item)}</li>`).join("")}</ul>`;
const LANG = { TypeScript: "ts", JavaScript: "js", Go: "go", "C#": "cs", Python: "py" };

// ---------- Products ----------

const plantlineMedia = () => `
<div class="shots">
  <figure class="frame back"><img src="assets/img/plantline/layout.webp" alt="plantline's plant layout: a solar plant on satellite imagery with an inverter described" width="1440" height="900" loading="lazy"></figure>
  <figure class="frame front">
    <img class="only-light" src="assets/img/plantline/diagram.webp" alt="plantline's diagram editor: a solar plant's single-line diagram with a transformer's properties" width="1440" height="900" loading="lazy">
    <img class="only-dark" src="assets/img/plantline/dark.webp" alt="plantline's diagram editor in the dark theme, its language list open: 14 languages, each with its flag" width="1440" height="900" loading="lazy">
  </figure>
  <figure class="frame phone"><img src="assets/img/plantline/phone.webp" alt="plantline on a phone, in Persian, right to left" width="412" height="839" loading="lazy"></figure>
</div>`;

const libCode = `<pre class="code" aria-label="A stream opened over a socket"><code><span class="k">const</span> socket = (<span class="k">await</span> client.<span class="f">connect</span>(<span class="s">'chat'</span>, <span class="s">'room-42'</span>)).<span class="f">unwrap</span>();
<span class="k">const</span> opened = <span class="k">await</span> socket.<span class="f">outgoingStream</span>&lt;<span class="t">Topic</span>, <span class="t">string</span>, <span class="t">string</span>&gt;(
    <span class="s">'ask'</span>, { topic: <span class="s">'weather'</span> });
<span class="k">if</span> (opened.<span class="f">isOk</span>()) {
    <span class="k">const</span> stream = opened.<span class="f">unwrap</span>();
    <span class="k">await</span> stream.<span class="f">write</span>(<span class="s">'Will it rain tomorrow?'</span>);
    <span class="c">// Result&lt;string, StreamErr&gt;, never a throw</span>
    <span class="k">const</span> answer = <span class="k">await</span> stream.<span class="f">read</span>(<span class="n">10</span>);
}</code></pre>`;

const media = { plantline: plantlineMedia, platform: () => `<div class="art-card">${platformArt()}</div>`, lib: () => `<div class="art-card">${libArt()}${libCode}</div>` };

const productBlock = (p, i) => `
<article class="product${i % 2 ? " flip" : ""}" id="${p.id}">
  <div class="product-text">
    <p class="kind">${esc(p.kind)}</p>
    <h3>${esc(p.name)}</h3>
    <p class="product-tagline">${esc(p.tagline)}</p>
    <p>${esc(p.text)}</p>
    <ul class="points">${p.points.map(([title, text]) => `<li>${icon("circle-check", 18)}<span><b>${esc(title)}.</b> ${esc(text)}</span></li>`).join("")}</ul>
    ${chips(p.tech)}
    <div class="meta">
      <span hidden>${icon("star", 16)}<b data-stars="${p.repo}"></b> <span class="unit">stars</span></span>
      <span>${icon("package", 16)}v${esc(p.version)}</span>
      ${p.npm ? `<span hidden>${icon("download", 16)}<b data-npm="${p.npm}"></b> downloads last month</span>` : `<span>${icon("globe", 16)}free, in any browser</span>`}
    </div>
    <div class="actions">${p.links.map(link).join("")}</div>
  </div>
  <div class="product-media reveal">${media[p.media]()}</div>
</article>`;

// ---------- Open source ----------

const KIND = Object.fromEntries(kinds);
const carded = repos.filter((r) => r.icon);
const listed = repos.filter((r) => !r.icon);
const repoLink = (r, text) => `<a href="https://github.com/${r.repo}" rel="noopener" target="_blank">${esc(text)}</a>`;

const repoCard = (r) => {
    const name = r.repo.split("/")[1];
    return `
<article class="repo reveal" data-kind="${r.kind}">
  <a class="repo-cover" href="https://github.com/${r.repo}" rel="noopener" target="_blank" tabindex="-1" aria-hidden="true"><img src="assets/img/covers/${name}.svg" alt="" width="640" height="336" loading="lazy"></a>
  <div class="repo-body">
    <p class="kind">${esc(KIND[r.kind])}</p>
    <h3>${repoLink(r, r.title)}</h3>
    <p class="repo-path">${esc(r.repo)}</p>
    <p>${esc(r.text)}</p>
    ${chips(r.tags, "tag")}
  </div>
  <footer class="repo-foot">
    <span class="lang"><i class="dot ${LANG[r.language]}"></i>${esc(r.language)}</span>
    <span>${icon("star", 15)}<b data-stars="${r.repo}">${r.stars}</b></span>
    ${r.npm ? `<a href="https://www.npmjs.com/package/${r.npm}" rel="noopener" target="_blank">${icon("package", 15)}npm</a><span hidden>${icon("download", 15)}<b data-npm="${r.npm}"></b> a month</span>` : ""}
    ${r.extra ? `<a href="${r.extra.href}" rel="noopener" target="_blank">${icon(r.extra.href.includes("dev.to") ? "newspaper" : "globe", 15)}${esc(r.extra.label)}</a>` : ""}
  </footer>
</article>`;
};

// The rest: one row each
const repoRow = (r) => `
<li class="repo-row" data-kind="${r.kind}">
  <div><h4>${repoLink(r, r.title)}</h4><p>${esc(r.text)}</p></div>
  <span class="repo-path">${esc(r.repo.split("/")[1])}</span>
  <span class="lang"><i class="dot ${LANG[r.language]}"></i>${esc(r.language)}</span>
  <span class="row-kind">${esc(KIND[r.kind])}</span>
</li>`;

const count = (kind) => repos.filter((r) => r.kind === kind).length;
const filterButton = ([kind, label]) => `<button type="button" class="filter${kind === "all" ? " on" : ""}" data-filter="${kind}" aria-pressed="${kind === "all"}">${esc(label)}<span class="count">${kind === "all" ? repos.length : count(kind)}</span></button>`;
const languageNames = [...new Set(repos.map((r) => r.language))];
const inWords = (items) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items.at(-1)}` : items[0]);

// ---------- Page ----------

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; font-src 'self'; connect-src https://api.github.com https://api.npmjs.org; object-src 'none'; base-uri 'self'; form-action 'none'">
<title>Araminix · streaming runtimes, real-time platforms and energy software</title>
<meta name="description" content="${esc(site.description)}">
<link rel="canonical" href="${site.url}">
<meta name="theme-color" content="#070b14" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/png" href="assets/img/icon-64.png">
<link rel="apple-touch-icon" href="assets/img/icon-180.png">
<link rel="preload" href="assets/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/site.css">
<script src="assets/js/theme.js"></script>
<script src="assets/js/site.js" defer></script>
<meta property="og:type" content="website">
<meta property="og:url" content="${site.url}">
<meta property="og:title" content="Araminix · ${esc(site.tagline)}">
<meta property="og:description" content="${esc(site.description)}">
<meta property="og:image" content="${site.url}assets/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}assets/img/icon-180.png`,
    description: site.description,
    founder: { "@type": "Person", name: founder.name, url: "https://amin-abbasi.github.io/", sameAs: founder.accounts.map((a) => a.href) },
    sameAs: [site.github, "https://www.npmjs.com/org/araminix"],
})}</script>
</head>
<body>
<a class="skip" href="#main">Skip to the content</a>
<header class="nav" id="nav">
  <div class="wrap nav-in">
    <a class="brand" href="#top"><img src="assets/img/icon-64.png" width="34" height="34" alt="">Araminix</a>
    <nav class="nav-links" aria-label="Sections"><a href="#products">Products</a><a href="#open-source">Open source</a><a href="#capabilities">Capabilities</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <div class="nav-tools">
      <button class="icon-btn" id="theme" type="button" aria-label="Switch between light and dark">${icon("sun", 19, "icon only-dark")}${icon("moon", 19, "icon only-light")}</button>
      <a class="btn small" href="${site.github}" rel="noopener" target="_blank">${icon("github", 18)}GitHub</a>
      <button class="icon-btn menu-btn" id="menu" type="button" aria-label="Sections" aria-expanded="false" aria-controls="mobile-nav">${icon("menu", 20)}</button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Sections" hidden><a href="#products">Products</a><a href="#open-source">Open source</a><a href="#capabilities">Capabilities</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
</header>

<main id="main">
<section class="hero" id="top">
  <div class="wrap hero-in">
    <div class="hero-text">
      <p class="eyebrow">${icon("map-pin", 15)}Open-source engineering by ${esc(founder.name)}, ${esc(site.location)}</p>
      <h1>Where serenity <span class="grad">meets speed.</span></h1>
      <p class="lead">${esc(site.summary)}</p>
      <div class="actions"><a class="btn primary big" href="#products">Explore the products${icon("arrow-right", 18)}</a><a class="btn big" href="${site.github}" rel="noopener" target="_blank">${icon("github", 18)}github.com/araminix</a></div>
    </div>
    ${heroArt("assets/img/logo-400.webp")}
  </div>
  <div class="wrap"><dl class="stats">${stats.map((s) => `<div><dt>${esc(s.label)}</dt><dd${s.live ? ` data-live="${s.live}"` : ""}>${esc(s.value === "repos" ? products.length + repos.length : s.value)}</dd></div>`).join("")}</dl></div>
</section>

<section class="section" id="products">
  <div class="wrap">
    <header class="section-head"><p class="eyebrow">Products</p><h2>Three products, one standard</h2><p>A tool engineers use every day, and the runtime and protocol underneath real-time applications: each built to the same bar of typing, testing and documentation.</p></header>
    ${products.map(productBlock).join("")}
    <aside class="stack-note reveal">${icon("workflow", 22)}<p><b>How they fit together.</b> <code>@araminix/lib</code> is the wire: typed streams over one WebSocket, in the browser and in Node.js. <code>@araminix/platform</code> is the server built on it: apps in their own workers, a server-driven UI, and agents for devices and services. plantline shows the same care in a product engineers use directly.</p></aside>
  </div>
</section>

<section class="section alt" id="open-source">
  <div class="wrap">
    <header class="section-head"><p class="eyebrow">Open source</p><h2>Everything on GitHub</h2><p>One person, one account: the Araminix organisation belongs to <a href="https://github.com/amin-abbasi" rel="noopener" target="_blank">amin-abbasi</a>, and so does everything else here. Beside the three products, ${repos.length} public repositories of libraries, architecture studies, starters and samples, in ${inWords(languageNames)}.</p></header>
    <div class="filters" role="group" aria-label="Show repositories of a kind">${[["all", "All"], ...kinds].map(filterButton).join("")}</div>
    <div class="grid repos" data-group>${carded.map(repoCard).join("")}</div>
    <div class="repo-more" data-group>
      <h3 class="sub-head">More repositories</h3>
      <ul class="repo-list">${listed.map(repoRow).join("")}</ul>
    </div>
    <p class="more"><a href="https://github.com/amin-abbasi?tab=repositories" rel="noopener" target="_blank">All of them on GitHub${icon("arrow-up-right", 16)}</a></p>
  </div>
</section>

<section class="section" id="capabilities">
  <div class="wrap">
    <header class="section-head"><p class="eyebrow">Capabilities</p><h2>What we build</h2><p>From the wire protocol to the screen an engineer works on.</p></header>
    <div class="grid three">${capabilities.map(([name, title, text]) => `<article class="card reveal"><span class="card-icon">${icon(name, 22)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>
    <h3 class="sub-head">How we work</h3>
    <ul class="principles">${principles.map(([name, title, text]) => `<li class="reveal">${icon(name, 20)}<div><b>${esc(title)}</b><span>${esc(text)}</span></div></li>`).join("")}</ul>
    <h3 class="sub-head" id="stack">The tools we know well</h3>
    <div class="stack">${stack.map(([title, items]) => `<div class="stack-row reveal"><h4>${esc(title)}</h4>${chips(items)}</div>`).join("")}</div>
  </div>
</section>

<section class="section alt" id="about">
  <div class="wrap founder reveal">
    <div class="portrait"><img src="assets/img/founder.webp" alt="Amin Abbasi" width="240" height="240" loading="lazy"></div>
    <div>
      <p class="eyebrow">About</p>
      <h2>${esc(founder.name)}</h2>
      <p class="role">${esc(founder.role)} · ${esc(site.location)}</p>
      ${founder.text.map((t) => `<p>${esc(t)}</p>`).join("")}
      <dl class="numbers">${founder.numbers.map(([value, label]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
      <h3 class="sub-head">Selected results</h3>
      <ul class="highlights">${founder.highlights.map(([name, text]) => `<li>${icon(name, 20)}<span>${esc(text)}</span></li>`).join("")}</ul>
      <h3 class="sub-head">Writing</h3>
      ${writing.map((w) => `<a class="article" href="${w.href}" rel="noopener" target="_blank"><span class="card-icon">${icon("newspaper", 22)}</span><div><p class="kind">${esc(w.where)} · ${esc(w.date)}</p><h4>${esc(w.title)}</h4><p>${esc(w.text)}</p></div>${icon("arrow-up-right", 20)}</a>`).join("")}
      <ul class="accounts">${founder.accounts.map((a) => `<li><a href="${a.href}" rel="noopener" target="_blank">${icon(a.icon, 18)}<span><b>${esc(a.label)}</b><small>${esc(a.note)}</small></span></a></li>`).join("")}</ul>
    </div>
  </div>
</section>

<section class="section" id="contact">
  <div class="wrap">
    <div class="contact reveal">
      <h2>Building something real-time, or software for power plants?</h2>
      <p>Open an issue on any repository, or write to Amin through amin-abbasi.github.io or on X.</p>
      <div class="actions"><a class="btn primary big" href="${site.github}" rel="noopener" target="_blank">${icon("github", 18)}Araminix on GitHub</a><a class="btn big" href="https://amin-abbasi.github.io/" rel="noopener" target="_blank">${icon("globe", 18)}amin-abbasi.github.io</a></div>
    </div>
  </div>
</section>
</main>

<footer class="footer">
  <div class="wrap footer-in">
    <a class="brand" href="#top"><img src="assets/img/icon-64.png" width="28" height="28" alt="">Araminix</a>
    <p>© <span id="year">2026</span> Araminix · No trackers, no cookies. Star and download counts come live from GitHub and npm.</p>
    <nav aria-label="Elsewhere"><a href="${site.github}" rel="noopener" target="_blank">GitHub</a><a href="https://www.npmjs.com/org/araminix" rel="noopener" target="_blank">npm</a><a href="https://araminix.github.io/plantline/">plantline</a><a href="https://amin-abbasi.github.io/" rel="noopener" target="_blank">Amin Abbasi</a></nav>
  </div>
</footer>
</body>
</html>
`;

writeFileSync(new URL("index.html", root), html);
// The covers of the repositories shown as cards, and no others
rmSync(new URL("assets/img/covers/", root), { recursive: true, force: true });
mkdirSync(new URL("assets/img/covers/", root), { recursive: true });
for (const r of carded) writeFileSync(new URL(`assets/img/covers/${r.repo.split("/")[1]}.svg`, root), cover(r));
console.log(`index.html and ${carded.length} covers`);
