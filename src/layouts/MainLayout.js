import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function MainLayout({ children, title = 'Ressources Éducatives pour Lycéens Marocains' }) {
  useEffect(() => {
    // Vérification de sécurité pour le navigateur (pour éviter les erreurs SSR)
    if (typeof window === 'undefined') return;

    // Fonction pour ajuster le footer
    function adjustFooter() {
      const footer = document.querySelector('footer.auto-footer');
      const footerSpacer = document.querySelector('.footer-spacer');
      
      if (!footer || !footerSpacer) return;
      
      const contentHeight = document.body.offsetHeight - footer.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (contentHeight < windowHeight) {
        footerSpacer.style.height = (windowHeight - contentHeight) + 'px';
      }
    }
    
    // Ajuster au chargement
    adjustFooter();
    
    // Ajuster au redimensionnement
    window.addEventListener('resize', adjustFooter);
    
    // Gestion du bouton "Back to top"
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Définition des gestionnaires d'événements que nous utiliserons
    let scrollHandlers = [];
    
    if (backToTopButton) {
      // Fonction pour afficher/masquer le bouton en fonction du défilement
      const handleBackToTopVisibility = () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      };
      
      // Ajouter au tableau des gestionnaires
      scrollHandlers.push(handleBackToTopVisibility);
      
      // Écouter l'événement de défilement
      window.addEventListener('scroll', handleBackToTopVisibility);
      
      // Animer le défilement vers le haut lorsque le bouton est cliqué
      backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Ajouter des effets d'animation aux cartes de chapitre
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
      const handleCardAnimation = () => {
        chapterCards.forEach(card => {
          if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      };
      
      // Ajouter au tableau des gestionnaires
      scrollHandlers.push(handleCardAnimation);
      
      // Optimisation des animations pour les appareils mobiles
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // Réduire les animations sur mobile pour améliorer les performances
        chapterCards.forEach(card => {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
      }
      
      // Initialiser les styles des cartes
      chapterCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Lancer l'animation initiale
      setTimeout(handleCardAnimation, 300);
      
      // Écouter l'événement de défilement pour l'animation
      window.addEventListener('scroll', handleCardAnimation);
    }
    
    // Gestion du menu hamburger pour mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('menu-open');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-active');
      });
      
      // Fermer le menu lorsqu'un lien est cliqué
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('menu-open');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-active');
          }
        });
      });
      
      // Fermer le menu si on clique en dehors
      document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && navMenu.classList.contains('menu-open')) {
          // Vérifier si le clic est en dehors du menu et du bouton de menu
          if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('menu-open');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-active');
          }
        }
      });
    }
    
    // Nettoyage
    return () => {
      // Supprimer l'écouteur d'événement de redimensionnement
      window.removeEventListener('resize', adjustFooter);
      
      // Supprimer tous les écouteurs d'événements de défilement
      scrollHandlers.forEach(handler => {
        window.removeEventListener('scroll', handler);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <title>{title}</title>
        {/* Les polices sont maintenant chargées dans _document.js */}
        <meta name="theme-color" content="#a51c30" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      
      <header className="bg-primary text-white py-6">
        <div className="container">
          <h1 className="text-3xl font-bold mb-1">Ressources Éducatives</h1>
          <p className="text-sm md:text-base">Pour les lycéens marocains - Sciences Physiques et Chimie</p>
        </div>
      </header>
      
      <nav className="bg-dark text-white sticky top-0 z-10 shadow-md">
        <div className="container flex justify-between items-center">
          <button className="menu-toggle md:hidden" aria-label="Menu">
            <span className="hamburger block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="hamburger block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="hamburger block w-6 h-0.5 bg-white"></span>
          </button>
          <ul className="hidden md:flex space-x-1 lg:space-x-4">
            <li><Link href="/" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">Accueil</Link></li>
            <li><Link href="/TroncCommun" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">Tronc Commun</Link></li>
            <li><Link href="/1Bac" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">1ère Bac</Link></li>
            <li><Link href="/2Bac" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">2ème Bac</Link></li>
            <li><Link href="/Livres" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">Livres</Link></li>
            <li><Link href="/Videos" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">Vidéos</Link></li>
            <li><Link href="/Contact" className="inline-block py-3 px-2 lg:px-4 hover:bg-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
      
      {children}
      
      <a className="back-to-top fixed bottom-8 right-8 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-primary/90" href="#">
        <i className="fas fa-arrow-up"></i>
      </a>
      
      <div className="footer-spacer" style={{ height: '80px', clear: 'both' }}></div>
      
      <footer className="auto-footer bg-dark text-white py-6 text-center">
        <div className="footer-social-links flex justify-center space-x-4 mb-4">
          <a href="https://www.youtube.com/channel/VOTRE_ID_CHAINE" target="_blank" className="youtube text-white hover:text-red-600 transition-colors" title="YouTube" rel="noopener noreferrer"><i className="fab fa-youtube text-xl"></i></a>
          <a href="https://www.instagram.com/VOTRE_COMPTE" target="_blank" className="instagram text-white hover:text-pink-500 transition-colors" title="Instagram" rel="noopener noreferrer"><i className="fab fa-instagram text-xl"></i></a>
          <a href="https://www.tiktok.com/@VOTRE_COMPTE" target="_blank" className="tiktok text-white hover:text-teal-400 transition-colors" title="TikTok" rel="noopener noreferrer"><i className="fab fa-tiktok text-xl"></i></a>
          <a href="https://www.facebook.com/VOTRE_PAGE" target="_blank" className="facebook text-white hover:text-blue-600 transition-colors" title="Facebook" rel="noopener noreferrer"><i className="fab fa-facebook-f text-xl"></i></a>
        </div>
        <p className="text-sm">© 2025 - Physiquetous.com<br/>Tous droits réservés</p>
      </footer>
      
      <Script id="mobile-optimization" src="/js/mobile-optimization.js" strategy="afterInteractive" />
    </>
  );
}
