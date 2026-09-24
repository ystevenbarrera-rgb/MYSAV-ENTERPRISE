// Si usas el CDN global de Lucide en el HTML, solo llama a esto:
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

import './components/Navbar.js';
import './style.css';

console.log('MYSAV Enterprise - Home cargado correctamente.');