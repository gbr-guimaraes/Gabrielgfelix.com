import { inicializarMenu } from '../components/menu/menu.js'; // Importa a função de inicialização

document.addEventListener('DOMContentLoaded', () => {
    inicializarMenu(); // Executa a função para carregar e configurar o menu

    // Outro código JavaScript do seu site...
});

fetch('sobre.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('content-container').innerHTML = html;

          // Carregar o CSS do menu dinamicamente
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '/src/css/sobre.css';
          document.head.appendChild(link);
      });