import React from 'react';
import Link from 'next/link';

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
    <div className="breadcrumb mb-6 flex flex-wrap text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <div 
              className={`breadcrumb-item flex items-center ${isLast ? 'text-secondary font-medium' : ''}`}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {!isLast ? (
                <Link href={item.href} className="text-primary hover:text-primary/80" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </div>
            
            {!isLast && (
              <span className="mx-2 text-secondary">
                <i className="fas fa-chevron-right text-xs"></i>
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;