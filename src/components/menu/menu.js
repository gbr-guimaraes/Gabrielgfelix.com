import { classificarSkills } from '../../js/sobre.js';
import { carregarGithub } from '../../js/projetos.js';

export function carregarPagina(pagina) {
    fetch(`/public/${pagina}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
            document.getElementById('head-title').innerHTML = `${pagina.charAt(0).toUpperCase() + pagina.slice(1)} - Gabriel G.F.`;

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `/src/css/${pagina}.css`;
            document.head.appendChild(link);

            if (pagina === 'sobre') {
                classificarSkills();
            } else if (pagina === 'projetos') {
                carregarGithub();
            }

            const linksMenu = document.querySelectorAll('.conteudos a');
            linksMenu.forEach(link => link.classList.remove('active'));

            // Adicionar a classe .active ao botão da página atual
            const botaoAtivo = document.querySelector(`.conteudos a[href="#${pagina}"]`);
            if (botaoAtivo) {
                botaoAtivo.classList.add('active');
            }
        });
}

export function inicializarMenu() {
    fetch('/src/components/menu/menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('menu-container').innerHTML = html;

            // Carregar o CSS do menu dinamicamente
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/src/components/menu/menu.css';
            document.head.appendChild(link);

            // Configurar o botão de idiomas
            document.getElementById('botao-idiomas').addEventListener('click', function () {
                var dropdown = this.querySelector('.lista-idiomas');
                dropdown.style.display = dropdown.style.display === 'none' ? 'grid' : 'none';
            });

            document.getElementById('botao-projetos').addEventListener('click', function () {
                carregarPagina('projetos');
            });

            document.getElementById('botao-sobre').addEventListener('click', function () {
                carregarPagina('sobre');
            });

            document.getElementById('botao-contato').addEventListener('click', function () {
                carregarPagina('contato');
            });
        });
}