/**
 * Gestion des boutons "Devoir" pour le Tronc Commun Scientifique
 * Ce script est utilisé pour gérer les affichages/masquages des sections de devoirs
 */

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les boutons "Devoir"
  const devoirButtons = document.querySelectorAll('.btn-devoir');
  
  // Ajouter des écouteurs d'événements à chaque bouton
  devoirButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obtenir l'ID de la section de devoir à afficher/masquer
      const targetId = this.getAttribute('data-target');
      if (!targetId) return;
      
      // Trouver la section cible
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;
      
      // Basculer la visibilité de la section
      if (targetSection.hidden) {
        // Animation pour afficher la section
        targetSection.hidden = false;
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(-10px)';
        
        // Animer l'apparition
        setTimeout(() => {
          targetSection.style.opacity = '1';
          targetSection.style.transform = 'translateY(0)';
          targetSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, 10);
      } else {
        // Animation pour masquer la section
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(-10px)';
        
        // Masquer après la fin de l'animation
        setTimeout(() => {
          targetSection.hidden = true;
          targetSection.style.transition = 'none';
        }, 300);
      }
    });
  });
  
  // Gestion des sections de devoirs par les liens dans l'URL
  function checkUrlForDevoirs() {
    const url = new URL(window.location.href);
    const devoir = url.searchParams.get('devoir');
    const semestre = url.searchParams.get('semestre');
    
    if (devoir && semestre) {
      const targetId = `exemples-s${semestre}-d${devoir}`;
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Activer le semestre correspondant
        const semestreId = `semestre-${semestre}`;
        const semestreButtons = document.querySelectorAll('.semestre-btn');
        const semestreSections = document.querySelectorAll('.semestre-section');
        
        semestreSections.forEach(section => section.classList.remove('active'));
        semestreButtons.forEach(button => button.classList.remove('active'));
        
        const targetSemestreSection = document.getElementById(semestreId);
        const targetSemestreButton = document.querySelector(`[data-target="${semestreId}"]`);
        
        if (targetSemestreSection && targetSemestreButton) {
          targetSemestreSection.classList.add('active');
          targetSemestreButton.classList.add('active');
        }
        
        // Afficher la section de devoir
        targetSection.hidden = false;
        
        // Faire défiler jusqu'à la section de devoir
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
  }
  
  // Vérifier l'URL au chargement de la page
  checkUrlForDevoirs();
});