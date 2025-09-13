/**
 * Utilitaires pour la navigation et l'affichage du site
 */

// Fonction pour vérifier si un élément est visible dans la fenêtre
export function isElementInViewport(el) {
  if (!el || typeof window === 'undefined') return false;
  
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour adapter le footer
export function adjustFooter() {
  if (typeof window === 'undefined') return;
  
  const footer = document.querySelector('footer.auto-footer');
  const footerSpacer = document.querySelector('.footer-spacer');
  
  if (!footer || !footerSpacer) return;
  
  const contentHeight = document.body.offsetHeight - footer.offsetHeight;
  const windowHeight = window.innerHeight;
  
  if (contentHeight < windowHeight) {
    footerSpacer.style.height = (windowHeight - contentHeight) + 'px';
  }
}

// Fonction pour animer les cartes de chapitre
export function animateCardsOnScroll() {
  if (typeof window === 'undefined') return;
  
  const chapterCards = document.querySelectorAll('.chapter-card');
  
  chapterCards.forEach(card => {
    if (isElementInViewport(card)) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

// Fonction pour initialiser les animations des cartes
export function initializeCardAnimations() {
  if (typeof window === 'undefined') return;
  
  const chapterCards = document.querySelectorAll('.chapter-card');
  const isMobile = window.innerWidth <= 768;
  
  // Optimisation des animations pour les appareils mobiles
  if (isMobile) {
    chapterCards.forEach(card => {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  }
  
  // Initialiser les styles des cartes
  chapterCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Lancer l'animation initiale
  setTimeout(animateCardsOnScroll, 300);
  
  // Ajouter l'écouteur d'événement de défilement pour l'animation
  window.addEventListener('scroll', animateCardsOnScroll);
  
  // Retourner une fonction de nettoyage
  return () => {
    window.removeEventListener('scroll', animateCardsOnScroll);
  };
}

// Fonction pour générer les liens PDF pour un chapitre
export function generateChapterLinks(path, chapter) {
  return [
    { text: "Cours", url: `/${path}/Chapitre${chapter}/cours.pdf`, external: true },
    { text: "Expériences", url: `/${path}/Chapitre${chapter}/experience.pdf`, external: true },
    { text: "Conseils", url: `/${path}/Chapitre${chapter}/conseils.pdf`, external: true },
    { text: "Série 1", url: `/${path}/Chapitre${chapter}/serie1.pdf`, external: true },
    { text: "Série 2", url: `/${path}/Chapitre${chapter}/serie2.pdf`, external: true },
    { text: "Série 3", url: `/${path}/Chapitre${chapter}/serie3.pdf`, external: true },
    { text: "Série 4", url: `/${path}/Chapitre${chapter}/serie4.pdf`, external: true },
    { text: "Série 5", url: `/${path}/Chapitre${chapter}/serie5.pdf`, external: true },
    { text: "Série 6", url: `/${path}/Chapitre${chapter}/serie6.pdf`, external: true }
  ];
}