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
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navList = document.querySelector('.nav-list');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navList.classList.toggle('active');
            // Déboguer
            console.log('Toggle clicked');
            console.log('mainNav active:', mainNav.classList.contains('active'));
            console.log('navList active:', navList.classList.contains('active'));
        });

        // Fermer le menu en cliquant sur un lien
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }

    // Initialisation des autres fonctionnalités
    createParticles();
    observeElements();
    setActiveNavLink();
    animateTerminal();
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



document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.send("VOTRE_SERVICE_ID", "VOTRE_TEMPLATE_ID", {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }).then(
        function () {
            alert('Message envoyé avec succès!');
            document.getElementById('contactForm').reset();
        },
        function (error) {
            alert('Erreur lors de l\'envoi: ' + error);
        }
    );
});