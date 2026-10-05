const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light");
    const targetTheme = isLightMode ? "dark" : "light";

    themeBtn.setAttribute("aria-label", `Switch to ${targetTheme} mode`);
    themeBtn.title = `Switch to ${targetTheme} mode`;
});