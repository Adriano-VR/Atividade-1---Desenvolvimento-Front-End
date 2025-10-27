document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  
  if (document.getElementById('spa-content')) {
    SPA.init();
  }
});

function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  if (!menuToggle) return;
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });
  
  menuOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
}
