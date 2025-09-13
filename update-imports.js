/**
 * Ce script va remplacer les importations des fichiers chaptersData.js
 * par les importations des nouveaux fichiers dans src/data
 */

const fs = require('fs');
const path = require('path');

// Fonction pour mettre à jour les importations
function updateImports(filePath, oldImportPattern, newImportStatement) {
  try {
    const fullPath = path.resolve(filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Trouver les importations existantes
      const importRegex = new RegExp(`import\\s+\\{([^}]+)\\}\\s+from\\s+['"]${oldImportPattern}['"]`, 'g');
      let match = importRegex.exec(content);
      
      if (match) {
        // Extraire les noms des imports
        const imports = match[1].split(',').map(name => name.trim());
        
        // Construire la nouvelle déclaration d'importation
        const newImport = `import { ${imports.join(', ')} } from '${newImportStatement}'`;
        
        // Remplacer l'ancienne importation par la nouvelle
        content = content.replace(importRegex, newImport);
        
        // Écrire le contenu mis à jour
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Importations mises à jour dans ${filePath}`);
      } else {
        console.log(`⚠️ Aucune importation correspondante trouvée dans ${filePath}`);
      }
    } else {
      console.log(`⚠️ Le fichier ${filePath} n'existe pas.`);
    }
  } catch (err) {
    console.error(`❌ Erreur lors de la mise à jour des importations dans ${filePath}:`, err);
  }
}

// Fonction pour mettre à jour les importations dans les sous-dossiers
function updateChapterImports(basePath, filiere, newImportPath) {
  try {
    // Mettre à jour les importations pour les dossiers Physique et Chimie
    const subjects = ['Physique', 'Chimie'];
    
    subjects.forEach(subject => {
      const subjectPath = path.join(basePath, subject);
      
      if (fs.existsSync(subjectPath)) {
        // Lister tous les chapitres
        const chapters = fs.readdirSync(subjectPath)
          .filter(item => fs.statSync(path.join(subjectPath, item)).isDirectory());
        
        chapters.forEach(chapter => {
          const indexFile = path.join(subjectPath, chapter, 'index.js');
          
          if (fs.existsSync(indexFile)) {
            updateImports(indexFile, '../../chaptersData', newImportPath);
          }
        });
      }
    });
  } catch (err) {
    console.error(`❌ Erreur lors de la mise à jour des importations dans les chapitres:`, err);
  }
}

// Liste des fichiers à mettre à jour avec leurs anciennes et nouvelles importations
const filesWithImports = [
  {
    file: 'pages/1Bac/SciencesExp/index.js',
    oldImport: './chaptersData',
    newImport: '@/data/1Bac-SciencesExp-chaptersData'
  },
  {
    file: 'pages/1Bac/SciencesMath/index.js',
    oldImport: './chaptersData',
    newImport: '@/data/1Bac-SciencesMath-chaptersData'
  },
  {
    file: 'pages/2Bac/SciencesMath/index.js',
    oldImport: './chaptersData',
    newImport: '@/data/2Bac-SciencesMath-chaptersData'
  },
  {
    file: 'pages/2Bac/SciencesPhy/index.js',
    oldImport: './chaptersData',
    newImport: '@/data/2Bac-SciencesPhy-chaptersData'
  },
  {
    file: 'pages/2Bac/SVT/index.js',
    oldImport: './chaptersData',
    newImport: '@/data/2Bac-SVT-chaptersData'
  }
];

// Fonction principale
function updateAllImports() {
  console.log('=== MISE À JOUR DES IMPORTATIONS ===');
  
  // Mettre à jour les importations dans les fichiers index.js
  filesWithImports.forEach(({ file, oldImport, newImport }) => {
    updateImports(file, oldImport, newImport);
  });
  
  // Mettre à jour les importations dans les chapitres
  updateChapterImports('pages/1Bac/SciencesExp', 'SciencesExp', '@/data/1Bac-SciencesExp-chaptersData');
  updateChapterImports('pages/1Bac/SciencesMath', 'SciencesMath', '@/data/1Bac-SciencesMath-chaptersData');
  updateChapterImports('pages/2Bac/SciencesMath', 'SciencesMath', '@/data/2Bac-SciencesMath-chaptersData');
  updateChapterImports('pages/2Bac/SciencesPhy', 'SciencesPhy', '@/data/2Bac-SciencesPhy-chaptersData');
  updateChapterImports('pages/2Bac/SVT', 'SVT', '@/data/2Bac-SVT-chaptersData');
  
  console.log('\n🎉 Mise à jour des importations terminée!');
}

// Exécuter la fonction principale
updateAllImports();
