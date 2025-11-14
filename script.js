// Smooth scrolling
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const header = document.querySelector("header");
      const offset = header.offsetHeight + 20;
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  });
});

// Form submission (only if form exists)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.createElement("div");
    msg.textContent = "✅ Thank you! I will get back to you soon.";
    msg.style.cssText =
      "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, var(--purple-600), var(--purple-400)); color: white; padding: 2rem; border-radius: 15px; box-shadow: 0 20px 40px rgba(76,29,149,0.25); z-index: 10000; font-weight: 600;";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
    this.reset();
  });
}