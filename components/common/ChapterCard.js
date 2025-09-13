import React from 'react';
import Link from 'next/link';

export default function ChapterCard({ title, description, links }) {
  return (
    <div className="chapter-card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <div className="resources">
        {links && links.map((link, index) => (
          <div className="resource-item" key={index}>
            <Link href={link.url} target={link.external ? "_blank" : undefined}>
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exemple d'utilisation:
// <ChapterCard
//   title="Chapitre 1 : La gravitation universelle"
//   description="Introduction à la gravitation et ses lois"
//   links={[
//     { text: "Cours", url: "/TroncCommun/Physique/Chapitre1/cours.pdf", external: true },
//     { text: "Exercices", url: "/TroncCommun/Physique/Chapitre1/serie1.pdf", external: true }
//   ]}
// />