// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        // Toggle the max-height to create smooth dropdown
        if (navMenu.style.maxHeight) {
            navMenu.style.maxHeight = null;
        } else {
            navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
        }
    });

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.1 });

    // Apply observer to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});