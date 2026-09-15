const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('leadForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const business = document.getElementById('business').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const text = [
    'Hi Focushoots! I want to book a Focushoot.',
    '',
    `Name: ${name}`,
    business ? `Business/Brand: ${business}` : '',
    `Phone: ${phone}`,
    `Service: ${service}`,
    message ? `Brief: ${message}` : ''
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/message/VVF6LTLPGUEOH1?src=qr&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
});
