export function carregarGithub() {
    const username = 'gbr-guimaraes';
    const listaProjetos = document.getElementById('lista-projetos');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {

            data.forEach(repo => {
                const listItem = document.createElement('div');
                listItem.classList.add('projeto');
                listItem.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description}</p>
                <p>Linguagem: ${repo.language}</p>
            `;
                listaProjetos.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar repositórios:", error);
            listaProjetos.innerHTML = "<p>Erro ao carregar os projetos.</p>";
        });
}