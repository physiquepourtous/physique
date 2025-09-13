@echo off
echo ===== DÉMARRAGE EN MODE DÉVELOPPEMENT =====
echo.

echo 1. Installation des dépendances...
call npm install
if %errorlevel% neq 0 (
  echo Erreur lors de l'installation des dépendances.
  goto :error
)
echo Dépendances installées avec succès.
echo.

echo 2. Copie des ressources statiques...
call node copy-static-resources.js
if %errorlevel% neq 0 (
  echo Erreur lors de la copie des ressources statiques.
  goto :error
)
echo Ressources statiques copiées avec succès.
echo.

echo 3. Démarrage du serveur de développement...
call npm run dev
if %errorlevel% neq 0 (
  echo Erreur lors du démarrage du serveur de développement.
  goto :error
)
goto :end

:error
echo.
echo Une erreur s'est produite. Veuillez consulter les messages ci-dessus.
exit /b 1

:end
echo.
echo ===== SERVEUR DE DÉVELOPPEMENT DÉMARRÉ =====
exit /b 0