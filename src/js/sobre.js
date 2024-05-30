import { fetchData } from './api.js';

export function carregarConteudoSobre() {
    fetchData()
        .then((data) => {
            const geral = data.find((item) => item.id === "geral");
            document.getElementById('foto').innerHTML = `<img src=${geral.fotoperfil} alt="foto">`;
            document.getElementById('nome').innerHTML = `<h2>${geral.nome}</h2><h1>${geral.sobrenome}</h1>`;
            document.getElementById('cargo').innerHTML = `<h3>${geral.cargo}</h3>`;
            document.getElementById('datanasc').innerHTML = `<img src="../images/birthday.svg" alt=""><p>${geral.datanascimento}</p>`;
            document.getElementById('telefone').innerHTML = `<img src="../images/telephone.svg" alt=""><p>${geral.telefone}</p>`;
            document.getElementById('email').innerHTML = `<img src="../images/email.svg" alt=""><p>${geral.email}</p>`;
            document.getElementById('endereco').innerHTML = `<img src="../images/address.svg" alt=""><p>${geral.endereco}</p>`;

            const sobre = data.find((item) => item.id === "sobremim");
            document.getElementById('titulosobre').innerHTML = `<h2>${sobre.titulo}</h2>`;
            document.getElementById('conteudo').innerHTML = `<p>${sobre.descricao}</p>`;

            const exp = data.find((item) => item.id === "formacao");
            const timeline = document.getElementById("timeline");
            document.getElementById('tituloexp').innerHTML = `<h2>${exp.titulo}</h2>`;
            Object.entries(exp).forEach(([key, value]) => {
                if (key !== 'id' && key !== 'titulo') {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                    <div class="content">
                        <h3>${value.cargo}</h3>
                        <p>${value.empresa}</p>
                        <p>${value.data}</p>
                        <p>${value.descricao}</p>
                    </div>
                `;
                    timeline.appendChild(listItem);
                }
            });

            const skills = data.find((item) => item.id === "habilidades");
            document.getElementById('tituloskills').innerHTML = `<h2>${skills.titulo}</h2>`;
            document.getElementById('titulohs').innerHTML = `<i>${skills.quadros.hardskills}</i>`;
            document.getElementById('tituloss').innerHTML = `<i>${skills.quadros.softskills}</i>`;
            document.getElementById('tituloidiomas').innerHTML = `<i>${skills.quadros.idiomas}</i>`;

            Object.entries(skills).forEach(([key, value]) => {
                if (key !== 'id' && key !== 'titulo' && key !== 'quadros') {
                    const skillist = document.getElementById(`lista${value.categoria}`)
                    const listItem = document.createElement('li');
                    listItem.classList.add("skill");
                    listItem.dataset.level = value.nivel;
                    listItem.innerHTML = `
                    <h4>${key}</h4>
                    <div class="barra">
                        <div class="segmento"></div>
                        <div class="segmento"></div>
                        <div class="segmento"></div>
                    </div>
                `;
                    skillist.appendChild(listItem);
                }
            });

            classificarSkills();
        });

}

function classificarSkills() {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const level = skill.dataset.level; // Obtém o nível da habilidade (1, 2 ou 3)
        const segmentos = skill.querySelectorAll('.segmento'); // Seleciona os segmentos

        // Preenche os segmentos de acordo com o nível
        for (let i = 0; i < level; i++) {
            segmentos[i].style.backgroundColor = '#EBA417'; // Cor do segmento preenchido
        }
    });
}