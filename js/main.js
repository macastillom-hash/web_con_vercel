// Menú adaptable para dispositivos móviles.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const opened = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.textContent = opened ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
// Filtrar tarjetas sin recargar la página.
const filters = document.querySelectorAll('.filter');
const courses = document.querySelectorAll('.course-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  courses.forEach(course => { course.hidden = category !== 'todos' && course.dataset.category !== category; });
}));
// Formulario estático: abre el programa de correo del visitante.
// IMPORTANTE: reemplazar el correo por el de la academia antes de publicar.
const contactEmail = 'contacto@ejemplo.com';
const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const course = document.getElementById('curso').value;
  const message = document.getElementById('mensaje').value.trim();
  const subject = encodeURIComponent(`Consulta sobre curso: ${course}`);
  const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nCurso: ${course}\n\nMensaje:\n${message}`);
  document.getElementById('form-status').textContent = 'Se abrirá tu aplicación de correo. Revisa y envía el mensaje desde allí.';
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
document.getElementById('year').textContent = new Date().getFullYear();
