/**
 * Script d'optimisation mobile pour le site éducatif
 * Ce script gère l'optimisation des performances sur les appareils mobiles
 */

document.addEventListener('DOMContentLoaded', function() {
  // Détecter si l'utilisateur est sur un appareil mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  
  if (isMobile) {
    // Optimiser le chargement des images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Observer les images pour le lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src || lazyImage.src;
            imageObserver.unobserve(lazyImage);
          }
        });
      });
      
      lazyImages.forEach(function(lazyImage) {
        imageObserver.observe(lazyImage);
      });
    }
    
    // Réduire les animations sur mobile
    document.documentElement.classList.add('reduce-motion');
    
    // Optimiser le comportement de défilement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Scroll plus doux sur mobile
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Optimisation du menu pour les gestes tactiles
    const nav = document.querySelector('nav');
    let touchstartX = 0;
    let touchendX = 0;
    
    document.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    });
    
    function handleGesture() {
      const navMenu = document.querySelector('nav ul');
      const menuToggle = document.querySelector('.menu-toggle');
      
      // Swipe de gauche à droite - ouvrir le menu
      if (touchendX - touchstartX > 100 && touchstartX < 50) {
        navMenu.classList.add('menu-open');
        menuToggle.classList.add('active');
        document.body.classList.add('menu-active');
      }
      
      // Swipe de droite à gauche - fermer le menu
      if (touchstartX - touchendX > 100 && navMenu.classList.contains('menu-open')) {
        navMenu.classList.remove('menu-open');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-active');
      }
    }
    
    // Optimisation des performances pour les appareils à faible puissance
    if ('connection' in navigator && (navigator.connection.saveData || navigator.connection.effectiveType.includes('2g'))) {
      // Désactiver certaines animations
      document.querySelectorAll('.chapter-card').forEach(card => {
        card.style.transition = 'none';
        card.style.transform = 'none';
        card.style.opacity = '1';
      });
      
      // Simplifier les transitions
      document.documentElement.classList.add('reduce-animations');
    }
  }
  
  // Fixer le double tap sur mobile (éviter le zoom)
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    const DOUBLE_TAP_THRESHOLD = 300;
    if (now - (window.lastTouchEnd || 0) < DOUBLE_TAP_THRESHOLD) {
      event.preventDefault();
    }
    window.lastTouchEnd = now;
  }, false);
});

// Ajouter une classe au body pour indiquer que le JS est chargé
document.body.classList.add('js-loaded');

// Fonction pour ajuster les hauteurs des cards pour qu'elles soient uniformes
function equalizeCardHeights() {
  if (window.innerWidth > 768) {
    const cards = document.querySelectorAll('.chapter-card');
    let maxHeight = 0;
    
    // Réinitialiser les hauteurs
    cards.forEach(card => {
      card.style.height = 'auto';
      const height = card.offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });
    
    // Appliquer la hauteur maximale
    cards.forEach(card => {
      card.style.height = maxHeight + 'px';
    });
  } else {
    // Sur mobile, permettre des hauteurs naturelles
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.style.height = 'auto';
    });
  }
}

// Appeler la fonction au chargement et au redimensionnement
window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);
