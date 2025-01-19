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

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.nav-toggle')) {
        navMenu.classList.remove('active');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fonction pour animer le terminal
const animateTerminal = () => {
    const terminalOutputs = document.querySelectorAll('.terminal-output');

    terminalOutputs.forEach(output => {
        // Sauvegarder le texte original
        const originalText = output.textContent;
        // Vider le contenu initial
        output.textContent = '';

        // Créer un span pour le texte
        const textSpan = document.createElement('span');
        textSpan.textContent = originalText;
        output.appendChild(textSpan);

        // S'assurer que le conteneur a la bonne largeur
        output.style.width = '0';

        // Réinitialiser l'animation
        output.style.animation = 'none';
        output.offsetHeight; // Forcer un reflow
        output.style.animation = null;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    observeElements();
    setActiveNavLink();
    animateTerminal();
});