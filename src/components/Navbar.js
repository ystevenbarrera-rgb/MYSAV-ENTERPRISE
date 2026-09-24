// 1. Importamos la imagen directamente para que Vite procese la ruta correctamente
import logoImg from '../assets/logoblanco.png';

class NavbarComponent extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;

    this.innerHTML = `
      <header class="navbar">
        <div class="nav-container">
          <a href="/index.html" class="brand-logo">
            <img src="${logoImg}" alt="MYSAV Enterprise Logo" class="nav-logo-img" />
          </a>
          <nav class="nav-links">
            <a href="/index.html" class="${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Inicio</a>
            <a href="/servicios.html" class="${currentPath.includes('servicios') ? 'active' : ''}">Servicios</a>
            <a href="/nosotros.html" class="${currentPath.includes('nosotros') ? 'active' : ''}">Nosotros</a>
            <a href="/contacto.html" class="btn-nav ${currentPath.includes('contacto') ? 'active' : ''}">Contacto</a>
          </nav>
        </div>
      </header>
    `;
  }
}

if (window.lucide) {
      window.lucide.createIcons();
    }
  


customElements.define('navbar-component', NavbarComponent);