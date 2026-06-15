// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const certModal = document.getElementById('cert-modal');
const certOpenButton = document.querySelector('[data-cert-open]');
const certCloseButtons = document.querySelectorAll('[data-cert-close]');

function openCertModal() {
  if (!certModal) return;
  certModal.classList.add('is-open');
  certModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  if (!certModal) return;
  certModal.classList.remove('is-open');
  certModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  certOpenButton?.focus();
}

certOpenButton?.addEventListener('click', openCertModal);

certCloseButtons.forEach(button => {
  button.addEventListener('click', closeCertModal);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && certModal?.classList.contains('is-open')) {
    closeCertModal();
  }
});

const backToTopButton = document.querySelector('.back-to-top');

function updateBackToTopButton() {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle('is-visible', window.scrollY > 360);
}

backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateBackToTopButton, { passive: true });
updateBackToTopButton();
