import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout title="Ressources Éducatives pour Lycéens Marocains">
      <main className="container">
        <section className="intro">
          <h2>Bienvenue sur notre plateforme éducative</h2>
          <div className="banner-container" style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/accueil-banner.svg" 
              alt="Ressources éducatives pour lycéens" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' }} 
              loading="lazy"
              width={800}
              height={400}
            />
          </div>
          <style jsx>{`
            .banner-container {
              position: relative;
              width: 100%;
              overflow: hidden;
              border-radius: 8px;
            }
            
            @media (max-width: 768px) {
              .banner-container {
                margin: 15px 0;
              }
            }
          `}</style>
          <p>Ce site propose des ressources pédagogiques pour les lycéens marocains en sciences physiques et chimie. Vous y trouverez des cours, exercices corrigés, conseils et expériences pour chaque chapitre du programme officiel.</p>
        </section>
        
        <section className="levels-section">
          <h2>Niveaux disponibles</h2>
          <div className="chapters">
            <div className="chapter-card">
              <h3>Tronc Commun Scientifique</h3>
              <p>Base commune pour toutes les filières scientifiques. Ce niveau établit les fondements essentiels pour toutes les sciences.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/TroncCommun">Accéder aux ressources →</Link>
                </div>
              </div>
            </div>
            
            <div className="chapter-card">
              <h3>1ère Année Baccalauréat</h3>
              <p>Première année du cycle du baccalauréat avec des cours adaptés aux différentes filières scientifiques.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/1Bac/SciencesExp">Sciences Expérimentales →</Link>
                </div>
                <div className="resource-item">
                  <Link href="/1Bac/SciencesMath">Sciences Mathématiques →</Link>
                </div>
              </div>
            </div>
            
            <div className="chapter-card">
              <h3>2ème Année Baccalauréat</h3>
              <p>Année de préparation au baccalauréat avec un programme approfondi spécifique à chaque filière scientifique.</p>
              <div className="resources">
                <div className="resource-item">
                  <Link href="/2Bac/SciencesPhy">Sciences Physiques →</Link>
                </div>
                <div className="resource-item">
                  <Link href="/2Bac/SciencesMath">Sciences Mathématiques →</Link>
                </div>
                <div className="resource-item">
                  <Link href="/2Bac/SVT">Sciences de la Vie et de la Terre →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}