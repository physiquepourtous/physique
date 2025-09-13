import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import Breadcrumb from '@/components/common/Breadcrumb';

// Données des livres
const physicsBooks = [
  {
    id: 1,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book1.jpg",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book2.jpg",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book3.jpg",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book4.jpg",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book5.jpg",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book6.jpg",
    downloadLink: "#"
  },
  {
    id: 7,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book7.jpg",
    downloadLink: "#"
  },
  {
    id: 8,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book8.jpg",
    downloadLink: "#"
  },
  {
    id: 9,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book9.jpg",
    downloadLink: "#"
  },
  {
    id: 10,
    title: "Titre du livre de physique",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/physics-book10.jpg",
    downloadLink: "#"
  }
];

const chemistryBooks = [
  {
    id: 1,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book1.jpg",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book2.jpg",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book3.jpg",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book4.jpg",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book5.jpg",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book6.jpg",
    downloadLink: "#"
  },
  {
    id: 7,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book7.jpg",
    downloadLink: "#"
  },
  {
    id: 8,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book8.jpg",
    downloadLink: "#"
  },
  {
    id: 9,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book9.jpg",
    downloadLink: "#"
  },
  {
    id: 10,
    title: "Titre du livre de chimie",
    author: "Auteur du livre",
    description: "Description brève du contenu du livre et son utilité pour les élèves de lycée.",
    imageSrc: "/images/livres/chemistry-book10.jpg",
    downloadLink: "#"
  }
];

// Composant pour un livre
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-image">
        {book.imageSrc ? (
          <img src={book.imageSrc} alt={book.title} className="w-full h-auto" />
        ) : (
          <div className="bg-gray-100 rounded flex flex-col items-center justify-center h-full p-4">
            <i className="fas fa-book text-4xl text-gray-400 mb-2"></i>
            <p className="text-gray-500 text-center text-sm">Image du livre - 250x300px</p>
          </div>
        )}
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
        <div className="book-link">
          <a href={book.downloadLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span>Télécharger le livre</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Livres() {
  useEffect(() => {
    // Vérification de sécurité pour le navigateur (éviter les erreurs SSR)
    if (typeof window === 'undefined') return;

    // Animation des cartes de livres
    const bookCards = document.querySelectorAll('.book-card');
    
    if (bookCards.length > 0) {
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
        bookCards.forEach(card => {
          if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      }
      
      // Initialiser les styles des cartes
      bookCards.forEach(card => {
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
    <MainLayout title="Livres de Physique - Ressources Éducatives">
      <Head>
        <meta name="description" content="Une sélection de livres recommandés pour approfondir vos connaissances en physique et chimie. Ressources complémentaires pour les lycéens." />
        <meta name="keywords" content="livres, physique, chimie, maroc, lycée, ressources éducatives, téléchargement" />
        <meta property="og:title" content="Livres de Physique - Ressources Éducatives" />
        <meta property="og:description" content="Une sélection de livres recommandés pour approfondir vos connaissances en physique et chimie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/Livres" />
        <link rel="canonical" href="https://physiquetous.com/Livres" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Livres' }
          ]}
        />
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Bibliothèque de Physique</h2>
          <div className="my-5 text-center">
            <img 
              src="/images/livres-banner.svg" 
              alt="Bibliothèque de livres de physique et chimie" 
              className="max-w-full h-auto rounded-lg shadow-custom" 
            />
          </div>
          <p className="text-gray-700">Une sélection de livres recommandés pour approfondir vos connaissances en physique et chimie. Ces ressources complémentaires vous aideront à mieux comprendre les concepts fondamentaux et avancés du programme.</p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Livres de Physique</h2>
          <div className="space-y-6">
            {physicsBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Livres de Chimie</h2>
          <div className="space-y-6">
            {chemistryBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}