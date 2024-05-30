import { fetchData } from './api.js';

export function carregarConteudoContato() {
    fetchData()
        .then((data) => {
            const contato = data.find((item) => item.id === "contato");
            const listacontatos = document.getElementById(`lista-contatos`)
            document.getElementById('titulocontato').innerHTML = contato.titulo;

            Object.entries(contato.listacontatos).forEach(([key, value]) => {
                console.log(key, value);
                if (key !== 'id' && key !== 'titulo') {
                    const listItem = document.createElement('div');
                    listItem.classList.add("contato");
                    listItem.innerHTML = `
                    <a href="${value.link}" target="_blank"
                        rel="noopener noreferrer"><img src="${value.icon}" alt="${value.nome}">
                        <p>${value.user}</p>
                    </a>
                `;
                    listacontatos.appendChild(listItem);
                }
            })
        }
        )
    }