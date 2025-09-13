/**
 * Script d'automatisation pour l'ouverture des liens PDF dans un nouvel onglet
 * Ce script vérifie tous les liens qui pointent vers des fichiers PDF
 * et ajoute l'attribut target="_blank" s'il n'est pas déjà présent
 */

document.addEventListener('DOMContentLoaded', function() {
  // Fonction principale pour mettre à jour les liens
  function updatePdfLinks() {
    // Sélectionner tous les liens qui pointent vers des fichiers PDF
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
    
    // Pour chaque lien PDF, ajouter target="_blank" s'il n'est pas déjà présent
    pdfLinks.forEach(function(link) {
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
    });
    
    console.log('Mise à jour des liens PDF terminée :', pdfLinks.length, 'liens traités');
  }

  // Vérification et mise à jour lors du chargement de la page
  updatePdfLinks();
  
  // Vérification et mise à jour après des changements dynamiques (par exemple, après le basculement entre semestres)
  document.addEventListener('click', function(e) {
    // Si l'élément cliqué est un bouton de semestre ou un bouton de devoir, mettre à jour les liens après un court délai
    if (e.target.classList.contains('semestre-btn') || e.target.classList.contains('btn-devoir')) {
      setTimeout(updatePdfLinks, 100); // Délai de 100ms pour permettre aux changements DOM de se produire
    }
  });
});
