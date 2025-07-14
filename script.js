  // Toggle Mobile Navigation Menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

// Scroll Animation for Fade-in Sections
const sectionsToAnimate = document.querySelectorAll(
  '.about-asset, .platform-benefits, .steps, .benefits, .get-started, .blog, .cta'
);



window.addEventListener('scroll', () => {
  sectionsToAnimate.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initial state for animation
sectionsToAnimate.forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.6s ease';
});

