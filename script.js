// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const html = document.documentElement;

function toggleTheme() {
    if (html.getAttribute("data-theme") === "light") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML =
                '<i class="fas fa-sun"></i> Toggle Theme';
        }
    } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML =
                '<i class="fas fa-moon"></i> Toggle Theme';
        }
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
if (savedTheme === "dark") {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (themeToggleMobile) {
        themeToggleMobile.innerHTML =
            '<i class="fas fa-sun"></i> Toggle Theme';
    }
}

themeToggle.addEventListener("click", toggleTheme);
if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
}

// Testimonial carousel
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all dots and cards
        testimonialDots.forEach((d) => d.classList.remove("active"));
        testimonialCards.forEach((c) => c.classList.remove("active"));

        // Add active class to clicked dot
        dot.classList.add("active");

        // Find corresponding card and make it active
        const targetId = dot.getAttribute("href").substring(1);
        const targetCard = document
            .getElementById(targetId)
            .querySelector(".testimonial-card");
        targetCard.classList.add("active");
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });

            // Close mobile menu if open
            if (mobileMenu.classList.contains("open")) {
                mobileMenu.classList.remove("open");
            }
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll(".animate-fade-in");

    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Run once on page load
animateOnScroll();

// Run on scroll
window.addEventListener("scroll", animateOnScroll);