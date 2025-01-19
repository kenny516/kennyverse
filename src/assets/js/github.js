// Remplacez cette ligne par votre nom d'utilisateur GitHub
const GITHUB_USERNAME = 'kenny516';

async function fetchGithubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();

        const projectsContainer = document.querySelector('#projects-container');
        if (repos.length === 0) {
            projectsContainer.innerHTML = `
                <div class="terminal-style">
                    <p>Aucun repository trouvé pour l'utilisateur ${GITHUB_USERNAME}</p>
                </div>`;
            return;
        }

        repos.forEach(repo => {
            if (!repo.fork && !repo.private) {
                const projectCard = createProjectCard(repo);
                projectsContainer.appendChild(projectCard);
            }
        });
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
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <h3 class="typing-effect">${repo.name}</h3>
        <p>${repo.description || 'Aucune description disponible'}</p>
        <div class="project-stats">
            <span>⭐ ${repo.stargazers_count}</span>
            <span>🔄 ${repo.forks_count}</span>
            <span class="project-lang">${repo.language || 'N/A'}</span>
        </div>
        <div class="terminal-style">
            git clone ${repo.clone_url}
        </div>
        <a href="${repo.html_url}" target="_blank" class="btn">Voir le projet</a>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', fetchGithubRepos);
