// Smooth scroll to contact and basic CTA behavior
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('bookBtn');
  if (!btn) return;
  btn.addEventListener('click', function (e) {
    var target = document.querySelector(btn.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
