// Création de l'effet particules
const createParticles = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    document.body.prepend(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
};

// Animation des éléments au scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });

    document.querySelectorAll('section, article, .project-card').forEach(el => {
        observer.observe(el);
        el.classList.add('animate-in');
    });
};

// Ajouter la fonction pour marquer le lien actif
const setActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    observeElements();
    setActiveNavLink();
});