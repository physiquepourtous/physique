import React from 'react';

/**
 * Composant de bouton de téléchargement pour les ressources d'un chapitre
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.subject - La matière (Physique/Chimie)
 * @param {number} props.chapterId - L'ID du chapitre
 * @param {string} props.label - Le texte à afficher (optionnel)
 */
const DownloadAllButton = ({ subject, chapterId, label = "Télécharger tout" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Liste des ressources à télécharger
    const resources = [
      'cours.pdf',
      'experience.pdf',
      'conseils.pdf',
      'serie1.pdf',
      'serie2.pdf',
      'serie3.pdf',
      'serie4.pdf',
      'serie5.pdf',
      'serie6.pdf'
    ];
    
    // Créer un élément pour chaque ressource et déclencher le téléchargement
    resources.forEach((resource, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = `/TroncCommun/${subject}/Chapitre${chapterId}/${resource}`;
        link.download = `${subject}_Chapitre${chapterId}_${resource}`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // Déclencher les téléchargements avec un délai pour éviter les blocages de navigateur
    });
  };
  
  return (
    <a 
      href="#" 
      className="download-all-btn" 
      onClick={handleClick}
      title={`Télécharger toutes les ressources du chapitre ${chapterId}`}
    >
      <i className="fas fa-download"></i> {label}
    </a>
  );
};

export default DownloadAllButton;