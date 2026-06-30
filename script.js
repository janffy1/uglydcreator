// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// Simple fade-in effect when page loads
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


// Console branding (for professionalism 😎)
console.log("%cUGLYDCREATOR Portfolio Loaded 🚀", "color:gold; font-size:14px;");
