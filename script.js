const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBox = document.querySelector('.form-box');
const registerBox = document.getElementById('registerBox');
const notification = document.getElementById('notification');

document.getElementById('showRegister').addEventListener('click', () => {
  loginBox.classList.add('hidden');
  registerBox.classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', () => {
  registerBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
});

// Notificación
function showNotification(msg, type = 'success') {
  notification.textContent = msg;
  notification.className = `notification ${type}`;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 4000);
}

// Simulación de login (deberías reemplazar con fetch al backend)
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Reemplaza con tu lógica real
  if (email && password) {
    showNotification('Inicio de sesión exitoso', 'success');
    setTimeout(() => {
      window.location.href = '/home.html'; // redirige a página principal del bazar
    }, 1500);
  } else {
    showNotification('Credenciales inválidas', 'error');
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  // Reemplaza con tu lógica real
  if (name && email && password) {
    showNotification('Cuenta creada exitosamente', 'success');
    setTimeout(() => {
      document.getElementById('showLogin').click();
    }, 1500);
  } else {
    showNotification('Por favor completa todos los campos', 'error');
  }
});

// Google Login/Register - redirecciona a backend OAuth
document.getElementById('googleSignIn').addEventListener('click', () => {
  window.location.href = 'http://localhost:3001/auth/google'; // Ajusta tu ruta real
});

document.getElementById('googleRegister').addEventListener('click', () => {
  window.location.href = 'http://localhost:3001/auth/google'; // Puede ser el mismo endpoint
});
