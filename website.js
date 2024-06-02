document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const slider = document.querySelector('.slider');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const rect = link.getBoundingClientRect();
            slider.style.width = `${rect.width}px`;
            slider.style.left = `${rect.left}px`;
        });

        link.addEventListener('mouseleave', () => {
            slider.style.width = `0px`;
            slider.style.left = `50%`;
        });
    });
});