// Runs before the page draws: the chosen theme, and a mark that scripts run (for the reveal on scroll).
document.documentElement.classList.add("js");
try {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
} catch {
    // Storage blocked: the theme follows the system
}
