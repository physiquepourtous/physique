import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function DeuxiemeBac() {
  useEffect(() => {
    // Vérification de sécurité pour le navigateur (éviter les erreurs SSR)
    if (typeof window === 'undefined') return;

    // Animation des cartes de chapitre
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    if (chapterCards.length > 0) {
      // Fonction pour vérifier si un élément est visible dans la fenêtre
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      // Fonction pour animer les cartes lorsqu'elles deviennent visibles
      function animateCardsOnScroll() {
        chapterCards.forEach(card => {
          if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
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
      
      // Nettoyage lors du démontage du composant
      return () => {
        window.removeEventListener('scroll', animateCardsOnScroll);
      };
    }
  }, []); // Dépendances vides pour exécuter l'effet une seule fois

  return (
    <MainLayout title="2ème Année Baccalauréat - Ressources Éducatives">
      <Head>
        <meta name="description" content="Ressources éducatives pour la 2ème Année Baccalauréat en Physique et Chimie. Cours, exercices corrigés et devoirs pour les filières Sciences Physiques, Sciences Mathématiques et Sciences de la Vie et de la Terre." />
        <meta name="keywords" content="2ème bac, sciences physiques, sciences mathématiques, svt, physique, chimie, maroc, lycée, cours, exercices, examens nationaux" />
        <meta property="og:title" content="2ème Année Baccalauréat - Ressources Éducatives" />
        <meta property="og:description" content="Ressources éducatives pour la 2ème Année Baccalauréat en Physique et Chimie pour les filières Sciences Physiques, Sciences Mathématiques et Sciences de la Vie et de la Terre." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/2Bac" />
        <meta property="og:image" content="/images/2bac-banner.svg" />
        <link rel="canonical" href="https://physiquetous.com/2Bac" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: '2ème Année Baccalauréat' }
          ]}
        />
        
        <section className="intro">
          <h2>Ressources pour la 2ème Année Baccalauréat</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/2bac-banner.svg" 
              alt="2ème Année Baccalauréat" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
          <p>Vous trouverez ici les ressources pour les différentes filières de la 2ème Année Baccalauréat.</p>
        </section>
        
        <section>
          <h2>Filières disponibles</h2>
          <div className="chapters">
            <div className="chapter-card">
              <h3>Sciences Physiques</h3>
              <p>Programme complet de Physique et Chimie pour la filière Sciences Physiques avec cours, exercices, conseils et expériences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/2Bac/SciencesPhy">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
            
            <div className="chapter-card">
              <h3>Sciences Mathématiques</h3>
              <p>Programme complet de Physique et Chimie pour la filière Sciences Mathématiques avec cours, exercices, conseils et expériences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/2Bac/SciencesMath">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
            
            <div className="chapter-card">
              <h3>Sciences de la Vie et de la Terre (SVT)</h3>
              <p>Programme complet de Physique et Chimie pour la filière Sciences de la Vie et de la Terre avec cours, exercices, conseils et expériences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/2Bac/SVT">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}