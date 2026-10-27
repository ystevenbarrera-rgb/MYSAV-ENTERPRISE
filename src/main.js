import './components/Navbar.js';
import './styles/style.css';
import './components/Footer.js';

document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de iconos Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  const contactForm = document.getElementById('contact-form');
  const serviceTypeSelect = document.getElementById('serviceType');
  const techSupportFields = document.getElementById('tech-support-fields');

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const deviceInput = document.getElementById('device');
  const brandInput = document.getElementById('brand');
  const quantityInput = document.getElementById('quantity');
  const yearInput = document.getElementById('year');

  const statusMessage = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  // Elementos internos del botón para la animación de carga
  const btnText = submitBtn?.querySelector('.btn-text');
  const spinner = submitBtn?.querySelector('.spinner');

  // ==========================================
  // RESTRICCIONES Y VALIDACIONES EN TIEMPO REAL
  // ==========================================

  // Permitir solo letras, tildes, ñ y espacios en Nombre completo
  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });
  }

  // Permitir solo números y el signo '+' en Teléfono de contacto
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9+]/g, '');
    });
  }

  // ==========================================
  // MOSTRAR U OCULTAR CAMPOS CONDICIONALES
  // ==========================================
  if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener('change', (e) => {
      if (e.target.value === 'Soporte Técnico') {
        techSupportFields.classList.remove('hidden');
        deviceInput.required = true;
        brandInput.required = true;
        quantityInput.required = true;
      } else {
        techSupportFields.classList.add('hidden');
        deviceInput.required = false;
        brandInput.required = false;
        quantityInput.required = false;
        
        // Limpiar campos
        deviceInput.value = '';
        brandInput.value = '';
        quantityInput.value = '';
        yearInput.value = '';
      }
    });
  }

  // ==========================================
  // ENVÍO DEL FORMULARIO
  // ==========================================
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Activar estado de carga en el botón
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Enviando...';
      if (spinner) spinner.classList.remove('hidden');

      statusMessage.textContent = '';
      statusMessage.className = 'status-message';

      // Construir el objeto con los datos del formulario
      const formData = {
        name: nameInput ? nameInput.value : '',
        email: document.getElementById('email').value,
        phone: phoneInput ? phoneInput.value : '',
        serviceType: serviceTypeSelect ? serviceTypeSelect.value : '',
        device: deviceInput.value || null,
        brand: brandInput.value || null,
        quantity: quantityInput.value || null,
        year: yearInput.value || null,
        message: document.getElementById('message').value,
      };

      try {
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          statusMessage.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
          statusMessage.classList.add('success');
          contactForm.reset();

          techSupportFields.classList.add('hidden');
          deviceInput.required = false;
          brandInput.required = false;
          quantityInput.required = false;
        } else {
          statusMessage.textContent = data.message || 'Error al enviar el mensaje.';
          statusMessage.classList.add('error');
        }
      } catch (error) {
        console.error('Error al conectar con el backend:', error);
        statusMessage.textContent = 'No se pudo conectar con el servidor backend.';
        statusMessage.classList.add('error');
      } finally {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Enviar Mensaje';
        if (spinner) spinner.classList.add('hidden');
      }
    });
  }
});