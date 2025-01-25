const GITHUB_USERNAME = 'kenny516';

async function fetchGithubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();

        const projectsContainer = document.querySelector('#projects-container');
        projectsContainer.className = 'projects-grid';

        if (repos.length === 0) {
            projectsContainer.innerHTML = `
                <div class="terminal-style">
                    <p>Aucun repository trouvé pour l'utilisateur ${GITHUB_USERNAME}</p>
                </div>`;
            return;
        }

        projectsContainer.innerHTML = repos
            .filter(repo => !repo.fork && !repo.private)
            .map(repo => createProjectCard(repo))
            .join('');

        // Ajouter les gestionnaires d'événements pour les boutons de copie
        setupCopyButtons();

    } catch (error) {
        console.error('Erreur lors de la récupération des repos:', error);
        const projectsContainer = document.querySelector('#projects-container');
        projectsContainer.innerHTML = `
            <div class="terminal-style error">
                <p>Erreur: Impossible de charger les repositories</p>
                <p>Vérifiez que le nom d'utilisateur GitHub est correct</p>
            </div>`;
    }
}

function createProjectCard(repo) {
    return `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${repo.name}</h3>
            </div>
            
            <p class="project-description">
                ${repo.description || 'Aucune description disponible'}
            </p>
            
            <div class="project-meta">
                <div class="project-stat">
                    <i class="fas fa-star"></i>
                    <span>${repo.stargazers_count}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${repo.forks_count}</span>
                </div>
                ${repo.language ? `
                    <div class="project-language">
                        <i class="fas fa-code"></i>
                        ${repo.language}
                    </div>
                ` : ''}
            </div>
            
            <div class="git-clone-container">
                <div class="git-clone-command" data-clone-url="${repo.clone_url}">
                    $ git clone ${repo.clone_url}
                </div>
                <button class="copy-button" aria-label="Copier la commande clone">
                    <i class="far fa-copy"></i>
                    <span class="tooltip">Copier</span>
                </button>
            </div>
            
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i>
                    <span>Voir sur GitHub</span>
                </a>
                ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Demo Live</span>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

function setupCopyButtons() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async () => {
            const cloneCommand = button.previousElementSibling.textContent;
            try {
                await navigator.clipboard.writeText(cloneCommand);
                const tooltip = button.querySelector('.tooltip');
                tooltip.textContent = 'Copié !';
                setTimeout(() => {
                    tooltip.textContent = 'Copier';
                }, 2000);
            } catch (err) {
                console.error('Erreur lors de la copie :', err);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', fetchGithubRepos);
