export function classificarSkills() {
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