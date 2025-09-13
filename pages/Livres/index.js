import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Breadcrumb from '../../components/common/Breadcrumb';

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
          <img src={book.imageSrc} alt={book.title} />
        ) : (
          <div className="book-placeholder">
            <i className="fas fa-book"></i>
            <p>Image du livre - 250x300px</p>
          </div>
        )}
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
        <div className="book-link">
          <a href={book.downloadLink} target="_blank" rel="noopener noreferrer">Télécharger le livre</a>
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
        <link href="/css/harvard-style.css" rel="stylesheet" />
        <link href="/css/footer-social.css" rel="stylesheet" />
        <link href="/css/livres-styles.css" rel="stylesheet" />
        <link href="/css/breadcrumb.css" rel="stylesheet" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Livres' }
          ]}
        />
        
        <section className="intro">
          <h2>Bibliothèque de Physique</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/livres-banner.svg" 
              alt="Bibliothèque de livres de physique et chimie" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
          <p>Une sélection de livres recommandés pour approfondir vos connaissances en physique et chimie. Ces ressources complémentaires vous aideront à mieux comprendre les concepts fondamentaux et avancés du programme.</p>
        </section>
        
        <section>
          <h2>Livres de Physique</h2>
          <div className="book-container">
            {physicsBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
        
        <section>
          <h2>Livres de Chimie</h2>
          <div className="book-container">
            {chemistryBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}