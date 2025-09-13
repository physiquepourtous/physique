import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function PremiereBac() {
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
    <MainLayout title="1ère Année Baccalauréat - Ressources Éducatives">
      <Head>
        <meta name="description" content="Ressources éducatives pour la 1ère Année Baccalauréat en Physique et Chimie. Cours, exercices corrigés et devoirs pour les filières Sciences Expérimentales et Sciences Mathématiques." />
        <meta name="keywords" content="1ère bac, sciences expérimentales, sciences mathématiques, physique, chimie, maroc, lycée, cours, exercices" />
        <meta property="og:title" content="1ère Année Baccalauréat - Ressources Éducatives" />
        <meta property="og:description" content="Ressources éducatives pour la 1ère Année Baccalauréat en Physique et Chimie pour les filières Sciences Expérimentales et Sciences Mathématiques." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/1Bac" />
        <meta property="og:image" content="/images/1bac-banner.svg" />
        <link rel="canonical" href="https://physiquetous.com/1Bac" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: '1ère Année Baccalauréat' }
          ]}
        />
        
        <section className="intro">
          <h2>Ressources pour la 1ère Année Baccalauréat</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/1bac-banner.svg" 
              alt="1ère Année Baccalauréat" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
          <p>Vous trouverez ici les ressources pour les différentes filières de la 1ère Année Baccalauréat.</p>
        </section>
        
        <section>
          <h2>Filières disponibles</h2>
          <div className="chapters">
            <div className="chapter-card">
              <h3>Sciences Expérimentales</h3>
              <p>Programme complet de Physique et Chimie pour la filière Sciences Expérimentales avec cours, exercices, conseils et expériences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/1Bac/SciencesExp">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
            
            <div className="chapter-card">
              <h3>Sciences Mathématiques</h3>
              <p>Programme complet de Physique et Chimie pour la filière Sciences Mathématiques avec cours, exercices, conseils et expériences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/1Bac/SciencesMath">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}