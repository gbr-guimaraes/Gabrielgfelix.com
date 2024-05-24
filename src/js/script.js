import { inicializarMenu, carregarPagina } from '../components/menu/menu.js'; // Importa a função de inicialização

document.addEventListener('DOMContentLoaded', () => {
  inicializarMenu(); // Executa a função para carregar e configurar o menu
  carregarPagina('sobre');
});