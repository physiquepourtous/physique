import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import Head from 'next/head';
import Script from 'next/script';
import Breadcrumb from '../../../components/common/Breadcrumb';
import { PhysiqueS1Chapters, ChimieS1Chapters, PhysiqueS2Chapters, ChimieS2Chapters } from '@/data/1Bac-SciencesExp-chaptersData';

// Composant pour une carte de chapitre
const ChapterCard = ({ chapter, subject, filiere = "SciencesExp" }) => {
  const resources = [
    { name: "Cours", file: "cours.pdf" },
    { name: "Expériences", file: "experience.pdf" },
    { name: "Conseils", file: "conseils.pdf" },
    { name: "Série 1", file: "serie1.pdf" },
    { name: "Série 2", file: "serie2.pdf" },
    { name: "Série 3", file: "serie3.pdf" },
    { name: "Série 4", file: "serie4.pdf" },
    { name: "Série 5", file: "serie5.pdf" },
    { name: "Série 6", file: "serie6.pdf" }
  ];

  return (
    <div className="chapter-card">
      <h3>
        Chapitre {chapter.id} : {chapter.title}
      </h3>
      <div className="resources">
        {resources.map((resource, index) => (
          <div className="resource-item" key={index}>
            <a href={`/1Bac/${filiere}/${subject}/Chapitre${chapter.id}/${resource.file}`} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant pour les devoirs
const DevoirSection = ({ semestre, index, filiere = "SciencesExp" }) => {
  const targetId = `exemples-s${semestre}-d${index}`;
  
  return (
    <>
      <p>
        <a 
          className="btn-devoir" 
          href="#" 
          data-target={targetId}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(targetId);
            if (el) {
              el.hidden = !el.hidden;
            }
          }}
        >
          Devoir {index}
        </a>
      </p>
      <div hidden id={targetId}>
        <div className="resources">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="resource-item" key={num}>
              <a href={`/1Bac/${filiere}/Semestre${semestre}/Devoir${index}/exemple${num}.pdf`} target="_blank" rel="noopener noreferrer">
                Exemple {num}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function SciencesExperimentales() {
  // Utiliser useState pour gérer l'état de la page
  const [activeSemestre, setActiveSemestre] = useState('semestre-1');
  const [isLoading, setIsLoading] = useState(false); // Commencer avec isLoading = false

  // Cette fonction sera appelée après que les composants sont montés
  useEffect(() => {
    // Fonction pour activer un semestre
    const activate = (id) => {
      // Vérifier si l'élément existe avant de continuer
      const targetSection = document.getElementById(id);
      const targetButton = document.querySelector(`[data-target="${id}"]`);
      
      if (targetSection && targetButton) {
        // Désactiver tous les boutons et sections
        const sections = document.querySelectorAll('.semestre-section');
        const buttons = document.querySelectorAll('.semestre-btn');
        
        sections.forEach(s => s.classList.remove('active'));
        buttons.forEach(b => b.classList.remove('active'));
        
        // Activer le bouton et la section correspondante
        targetSection.classList.add('active');
        targetButton.classList.add('active');
        
        // Animer le défilement
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Mettre à jour l'état
        setActiveSemestre(id);
        
        // Enregistrer le choix de l'utilisateur
        localStorage.setItem('activeSemestre', id);
      }
    };
    
    // Ajouter des écouteurs d'événements pour les boutons de semestre
    const buttons = document.querySelectorAll('.semestre-btn');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        activate(this.dataset.target);
      });
    });
    
    // Charger le semestre préféré de l'utilisateur
    const savedSemestre = localStorage.getItem('activeSemestre');
    if (savedSemestre && document.getElementById(savedSemestre)) {
      activate(savedSemestre);
    } else {
      // Par défaut, activer le semestre 1
      activate('semestre-1');
    }
    
    // Fonction pour animer les cartes
    const animateCards = () => {
      const chapterCards = document.querySelectorAll('.chapter-card');
      
      // Fonction pour vérifier si un élément est visible
      const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      
      // Fonction pour animer les cartes visibles
      const animateVisibleCards = () => {
        chapterCards.forEach(card => {
          if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      };
      
      // Initialiser les cartes
      chapterCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Animer les cartes visibles
      setTimeout(animateVisibleCards, 100);
      
      // Ajouter un écouteur pour le défilement
      window.addEventListener('scroll', animateVisibleCards);
      
      // Retourner une fonction de nettoyage
      return () => {
        window.removeEventListener('scroll', animateVisibleCards);
      };
    };
    
    // Animer les cartes
    const cleanupAnimation = animateCards();
    
    // Nettoyage lors du démontage du composant
    return () => {
      // Supprimer les écouteurs d'événements pour les boutons
      buttons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      
      // Nettoyer l'animation
      cleanupAnimation();
    };
  }, []); // Dépendances vides pour exécuter l'effet une seule fois

  return (
    <MainLayout title="1ère Bac Sciences Expérimentales - Ressources Éducatives">
      <Head>
        <meta name="description" content="Ressources éducatives pour la 1ère Bac Sciences Expérimentales en Physique et Chimie. Cours, exercices corrigés, devoirs et conseils." />
        <meta name="keywords" content="1ère bac, sciences expérimentales, physique, chimie, maroc, lycée, cours, exercices" />
        <meta property="og:title" content="1ère Bac Sciences Expérimentales - Ressources Éducatives" />
        <meta property="og:description" content="Programme complet de Physique et Chimie pour la 1ère Bac Sciences Expérimentales avec cours, exercices, conseils et expériences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/1Bac/SciencesExp" />
        <link rel="canonical" href="https://physiquetous.com/1Bac/SciencesExp" />
        <link href="/css/harvard-style.css" rel="stylesheet" />
        <link href="/css/footer-social.css" rel="stylesheet" />
        <link href="/css/tcs-styles.css" rel="stylesheet" />
        <link href="/css/breadcrumb.css" rel="stylesheet" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: '1ère Bac', href: '/1Bac' },
            { label: 'Sciences Expérimentales' }
          ]}
        />
        
        <section className="intro">
          <h2>Ressources pour la 1ère Bac Sciences Expérimentales</h2>
          <p>Vous trouverez ici tous les chapitres du programme officiel de Physique et Chimie pour la 1ère Année Baccalauréat Sciences Expérimentales.</p>
        </section>
        
        <div className="semestre-switcher">
          <button className="semestre-btn" data-target="semestre-1" type="button">Semestre 1</button>
          <button className="semestre-btn" data-target="semestre-2" type="button">Semestre 2</button>
        </div>
        
        {/* Semestre 1 */}
        <section className="semestre-section" id="semestre-1">
          <h2>Physique</h2>
          <div className="chapters">
            {PhysiqueS1Chapters.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} subject="Physique" />
            ))}
          </div>
          
          <h2>Chimie</h2>
          <div className="chapters">
            {ChimieS1Chapters.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} subject="Chimie" />
            ))}
          </div>
          
          <div>
            <DevoirSection semestre={1} index={1} />
            <DevoirSection semestre={1} index={2} />
            <DevoirSection semestre={1} index={3} />
          </div>
        </section>
        
        {/* Semestre 2 */}
        <section className="semestre-section" id="semestre-2">
          <h2>Physique</h2>
          <div className="chapters">
            {PhysiqueS2Chapters.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} subject="Physique" />
            ))}
          </div>
          
          <h2>Chimie</h2>
          <div className="chapters">
            {ChimieS2Chapters.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} subject="Chimie" />
            ))}
          </div>
          
          <div>
            <DevoirSection semestre={2} index={1} />
            <DevoirSection semestre={2} index={2} />
            <DevoirSection semestre={2} index={3} />
          </div>
        </section>
        
        <section>
          <div></div>
        </section>
        
        <section>
        </section>
      </main>
      
      <Script id="semestre-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Gestion des semestres
            const buttons = document.querySelectorAll('.semestre-btn');
            const sections = document.querySelectorAll('.semestre-section');
            
            function activate(id) {
              // Désactiver tous les boutons et sections
              sections.forEach(s => s.classList.remove('active'));
              buttons.forEach(b => b.classList.remove('active'));
              
              // Activer le bouton et la section correspondante
              const targetSection = document.getElementById(id);
              const targetButton = document.querySelector(\`[data-target="\${id}"]\`);
              
              if (targetSection && targetButton) {
                targetSection.classList.add('active');
                targetButton.classList.add('active');
                
                // Animation de défilement pour une meilleure expérience utilisateur
                window.scrollTo({
                  top: targetSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }
            
            // Ajouter des écouteurs d'événements pour les boutons
            buttons.forEach(button => {
              button.addEventListener('click', function() {
                activate(this.dataset.target);
                // Sauvegarder la préférence de l'utilisateur dans le stockage local
                localStorage.setItem('activeSemestre', this.dataset.target);
              });
            });
            
            // Activer le semestre préféré de l'utilisateur ou semestre 1 par défaut
            const savedSemestre = localStorage.getItem('activeSemestre');
            if (savedSemestre && document.getElementById(savedSemestre)) {
              activate(savedSemestre);
            } else {
              // Par défaut, activer le semestre 1
              activate('semestre-1');
            }
          });
        `,
      }}
      />
      <Script src="/js/update-devoir-links.js" strategy="afterInteractive" />
    </MainLayout>
  );
}