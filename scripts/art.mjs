// The site's illustrations: drawn as SVG so they follow the theme (inline ones use the page's colours).
import { ICONS } from "./icons.mjs";

export const icon = (name, size = 20, cls = "icon") =>
    `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/** Rings around the logo, with the stack's parts orbiting it. */
export const heroArt = (logo) => `
<div class="orbit" aria-hidden="true">
  <svg viewBox="0 0 520 520" class="orbit-rings">
    <defs><radialGradient id="glow"><stop offset="0" stop-color="var(--glow-a)" stop-opacity=".55"/><stop offset="1" stop-color="var(--glow-b)" stop-opacity="0"/></radialGradient></defs>
    <circle cx="260" cy="260" r="250" fill="url(#glow)"/>
    <circle cx="260" cy="260" r="235" class="ring"/>
    <circle cx="260" cy="260" r="175" class="ring dashed"/>
    <circle cx="260" cy="260" r="115" class="ring"/>
    <g class="spin slow"><circle cx="260" cy="25" r="6" class="dot a"/><circle cx="495" cy="260" r="4" class="dot b"/><circle cx="94" cy="426" r="5" class="dot c"/></g>
    <g class="spin fast"><circle cx="260" cy="85" r="5" class="dot b"/><circle cx="111" cy="347" r="4" class="dot a"/></g>
  </svg>
  <img src="${logo}" alt="" class="orbit-logo" width="200" height="200">
  <span class="chip c1">${icon("radio-tower", 16)}Streams</span>
  <span class="chip c2">${icon("cpu", 16)}Actors</span>
  <span class="chip c3">${icon("cable", 16)}Agents</span>
  <span class="chip c4">${icon("zap", 16)}plantline</span>
</div>`;

const box = (x, y, w, h, title, sub = "", cls = "") =>
    `<g class="art-box ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/><text x="${x + 14}" y="${y + 24}" class="art-t">${title}</text>${sub ? `<text x="${x + 14}" y="${y + 42}" class="art-s">${sub}</text>` : ""}</g>`;

/** @araminix/lib: many typed streams over one WebSocket. */
export const libArt = () => `
<svg viewBox="0 0 600 360" class="art" role="img" aria-label="Typed streams, each with its own direction, share one WebSocket between a client and the server">
  ${box(16, 40, 150, 250, "Client", "browser or Node.js")}
  ${box(434, 40, 150, 250, "Server", "@araminix/platform")}
  <rect x="166" y="92" width="268" height="168" rx="26" class="pipe"/>
  <text x="300" y="82" class="art-s mid">one WebSocket</text>
  ${[
      ["chat", "both", 122, "a"],
      ["ask", "out", 156, "b"],
      ["notifications", "in", 190, "c"],
      ["files", "out", 224, "d"],
  ]
      .map(
          ([name, way, y, c]) => `
  <line x1="152" y1="${y}" x2="448" y2="${y}" class="lane ${c} ${way}"/>
  <circle cx="152" cy="${y}" r="5" class="end ${c}"/><circle cx="448" cy="${y}" r="5" class="end ${c}"/>
  <text x="30" y="${y + 4}" class="art-s">${name} ${way === "both" ? "⇄" : way === "out" ? "→" : "←"}</text>`,
      )
      .join("")}
  <g class="art-note"><rect x="120" y="300" width="360" height="40" rx="20"/><text x="300" y="325" class="art-s mid">heartbeats · resumable reconnects · Result&lt;T, E&gt;</text></g>
</svg>`;

/** @araminix/platform: browsers, a hardened endpoint, one worker per app, agents. */
export const platformArt = () => `
<svg viewBox="0 0 600 380" class="art" role="img" aria-label="Browsers connect through a hardened endpoint; every app runs in its own worker thread; agents connect through workers of their own">
  ${box(12, 40, 108, 70, "Browser", "user A")}
  ${box(12, 128, 108, 70, "Browser", "user B")}
  ${box(12, 268, 108, 70, "Device", "or service")}
  ${box(150, 40, 130, 158, "Endpoint", "sessions · 2FA")}
  <text x="164" y="120" class="art-s">CSRF guard</text><text x="164" y="140" class="art-s">origin checks</text><text x="164" y="160" class="art-s">rate limits</text><text x="164" y="180" class="art-s">uploads</text>
  ${box(150, 268, 130, 70, "Agent link", "x-token")}
  ${box(312, 18, 270, 344, "Platform", "main thread routes streams", "outer")}
  ${[0, 1, 2]
      .map(
          (i) => `<g class="art-box worker"><rect x="330" y="${78 + i * 66}" width="234" height="52" rx="10"/><text x="344" y="${100 + i * 66}" class="art-t">App · worker ${i + 1}</text><text x="344" y="${118 + i * 66}" class="art-s">$open · $patch · $next</text><circle cx="544" cy="${104 + i * 66}" r="6" class="live"/></g>`,
      )
      .join("")}
  <g class="art-box worker agent"><rect x="330" y="282" width="234" height="52" rx="10"/><text x="344" y="304" class="art-t">Agent · worker</text><text x="344" y="322" class="art-s">tasks and messages</text></g>
  <path d="M120 75 H150 M120 163 H150 M280 100 H330 M280 166 H330 M280 232 H330 M120 303 H150 M280 303 H330" class="wire"/>
</svg>`;

const TONES = {
    ts: ["#2563eb", "#7c3aed"],
    graph: ["#0f766e", "#2563eb"],
    perf: ["#c2410c", "#be123c"],
    sale: ["#db2777", "#7c3aed"],
    term: ["#0f172a", "#334155"],
    js: ["#ca8a04", "#ea580c"],
    go: ["#0891b2", "#0e7490"],
    cs: ["#7c3aed", "#4c1d95"],
    video: ["#e11d48", "#9333ea"],
    key: ["#334155", "#0f766e"],
    mq: ["#ea580c", "#b45309"],
    grpc: ["#0d9488", "#0369a1"],
    py: ["#1d4ed8", "#a16207"],
    chat: ["#059669", "#0284c7"],
    site: ["#0d9488", "#7c3aed"],
    logs: ["#475569", "#0369a1"],
    goalt: ["#0e7490", "#4338ca"],
};

/** A repository's cover: its tone, a dot grid, its icon large, and its name. Standalone SVG, so it sets its own colours. */
export function cover({ repo, icon: name, tone, language }) {
    const [a, b] = TONES[tone];
    const short = repo.split("/")[1];
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 336" width="640" height="336">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
  <pattern id="d" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="#fff" fill-opacity=".16"/></pattern>
</defs>
<rect width="640" height="336" fill="url(#g)"/>
<rect width="640" height="336" fill="url(#d)"/>
<circle cx="520" cy="60" r="160" fill="#fff" fill-opacity=".06"/>
<g transform="translate(408 70) scale(8.5)" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</g>
<rect x="32" y="32" rx="14" width="${language.length * 11 + 28}" height="30" fill="#000" fill-opacity=".22"/>
<text x="46" y="53" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="17" fill="#fff">${language}</text>
<text x="32" y="296" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="${short.length > 22 ? 24 : 28}" font-weight="700" fill="#fff">${short}</text>
</svg>`;
}
