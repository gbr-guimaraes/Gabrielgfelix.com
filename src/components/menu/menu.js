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
          document.getElementById('botao-idiomas').addEventListener('click', function() {
              var dropdown = this.querySelector('.lista-idiomas');
              dropdown.style.display = dropdown.style.display === 'none' ? 'grid' : 'none';
          });
      });
}