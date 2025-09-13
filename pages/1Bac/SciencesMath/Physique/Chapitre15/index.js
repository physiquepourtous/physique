import React from 'react';
import MainLayout from '../../../../../layouts/MainLayout';
import Head from 'next/head';
import Breadcrumb from '../../../../../components/common/Breadcrumb';
import { PhysiqueS2Chapters } from '@/data/1Bac-SciencesMath-chaptersData';

export default function Chapitre15() {
  const chapter = PhysiqueS2Chapters.find(ch => ch.id === 15); // Chapitre 15

  return (
    <MainLayout title={`Chapitre ${chapter.id}: ${chapter.title} - 1ère Bac Sciences Mathématiques`}>
      <Head>
        <meta name="description" content={`Cours, exercices et ressources sur ${chapter.title} pour la 1ère Bac Sciences Mathématiques.`} />
        <meta name="keywords" content={`1ère bac, sciences mathématiques, physique, ${chapter.title}, cours, exercices`} />
        <meta property="og:title" content={`Chapitre ${chapter.id}: ${chapter.title} - 1ère Bac Sciences Mathématiques`} />
        <meta property="og:description" content={`Cours, exercices et ressources sur ${chapter.title} pour la 1ère Bac Sciences Mathématiques.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://physiquetous.com/1Bac/SciencesMath/Physique/Chapitre${chapter.id}`} />
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
            { label: 'Sciences Mathématiques', href: '/1Bac/SciencesMath' },
            { label: 'Physique', href: '/1Bac/SciencesMath' },
            { label: `Chapitre ${chapter.id}: ${chapter.title}` }
          ]}
        />
        
        <section className="intro">
          <h2>Chapitre {chapter.id}: {chapter.title}</h2>
          <p>Bienvenue dans le chapitre {chapter.id} du cours de Physique pour la 1ère Année Baccalauréat Sciences Mathématiques.</p>
        </section>
        
        <section>
          <h3>Ressources disponibles</h3>
          <div className="resources">
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/cours.pdf`} target="_blank" rel="noopener noreferrer">
                Cours
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/experience.pdf`} target="_blank" rel="noopener noreferrer">
                Expériences
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/conseils.pdf`} target="_blank" rel="noopener noreferrer">
                Conseils
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie1.pdf`} target="_blank" rel="noopener noreferrer">
                Série 1
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie2.pdf`} target="_blank" rel="noopener noreferrer">
                Série 2
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie3.pdf`} target="_blank" rel="noopener noreferrer">
                Série 3
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie4.pdf`} target="_blank" rel="noopener noreferrer">
                Série 4
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie5.pdf`} target="_blank" rel="noopener noreferrer">
                Série 5
              </a>
            </div>
            <div className="resource-item">
              <a href={`/1Bac/SciencesMath/Physique/Chapitre${chapter.id}/serie6.pdf`} target="_blank" rel="noopener noreferrer">
                Série 6
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}