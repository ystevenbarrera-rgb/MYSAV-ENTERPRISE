import '../styles/footer.css';

// src/components/Footer.js
class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <p>&copy; 2026 MYSAV Enterprise. Todos los derechos reservados.</p>
          <div class="footer-links">
            <a href="/contacto.html">Soporte</a>
            <a href="/servicios.html">Servicios</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);