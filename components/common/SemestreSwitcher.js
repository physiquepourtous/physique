import React, { useEffect, useState } from 'react';

export default function SemestreSwitcher({ children, defaultSemestre = 'semestre-1' }) {
  const [activeSemestre, setActiveSemestre] = useState(null);

  useEffect(() => {
    // Activer le semestre préféré de l'utilisateur ou semestre par défaut
    const savedSemestre = localStorage.getItem('activeSemestre');
    if (savedSemestre && document.getElementById(savedSemestre)) {
      setActiveSemestre(savedSemestre);
    } else {
      // Par défaut, activer le semestre spécifié ou semestre-1
      setActiveSemestre(defaultSemestre);
    }
  }, [defaultSemestre]);

  useEffect(() => {
    if (!activeSemestre) return;
    
    const sections = document.querySelectorAll('.semestre-section');
    const buttons = document.querySelectorAll('.semestre-btn');
    
    // Désactiver tous les boutons et sections
    sections.forEach(s => s.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));
    
    // Activer le bouton et la section correspondante
    const targetSection = document.getElementById(activeSemestre);
    const targetButton = document.querySelector(`[data-target="${activeSemestre}"]`);
    
    if (targetSection && targetButton) {
      targetSection.classList.add('active');
      targetButton.classList.add('active');
      
      // Animation de défilement pour une meilleure expérience utilisateur
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }, [activeSemestre]);

  const handleSemestreChange = (semestre) => {
    setActiveSemestre(semestre);
    localStorage.setItem('activeSemestre', semestre);
  };

  return (
    <div className="semestre-container">
      <div className="semestre-switcher">
        {React.Children.map(children, child => {
          if (child.type !== SemestreButton) return child;
          
          return React.cloneElement(child, {
            isActive: activeSemestre === child.props.target,
            onClick: () => handleSemestreChange(child.props.target)
          });
        })}
      </div>
      {React.Children.map(children, child => {
        if (child.type !== SemestreSection) return null;
        
        return React.cloneElement(child, {
          isActive: activeSemestre === child.props.id
        });
      })}
    </div>
  );
}

export function SemestreButton({ children, target, isActive, onClick }) {
  return (
    <button 
      className={`semestre-btn ${isActive ? 'active' : ''}`} 
      data-target={target} 
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SemestreSection({ children, id, isActive }) {
  return (
    <section className={`semestre-section ${isActive ? 'active' : ''}`} id={id}>
      {children}
    </section>
  );
}