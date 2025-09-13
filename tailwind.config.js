module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ici nous allons extraire les couleurs existantes du site
        primary: '#007bff',       // Bleu primaire 
        secondary: '#6c757d',     // Gris secondaire
        success: '#28a745',       // Vert pour les succès
        danger: '#dc3545',        // Rouge pour les erreurs
        warning: '#ffc107',       // Jaune pour les avertissements
        info: '#17a2b8',          // Bleu clair pour les informations
        light: '#f8f9fa',         // Gris très clair
        dark: '#343a40',          // Gris très foncé
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 3px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
