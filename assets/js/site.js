// The theme switch, the phone menu, the repository filter, reveals on scroll, and live counts from GitHub and npm.

const root = document.documentElement;
const dark = () => root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);

document.getElementById("theme")?.addEventListener("click", () => {
    const next = dark() ? "light" : "dark";
    root.dataset.theme = next;
    try {
        localStorage.setItem("theme", next);
    } catch {
        // Storage blocked: the choice lasts for this visit
    }
});

const menu = document.getElementById("menu");
const mobileNav = document.getElementById("mobile-nav");
const setMenu = (open) => {
    menu?.setAttribute("aria-expanded", String(open));
    if (mobileNav) mobileNav.hidden = !open;
};
menu?.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
mobileNav?.addEventListener("click", (event) => event.target instanceof HTMLAnchorElement && setMenu(false));

const nav = document.getElementById("nav");
const onScroll = () => nav?.classList.toggle("scrolled", scrollY > 8);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Show the repositories of one kind; a group left with none is hidden
const filters = [...document.querySelectorAll(".filter")];
for (const button of filters) {
    button.addEventListener("click", () => {
        const wanted = button.dataset.filter;
        for (const other of filters) {
            other.classList.toggle("on", other === button);
            other.setAttribute("aria-pressed", String(other === button));
        }
        for (const repo of document.querySelectorAll("[data-kind]")) repo.hidden = wanted !== "all" && repo.dataset.kind !== wanted;
        for (const group of document.querySelectorAll("[data-group]")) group.hidden = !group.querySelector("[data-kind]:not([hidden])");
    });
}

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add("shown");
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((element) => observer.observe(element));
} else {
    reveals.forEach((element) => element.classList.add("shown"));
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Live counts, kept for an hour in this tab. A failed answer is not kept, and the page keeps its own numbers
// (or leaves a count hidden) when a service does not answer.
const cached = async (key, load) => {
    try {
        const hit = JSON.parse(sessionStorage.getItem(key) ?? "null");
        if (hit && Date.now() - hit.at < 3_600_000) return hit.value;
    } catch {
        // Ignore a broken cache
    }
    const value = await load();
    try {
        sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), value }));
    } catch {
        // Storage blocked
    }
    return value;
};
const json = (url) => fetch(url, { headers: { Accept: "application/json" } }).then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))));
const format = (n) => new Intl.NumberFormat("en", { notation: n >= 10_000 ? "compact" : "standard" }).format(n);
const show = (element, count) => {
    element.textContent = format(count);
    const unit = element.parentElement.querySelector(".unit");
    if (unit) unit.textContent = count === 1 ? "star" : "stars";
    element.parentElement.hidden = false;
};

async function stars() {
    const owners = ["orgs/araminix", "users/amin-abbasi"];
    const lists = await Promise.all(
        owners.map((owner) =>
            cached(`stars:${owner}`, async () => {
                const repos = await json(`https://api.github.com/${owner}/repos?per_page=100`);
                return Object.fromEntries(repos.map((repo) => [repo.full_name, repo.stargazers_count]));
            }).catch(() => ({})),
        ),
    );
    const counts = Object.assign({}, ...lists);
    for (const element of document.querySelectorAll("[data-stars]")) {
        const count = counts[element.dataset.stars];
        if (typeof count === "number") show(element, count);
    }
}

async function downloads() {
    const packages = [...new Set([...document.querySelectorAll("[data-npm]")].map((element) => element.dataset.npm))];
    const answers = await Promise.all(
        packages.map((name) => cached(`npm:${name}`, () => json(`https://api.npmjs.org/downloads/point/last-month/${name}`).then((answer) => answer.downloads)).catch(() => null)),
    );
    const counts = Object.fromEntries(packages.map((name, i) => [name, answers[i]]).filter(([, count]) => typeof count === "number"));
    for (const element of document.querySelectorAll("[data-npm]")) {
        const count = counts[element.dataset.npm];
        if (typeof count === "number") show(element, count);
    }
    // The total only replaces the written one when every package answered
    const stat = document.querySelector('[data-live="npm-total"]');
    if (stat && Object.keys(counts).length === packages.length) {
        const total = Object.values(counts).reduce((sum, n) => sum + n, 0);
        if (total > 0) stat.textContent = `${(Math.floor(total / 100) / 10).toFixed(1)}k+`;
    }
}

stars().catch(() => {});
downloads().catch(() => {});
