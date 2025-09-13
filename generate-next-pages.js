/**
 * Script pour générer automatiquement les pages Next.js
 * à partir de la structure du site HTML original
 * 
 * Instructions d'utilisation:
 * 1. Installer les dépendances : npm install fs-extra path cheerio
 * 2. Exécuter le script : node generate-next-pages.js
 */

const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

// Chemins source et destination
const SOURCE_DIR = 'C:/Users/med.kh/Documents/site 2025';
const DEST_DIR = 'C:/Users/med.kh/Documents/site-nextjs-exact/pages';

// Sections principales du site
const MAIN_SECTIONS = [
  'TroncCommun',
  '1Bac',
  '2Bac',
  'Livres',
  'Videos',
  'Contact'
];

// Template pour les pages Next.js
const pageTemplate = (title, content, hasSemestres = false) => `
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
import Script from 'next/script';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}() {
  useEffect(() => {
    ${hasSemestres ? `
    // Gestion des semestres
    const buttons = document.querySelectorAll('.semestre-btn');
    const sections = document.querySelectorAll('.semestre-section');
    
    function activate(id) {
      // Désactiver tous les boutons et sections
      sections.forEach(s => s.classList.remove('active'));
      buttons.forEach(b => b.classList.remove('active'));
      
      // Activer le bouton et la section correspondante
      const targetSection = document.getElementById(id);
      const targetButton = document.querySelector(\`[data-target="\${id}"]\`);
      
      if (targetSection && targetButton) {
        targetSection.classList.add('active');
        targetButton.classList.add('active');
        
        // Animation de défilement pour une meilleure expérience utilisateur
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
    
    // Ajouter des écouteurs d'événements pour les boutons
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        activate(this.dataset.target);
        // Sauvegarder la préférence de l'utilisateur dans le stockage local
        localStorage.setItem('activeSemestre', this.dataset.target);
      });
    });
    
    // Activer le semestre préféré de l'utilisateur ou semestre 1 par défaut
    const savedSemestre = localStorage.getItem('activeSemestre');
    if (savedSemestre && document.getElementById(savedSemestre)) {
      activate(savedSemestre);
    } else {
      // Par défaut, activer le semestre 1
      activate('semestre-1');
    }
    ` : ''}

    // Ajouter d'autres initialisations spécifiques à cette page ici...
    
    // Nettoyage lors du démontage du composant
    return () => {
      ${hasSemestres ? `
      buttons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      ` : ''}
    };
  }, []);

  return (
    <MainLayout title="${title}">
      ${content}
      
      ${hasSemestres ? `
      <Script id="semestre-switcher-js" strategy="afterInteractive">
        {\`
          document.addEventListener('DOMContentLoaded', function() {
            // Gestion des semestres
            const buttons = document.querySelectorAll('.semestre-btn');
            const sections = document.querySelectorAll('.semestre-section');
            
            function activate(id) {
              // Désactiver tous les boutons et sections
              sections.forEach(s => s.classList.remove('active'));
              buttons.forEach(b => b.classList.remove('active'));
              
              // Activer le bouton et la section correspondante
              const targetSection = document.getElementById(id);
              const targetButton = document.querySelector(\\\`[data-target="\\\${id}"]\\\`);
              
              if (targetSection && targetButton) {
                targetSection.classList.add('active');
                targetButton.classList.add('active');
                
                // Animation de défilement pour une meilleure expérience utilisateur
                window.scrollTo({
                  top: targetSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }
            
            // Ajouter des écouteurs d'événements pour les boutons
            buttons.forEach(button => {
              button.addEventListener('click', function() {
                activate(this.dataset.target);
                // Sauvegarder la préférence de l'utilisateur dans le stockage local
                localStorage.setItem('activeSemestre', this.dataset.target);
              });
            });
            
            // Activer le semestre préféré de l'utilisateur ou semestre 1 par défaut
            const savedSemestre = localStorage.getItem('activeSemestre');
            if (savedSemestre && document.getElementById(savedSemestre)) {
              activate(savedSemestre);
            } else {
              // Par défaut, activer le semestre 1
              activate('semestre-1');
            }
          });
        \`}
      </Script>
      ` : ''}
      <Script src="/js/update-devoir-links.js" strategy="afterInteractive" />
    </MainLayout>
  );
}
`;

// Fonction pour convertir le chemin HTML en chemin Next.js
function convertPathToNextPath(htmlPath) {
  // Extraire la partie relative du chemin
  const relativePath = htmlPath.replace(SOURCE_DIR, '').replace(/\\/g, '/');
  
  // Convertir index.html en répertoire
  const nextPath = relativePath.replace(/\/index\.html$/, '');
  
  return path.join(DEST_DIR, nextPath);
}

// Fonction pour convertir le contenu HTML en JSX
function convertHtmlToJsx(htmlContent, basePath) {
  const $ = cheerio.load(htmlContent);
  
  // Extraire le titre
  const title = $('title').text();
  
  // Vérifier si la page a des semestres
  const hasSemestres = $('.semestre-switcher').length > 0;
  
  // Extraire le contenu principal
  const mainContent = $('main').html();
  
  // Convertir les liens relatifs
  let jsxContent = mainContent.replace(/href="(\.\.\/)?([^"]+)"/g, (match, prefix, url) => {
    // Ignorer les URLs externes ou absolues
    if (url.startsWith('http') || url.startsWith('/')) {
      return `href="${url}"`;
    }
    
    // Convertir les liens vers des pages HTML en liens Next.js
    if (url.endsWith('.html')) {
      const cleanUrl = url.replace('.html', '');
      return `href="/${cleanUrl}"`;
    }
    
    // Laisser les autres liens tels quels (PDF, etc.)
    return `href="/${url}"`;
  });
  
  // Convertir les attributs class en className
  jsxContent = jsxContent.replace(/class="/g, 'className="');
  
  // Ajouter des accolades pour les styles inline
  jsxContent = jsxContent.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = {};
    styles.split(';').forEach(style => {
      if (style.trim()) {
        const [property, value] = style.split(':');
        // Convertir kebab-case en camelCase
        const camelCaseProperty = property.trim().replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        styleObj[camelCaseProperty] = value.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Convertir les événements onclick en onClick avec syntaxe JSX
  jsxContent = jsxContent.replace(/onclick="([^"]*)"/g, (match, handler) => {
    // Simplifier: juste transformer en fonction fléchée React
    return `onClick={(e) => { e.preventDefault(); ${handler} }}`;
  });
  
  return {
    title,
    content: jsxContent,
    hasSemestres
  };
}

// Fonction pour générer une page Next.js à partir d'un fichier HTML
async function generateNextPage(htmlPath) {
  try {
    // Lire le fichier HTML
    const htmlContent = await fs.readFile(htmlPath, 'utf-8');
    
    // Convertir en JSX
    const { title, content, hasSemestres } = convertHtmlToJsx(htmlContent, path.dirname(htmlPath));
    
    // Déterminer le chemin de destination
    const destPath = convertPathToNextPath(htmlPath) + '.js';
    
    // Créer le dossier de destination s'il n'existe pas
    await fs.ensureDir(path.dirname(destPath));
    
    // Générer le contenu de la page Next.js
    const pageContent = pageTemplate(title, content, hasSemestres);
    
    // Écrire le fichier
    await fs.writeFile(destPath, pageContent);
    
    console.log(`✅ Page générée: ${destPath}`);
  } catch (error) {
    console.error(`❌ Erreur lors de la génération de la page ${htmlPath}:`, error);
  }
}

// Fonction pour parcourir récursivement les dossiers et trouver les fichiers HTML
async function processDirectory(directory) {
  try {
    const items = await fs.readdir(directory);
    
    for (const item of items) {
      const itemPath = path.join(directory, item);
      const stats = await fs.stat(itemPath);
      
      if (stats.isDirectory()) {
        // Traiter le sous-dossier
        await processDirectory(itemPath);
      } else if (stats.isFile() && item.endsWith('.html')) {
        // Traiter le fichier HTML
        await generateNextPage(itemPath);
      }
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement du dossier ${directory}:`, error);
  }
}

// Fonction principale
async function main() {
  try {
    console.log('=== GÉNÉRATION DES PAGES NEXT.JS ===');
    
    // Créer le dossier pages s'il n'existe pas
    await fs.ensureDir(DEST_DIR);
    
    // Traiter chaque section principale
    for (const section of MAIN_SECTIONS) {
      const sectionPath = path.join(SOURCE_DIR, section);
      
      if (await fs.pathExists(sectionPath)) {
        console.log(`\nTraitement de la section: ${section}`);
        await processDirectory(sectionPath);
      } else {
        console.log(`⚠️ Section non trouvée: ${section}`);
      }
    }
    
    console.log('\n🎉 Génération des pages Next.js terminée avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des pages:', error);
  }
}

// Exécuter la fonction principale
main();