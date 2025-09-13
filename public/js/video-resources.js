/* Fonctions pour la gestion des ressources vidéo */

// Détection et gestion des ressources vidéo
function setupVideoResources() {
  // Trouver tous les liens qui pointent vers des fichiers MP4
  const videoLinks = document.querySelectorAll('a[href$=".mp4"]');
  
  videoLinks.forEach(link => {
    // Création d'une classe spéciale pour les vidéos
    link.parentElement.classList.add('resource-item-video');
    
    // Ajouter un attribut data pour l'URL de la vidéo
    link.setAttribute('data-video-src', link.getAttribute('href'));
    
    // Ajouter un événement click pour ouvrir la vidéo en modal
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openVideoModal(this.getAttribute('data-video-src'), this.textContent);
    });
    
    // Ajouter une icône pour indiquer que c'est une vidéo
    const icon = document.createElement('i');
    icon.className = 'fas fa-play-circle video-icon';
    link.prepend(icon);
    link.style.display = 'flex';
    link.style.alignItems = 'center';
    link.style.gap = '5px';
  });
}

// Créer et ouvrir une fenêtre modale pour la vidéo
function openVideoModal(videoSrc, videoTitle) {
  // Créer la modale
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  
  // Contenu de la modale
  modal.innerHTML = `
    <div class="video-modal-content">
      <div class="video-modal-header">
        <h3>${videoTitle || 'Vidéo'}</h3>
        <span class="video-modal-close">&times;</span>
      </div>
      <div class="video-modal-body">
        <video controls width="100%">
          <source src="${videoSrc}" type="video/mp4">
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  `;
  
  // Ajouter la modale au document
  document.body.appendChild(modal);
  
  // Afficher la modale
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
  
  // Fermeture de la modale
  const closeBtn = modal.querySelector('.video-modal-close');
  closeBtn.addEventListener('click', () => {
    closeVideoModal(modal);
  });
  
  // Fermer si on clique en dehors de la modale
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeVideoModal(modal);
    }
  });
}

// Fermer la modale vidéo
function closeVideoModal(modal) {
  modal.style.opacity = '0';
  setTimeout(() => {
    document.body.removeChild(modal);
  }, 300);
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  setupVideoResources();
  
  // Activer le premier semestre par défaut
  const buttons = document.querySelectorAll('.semestre-btn');
  if (buttons.length > 0) {
    const firstSemestre = buttons[0].dataset.target;
    document.querySelectorAll('.semestre-section').forEach(s => 
      s.classList.toggle('active', s.id === firstSemestre)
    );
    buttons[0].classList.add('active');
  }
  
  // Rendre visible le bouton back-to-top au scroll
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
  }
});
