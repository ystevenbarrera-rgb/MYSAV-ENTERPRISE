import './components/Navbar.js';
import './styles/style.css';
import './components/Footer.js';
import misionLogoUrl from '/src/assets/Misionmysav.png';
import visionLogoUrl from '/src/assets/visionmysav.png';
import propuestaLogoUrl from '/src/assets/propuestamysav.png';

document.addEventListener('DOMContentLoaded', () => {
  // Asignar la imagen procesada por Vite al elemento
  const imgElement = document.getElementById('mision-img');
  if (imgElement) {
    imgElement.src = misionLogoUrl;
  }

  const visionImg = document.getElementById('vision-img');
  if (visionImg) {
    visionImg.src = visionLogoUrl;
  }

  const propuestaImg = document.getElementById('propuesta-img');
  if (propuestaImg) {
    propuestaImg.src = propuestaLogoUrl;
  }
  
  // ... resto de tu código para las tarjetas y Lucide
});

// Si usas el CDN global de Lucide en el HTML, solo llama a esto:
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Lógica interactiva para expandir/colapsar las tarjetas (Misión, Visión, Valores)
  const gridContainer = document.querySelector('.mysav-grid');

  if (gridContainer) {
    gridContainer.addEventListener('click', (event) => {
      // Buscar si el click provino del botón de alternancia
      const toggleBtn = event.target.closest('.mysav-card__toggle-btn');
      if (!toggleBtn) return;

      const card = toggleBtn.closest('.mysav-card');
      const content = card?.querySelector('.mysav-card__content');
      const btnText = toggleBtn.querySelector('.mysav-card__btn-text');

      if (!card || !content) return;

      // Obtener el estado actual
      const isExpanded = card.classList.contains('mysav-card--expanded');

      // Alternar clases de expansión
      card.classList.toggle('mysav-card--expanded', !isExpanded);

      // Actualizar atributos de accesibilidad ARIA
      toggleBtn.setAttribute('aria-expanded', (!isExpanded).toString());
      content.setAttribute('aria-hidden', isExpanded.toString());

      // Cambiar texto del botón dinámicamente
      if (btnText) {
        btnText.textContent = !isExpanded ? 'Ocultar detalles' : 'Ver detalles';
      }
    });
  }
});




console.log('MYSAV Enterprise - Home cargado correctamente.');