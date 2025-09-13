import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout title="Ressources Éducatives pour Lycéens Marocains">
      <main className="container">
        <section className="mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Bienvenue sur notre plateforme éducative</h2>
          <div className="my-5 text-center">
            <img 
              src="/images/accueil-banner.svg" 
              alt="Ressources éducatives pour lycéens" 
              className="max-w-full h-auto rounded-lg shadow-custom" 
              loading="lazy"
              width={800}
              height={400}
            />
          </div>
          <p className="text-gray-700">Ce site propose des ressources pédagogiques pour les lycéens marocains en sciences physiques et chimie. Vous y trouverez des cours, exercices corrigés, conseils et expériences pour chaque chapitre du programme officiel.</p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Niveaux disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card transition-standard hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3">Tronc Commun Scientifique</h3>
              <p className="text-gray-700 mb-4">Base commune pour toutes les filières scientifiques. Ce niveau établit les fondements essentiels pour toutes les sciences.</p>
              <div className="space-y-2">
                <div>
                  <Link href="/TroncCommun" className="text-primary hover:text-primary/80 flex items-center">
                    Accéder aux ressources 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="card transition-standard hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3">1ère Année Baccalauréat</h3>
              <p className="text-gray-700 mb-4">Première année du cycle du baccalauréat avec des cours adaptés aux différentes filières scientifiques.</p>
              <div className="space-y-2">
                <div>
                  <Link href="/1Bac/SciencesExp" className="text-primary hover:text-primary/80 flex items-center">
                    Sciences Expérimentales
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="/1Bac/SciencesMath" className="text-primary hover:text-primary/80 flex items-center">
                    Sciences Mathématiques
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="card transition-standard hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3">2ème Année Baccalauréat</h3>
              <p className="text-gray-700 mb-4">Année de préparation au baccalauréat avec un programme approfondi spécifique à chaque filière scientifique.</p>
              <div className="space-y-2">
                <div>
                  <Link href="/2Bac/SciencesPhy" className="text-primary hover:text-primary/80 flex items-center">
                    Sciences Physiques
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="/2Bac/SciencesMath" className="text-primary hover:text-primary/80 flex items-center">
                    Sciences Mathématiques
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="/2Bac/SVT" className="text-primary hover:text-primary/80 flex items-center">
                    Sciences de la Vie et de la Terre
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}