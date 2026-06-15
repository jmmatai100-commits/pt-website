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

const lightbox = document.getElementById('image-lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCloseButtons = document.querySelectorAll('[data-lightbox-close]');
const lightboxDesktopQuery = window.matchMedia('(min-width: 769px)');
let activeLightboxTrigger = null;

function openLightbox(trigger) {
  if (!lightbox || !lightboxImage || !lightboxDesktopQuery.matches) return;
  activeLightboxTrigger = trigger;
  lightboxImage.src = trigger.dataset.lightboxSrc || '';
  lightboxImage.alt = trigger.dataset.lightboxAlt || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  document.body.style.overflow = '';
  activeLightboxTrigger?.focus();
}

document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
  trigger.addEventListener('click', () => openLightbox(trigger));
});

lightboxDesktopQuery.addEventListener('change', event => {
  if (!event.matches && lightbox?.classList.contains('is-open')) {
    closeLightbox();
  }
});

lightboxCloseButtons.forEach(button => {
  button.addEventListener('click', closeLightbox);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) {
    closeLightbox();
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
