// Contact Form
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu i");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileMenu.addEventListener("click", () => {
  mobileDropdown.classList.toggle("active");

  mobileMenu.classList.toggle("fa-bars");
  mobileMenu.classList.toggle("fa-times");
});

// Close menu after clicking a link
document.querySelectorAll(".mobile-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDropdown.classList.remove("active");

    mobileMenu.classList.remove("fa-times");
    mobileMenu.classList.add("fa-bars");
  });
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe all hidden sections
document.querySelectorAll(".hidden").forEach((element) => {
  observer.observe(element);
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.background = "#fff";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "rgba(255,255,255,0.9)";
    header.style.padding = "16px 0";
  }
});