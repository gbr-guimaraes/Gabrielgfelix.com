import { carregarConteudoSobre } from '../../js/sobre.js';
import { carregarConteudoContato } from '../../js/contato.js';
import { carregarProjetos } from '../../js/projetos.js';
import { defaultLang, fetchData, langSelection } from '../../js/api.js'

function carregarMenu(){
fetchData(langSelection())
    .then((data) => {
        const menu = data.find((item) => item.id === "menu");
        document.getElementById('botao-sobre').innerHTML = `<li>${menu.sobre}</li>`;
        document.getElementById('botao-projetos').innerHTML = `<li>${menu.projetos}</li>`;
        document.getElementById('botao-contato').innerHTML = `<li>${menu.contato}</li>`;

        const idiomas = data.find((item) => item.id === "menu-idiomas");
        document.getElementById('lista-idiomas').innerHTML= "";

        Object.entries(idiomas).forEach(([key, value]) => {
            if (key !== 'id') {
                const icon = document.createElement('a');

                icon.href = "#";
                icon.dataset.lang = key; // Use a chave (idioma) como valor do data-lang
                icon.src = value.src; // Acessa o atributo 'src' do objeto 'value'
                icon.alt = value.alt; // Acessa o atributo 'alt' do objeto 'value'
                icon.classList.add('langSelection')

                // Cria um elemento <img> para o ícone da bandeira
                const img = document.createElement('img');
                img.src = icon.src; // Define o 'src' da imagem com o 'src' do link
                img.alt = icon.alt; // Define o 'alt' da imagem com o 'alt' do link

                // Adiciona a imagem ao link
                icon.appendChild(img);

                icon.addEventListener('click', function(){
                    document.getElementById('base').lang = icon.dataset.lang;
                    carregarPagina(window.location.hash.substring(1));
                    carregarMenu();
                })

                document.getElementById('lista-idiomas').appendChild(icon);
            }

        });

    });
}

export function carregarPagina(pagina) {
    fetch(`/public/${pagina}.html`)
        .then(response => response.text())
        .then(html => {
            window.location.hash = pagina;
            document.getElementById('content-container').innerHTML = html;

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `/src/css/${pagina}.css`;
            document.head.appendChild(link);

            if (pagina === 'sobre'){
                carregarConteudoSobre();
            }
            else if (pagina === 'projetos') {
                carregarProjetos();
            }
            else if (pagina === 'contato'){
                carregarConteudoContato();
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

    document.getElementById('base').lang = defaultLang();

    carregarMenu();

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