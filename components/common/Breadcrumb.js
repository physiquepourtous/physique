import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

/**
 * Composant Breadcrumb
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.items - Un tableau d'objets contenant les éléments du breadcrumb
 *   Chaque objet doit avoir les propriétés suivantes :
 *   - label: le texte à afficher
 *   - href: l'URL de destination (optionnel pour le dernier élément)
 *   - active: booléen indiquant si c'est l'élément actif (optionnel)
 */
const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <>
      <Head>
        <link href="/css/breadcrumb.css" rel="stylesheet" />
      </Head>
      <div className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <div 
              className={`breadcrumb-item ${isLast ? 'breadcrumb-current' : ''}`}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {!isLast ? (
                <Link href={item.href} itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </div>
            
            {!isLast && (
              <span className="breadcrumb-separator">
                <i className="fas fa-chevron-right"></i>
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
    </>
  );
};

export default Breadcrumb;