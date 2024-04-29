window.onload = function() {
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                section.style.transform = 'translateY(0)';
                section.style.opacity = '1';
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(30, 136, 229, 0.5)';
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});
