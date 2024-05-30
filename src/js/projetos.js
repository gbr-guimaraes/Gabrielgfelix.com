import { fetchData } from './api.js'

export function carregarProjetos() {
    fetchData()
        .then((data) => {
            const projetos = data.find((item) => item.id === "projetos");
            document.getElementById('tituloprojetos').innerHTML = projetos.titulo;
            const linguagem = projetos.linguagem;

            const username = 'gbr-guimaraes';
            const listaProjetos = document.getElementById('lista-projetos');

            fetch(`https://api.github.com/users/${username}/repos`)
                .then(response => response.json())
                .then(data => {

                    data.forEach(repo => {
                        const listItem = document.createElement('div');
                        listItem.classList.add('projeto');
                        listItem.innerHTML = `
                <h3><a href="${repo.html_url} " target="_blank" rel="noopener noreferrer">${repo.name.replaceAll('-', ' ')}</a></h3>
                <p>${repo.description}</p>
                <p>${linguagem}: ${repo.language}</p>
            `;
                        listaProjetos.appendChild(listItem);
                    });
                })
                .catch(error => {
                    console.error("Erro ao buscar repositórios:", error);
                    listaProjetos.innerHTML = "<p>Erro ao carregar os projetos.</p>";
                });
        });
}