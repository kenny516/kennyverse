const translations = {
    fr: {
        home: "Accueil",
        welcome: "Bienvenue sur mon portfolio",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        hello: "Salut, je suis Kenny 👋",
        role: "Développeur Full Stack en formation",
        student: "Étudiant en 3ème année à ITUniversity",
        viewProjects: "Voir mes projets",
        contactMe: "Me contacter",
        technologies: "Technologies",
        latestProjects: "Derniers Projets",
        learning: "En cours d'apprentissage",
        copyright: "Tous droits réservés.",
        aboutTitle: "À Propos de Moi",
        projectsTitle: "Mes Projets",
        contactTitle: "Contactez-moi",
        skillsTitle: "Compétences Techniques",
        experienceTitle: "Mon Parcours",
        sendButton: "Envoyer",
        nameLabel: "Nom :",
        emailLabel: "Email :",
        messageLabel: "Message :",
        currentlyLearning: "En cours d'apprentissage",
        technicalSkills: "Compétences Techniques",
        interests: "Centres d'intérêt",
        learningGoals: "Objectifs d'Apprentissage",
        currentEducation: "🎓 Formation en cours",
        studentStatus: "Étudiant en 3ème année à ITUniversity",
        degree: "Licence en Développement (en cours)",
        specialization: "Spécialisation en développement Full Stack",
        jsSkill: "JavaScript (Bases)",
        reactSkill: "React.js (En apprentissage)",
        interest1: "🚀 Veille technologique",
        interest2: "💻 Open Source",
        interest3: "📚 Apprentissage continu",
        interest4: "🎮 Développement de site web dynamique",
        goal1: "🎯 Maîtriser React.js et son écosystème",
        goal2: "📚 Approfondir mes connaissances en architecture backend",
        goal3: "🔄 Développer des compétences en CI/CD",
        goal4: "🚀 Participer à des projets open source",
        footerRights: "Tous droits réservés.",
        footerFollow: "Suivez-moi sur",
        footerAbout: "À propos",
        footerContact: "Contact",
        footerSocial: "Réseaux sociaux",
        footerDescription: "Développeur Full Stack en formation, passionné par les nouvelles technologies.",
        contactFormTitle: "Restons en contact",
        contactFormDesc: "Envoyez-moi un message directement via ce formulaire. Je recevrai votre message sur mon email et pourrai vous répondre dans les plus brefs délais.",
        formName: "Votre Nom :",
        formEmail: "Votre Email :",
        formMessage: "Votre Message :",
        formMessagePlaceholder: "Écrivez votre message ici...",
        formSubmit: "Envoyer le message",
        thanksTitle: "Message envoyé avec succès!",
        thanksMessage: "Je vous répondrai dans les plus brefs délais.",
        backHome: "Retour à l'accueil",
        projectCount: "10+ Projets",
        studyYear: "3ème année",
        skills: "Compétences",
        frontEnd: "Front-End",
        backEnd: "Back-End",
        pharmaSysDesc: "Système de gestion de pharmacie avec suivi des stocks et des ventes",
        taskFlowDesc: "Application de gestion de tâches collaborative",
        viewMore: "Voir plus",
        experience: "Expérience",
        intern2023: "Stage - 2023",
        companyName: "TechMad Solutions",
        internDesc: "Développement d'une application web de gestion des ressources humaines",
        downloadCV: "CV"
    },
    en: {
        home: "Home",
        welcome: "Welcome to my portfolio",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hello: "Hi, I'm Kenny 👋",
        role: "Full Stack Developer in training",
        student: "3rd year student at ITUniversity",
        viewProjects: "View my projects",
        contactMe: "Contact me",
        technologies: "Technologies",
        latestProjects: "Latest Projects",
        learning: "Currently learning",
        copyright: "All rights reserved.",
        aboutTitle: "About Me",
        projectsTitle: "My Projects",
        contactTitle: "Contact Me",
        skillsTitle: "Technical Skills",
        experienceTitle: "My Journey",
        sendButton: "Send",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        currentlyLearning: "Currently Learning",
        technicalSkills: "Technical Skills",
        interests: "Interests",
        learningGoals: "Learning Goals",
        currentEducation: "🎓 Current Education",
        studentStatus: "3rd year student at ITUniversity",
        degree: "Bachelor's in Development (ongoing)",
        specialization: "Specialization in Full Stack Development",
        jsSkill: "JavaScript (Basics)",
        reactSkill: "React.js (Learning)",
        interest1: "🚀 Technology Watch",
        interest2: "💻 Open Source",
        interest3: "📚 Continuous Learning",
        interest4: "🎮 Dynamic Website Development",
        goal1: "🎯 Master React.js and its ecosystem",
        goal2: "📚 Deepen backend architecture knowledge",
        goal3: "🔄 Develop CI/CD skills",
        goal4: "🚀 Contribute to open source projects",
        footerRights: "All rights reserved.",
        footerFollow: "Follow me on",
        footerAbout: "About",
        footerContact: "Contact",
        footerSocial: "Social Networks",
        footerDescription: "Full Stack Developer in training, passionate about new technologies.",
        contactFormTitle: "Let's stay in touch",
        contactFormDesc: "Send me a message directly through this form. I will receive your message in my email and can reply to you as soon as possible.",
        formName: "Your Name:",
        formEmail: "Your Email:",
        formMessage: "Your Message:",
        formMessagePlaceholder: "Write your message here...",
        formSubmit: "Send message",
        thanksTitle: "Message sent successfully!",
        thanksMessage: "I will reply to you as soon as possible.",
        backHome: "Back to home",
        projectCount: "10+ Projects",
        studyYear: "3rd Year",
        skills: "Skills",
        frontEnd: "Front-End",
        backEnd: "Back-End",
        pharmaSysDesc: "Pharmacy management system with inventory and sales tracking",
        taskFlowDesc: "Collaborative task management application",
        viewMore: "View more",
        experience: "Experience",
        intern2023: "Internship - 2023",
        companyName: "TechMad Solutions",
        internDesc: "Development of a human resources management web application",
        downloadCV: "CV"
    }
};

function setLanguage(lang) {
    // Mettre à jour la langue du document
    document.documentElement.lang = lang;

    // Traduire tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Conserver les éventuels éléments HTML à l'intérieur
            if (element.innerHTML.includes('<')) {
                const originalHTML = element.innerHTML;
                const translatedText = translations[lang][key];
                element.innerHTML = originalHTML.replace(/>([^<]+)</, `>${translatedText}<`);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Sauvegarder la préférence de langue
    localStorage.setItem('preferred-language', lang);

    // Mettre à jour l'état actif des boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Déclencher un événement personnalisé pour la traduction
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Ajouter une fonction pour gérer la persistance de la langue entre les pages
function initPageLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    setLanguage(savedLang);
}

// Modifier l'écouteur d'événements existant
document.addEventListener('DOMContentLoaded', () => {
    initPageLanguage();

    // Ajouter les écouteurs d'événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
