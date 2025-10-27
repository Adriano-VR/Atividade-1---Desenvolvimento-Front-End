const SPA = {
  currentPage: 'home',
  
  init() {
    this.setupLinks();
    this.loadPage(window.location.hash.slice(1) || 'home');
  },
  
  setupLinks() {
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        window.location.hash = page;
        this.loadPage(page);
      });
    });
  },
  
  loadPage(page) {
    this.currentPage = page;
    
    document.querySelectorAll('[data-page]').forEach(link => {
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    const content = document.getElementById('spa-content');
    content.innerHTML = Templates.get(page);
    
    if (page === 'cadastro') {
      FormValidation.init();
    }
  }
};
