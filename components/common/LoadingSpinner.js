import React from 'react';

/**
 * Composant d'indicateur de chargement
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.message - Message à afficher pendant le chargement (optionnel)
 */
const LoadingSpinner = ({ message = 'Chargement en cours...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;