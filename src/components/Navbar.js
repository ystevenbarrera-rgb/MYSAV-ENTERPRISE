// 1. Importamos la imagen directamente para que Vite procese la ruta correctamente
import logoImg from '../assets/logoblanco.png';
import '../styles/navbar.css';

class NavbarComponent extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;

    this.innerHTML = `
      <header class="navbar">
        <div class="nav-container">
          <a href="/index.html" class="brand-logo">
            <img src="${logoImg}" alt="MYSAV Enterprise Logo" class="nav-logo-img" />
          </a>

          <!-- Botón Hamburguesa (Faltaba agregar esto) -->
          <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menú">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          
          <nav class="nav-links">
            <a href="/index.html" class="${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Inicio</a>
            <a href="/servicios.html" class="${currentPath.includes('servicios') ? 'active' : ''}">Servicios</a>
            <a href="/nosotros.html" class="${currentPath.includes('nosotros') ? 'active' : ''}">Nosotros</a>
            <a href="/contacto.html" class="btn-nav ${currentPath.includes('contacto') ? 'active' : ''}">Contacto</a>
          </nav>
        </div>
      </header>
    `;
    // 2. Lógica del menú hamburguesa encapsulada en el Web Component
    const mobileMenuButton = this.querySelector('#mobile-menu');
    const navLinks = this.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
      mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      // Cerrar el menú automáticamente al hacer clic en cualquier opción
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }
  }
}

if (window.lucide) {
      window.lucide.createIcons();
    }
  


customElements.define('navbar-component', NavbarComponent);