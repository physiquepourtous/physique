import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function Contact() {
  useEffect(() => {
    // Vérification de sécurité pour le navigateur (éviter les erreurs SSR)
    if (typeof window === 'undefined') return;

    // Animation des sections de contact
    const contactSections = document.querySelectorAll('.contact-section');
    
    if (contactSections.length > 0) {
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
      
      // Fonction pour animer les sections lorsqu'elles deviennent visibles
      function animateSectionsOnScroll() {
        contactSections.forEach(section => {
          if (isElementInViewport(section)) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }
        });
      }
      
      // Initialiser les styles des sections
      contactSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Lancer l'animation initiale
      setTimeout(animateSectionsOnScroll, 300);
      
      // Ajouter l'écouteur d'événement de défilement pour l'animation
      window.addEventListener('scroll', animateSectionsOnScroll);
      
      // Nettoyage lors du démontage du composant
      return () => {
        window.removeEventListener('scroll', animateSectionsOnScroll);
      };
    }
  }, []); // Dépendances vides pour exécuter l'effet une seule fois

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter le formulaire
    // Par exemple, envoyer les données à une API
    alert('Votre message a été envoyé avec succès !');
  };

  return (
    <MainLayout title="Contact - Ressources Éducatives">
      <Head>
        <meta name="description" content="Contactez-nous pour toute question ou suggestion. Retrouvez nos coordonnées et formulaire de contact." />
        <meta name="keywords" content="contact, email, formulaire, physique, chimie, maroc, lycée" />
        <meta property="og:title" content="Contact - Ressources Éducatives" />
        <meta property="og:description" content="Contactez-nous pour toute question ou suggestion. Retrouvez nos coordonnées et formulaire de contact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/Contact" />
        <link rel="canonical" href="https://physiquetous.com/Contact" />
        <link href="/css/harvard-style.css" rel="stylesheet" />
        <link href="/css/footer-social.css" rel="stylesheet" />
        <link href="/css/contact-styles.css" rel="stylesheet" />
        <link href="/css/breadcrumb.css" rel="stylesheet" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Contact' }
          ]}
        />
        
        <section className="intro">
          <h2>Restons en contact</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/contact-banner.svg" 
              alt="Contactez-nous" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
          <p>Vous avez des questions, des suggestions ou vous souhaitez simplement nous contacter ? Utilisez l'une des méthodes ci-dessous pour nous joindre. Nous sommes toujours heureux d'entendre de vous et de répondre à vos questions.</p>
        </section>

        <div className="contact-grid">
          <div className="contact-section">
            <h3 className="contact-title">
              <i className="fas fa-envelope"></i> Email
            </h3>
            <div className="contact-content">
              <p>Pour toute question ou demande d'information, n'hésitez pas à nous envoyer un email. Nous vous répondrons dans les plus brefs délais.</p>
              <p><strong>Email:</strong> <a href="mailto:contact@physiquetous.com">physiquetous2025@gmail.com</a></p>
            </div>
          </div>
          
          <div className="contact-section">
            <h3 className="contact-title">
              <i className="fas fa-share-alt"></i> Réseaux sociaux
            </h3>
            <div className="contact-content">
              <p>Suivez-nous sur les réseaux sociaux pour rester informés des dernières nouveautés, des astuces d'apprentissage et des ressources supplémentaires.</p>
              <div className="social-links">
                <a href="https://www.youtube.com/channel/UCHlP9BOjuViAH01MmsuF-YA" target="_blank" rel="noopener noreferrer" className="youtube">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="https://www.instagram.com/VOTRE_COMPTE" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.tiktok.com/@physique025" target="_blank" rel="noopener noreferrer" className="tiktok">
                  <i className="fab fa-tiktok"></i> TikTok
                </a>
                <a href="https://www.facebook.com/VOTRE_PAGE" target="_blank" rel="noopener noreferrer" className="facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="contact-section" style={{ marginTop: '40px' }}>
          <h3 className="contact-title">
            <i className="fas fa-paper-plane"></i> Formulaire de contact
          </h3>
          <div className="contact-content">
            <p>Utilisez ce formulaire pour nous envoyer un message. Nous vous répondrons dès que possible.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre adresse email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" name="subject" placeholder="Sujet de votre message" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Envoyer le message</button>
            </form>
          </div>
        </section>

        <div className="map-container">
          {/* Remplacez SRC par l'URL de votre emplacement Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212945.27557195246!2d-7.720409591281794!3d33.57240255678766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1693866752447!5m2!1sfr!2sma" 
            allowFullScreen="" 
            loading="lazy"
            title="Localisation sur Google Maps"
          ></iframe>
        </div>
      </main>
    </MainLayout>
  );
}