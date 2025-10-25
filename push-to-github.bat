@echo off
echo ================================
echo  Pushing to GitHub Repository
echo ================================
echo.

echo Pushing MyTravel to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ================================
    echo  SUCCESS! Repository Created
    echo ================================
    echo.
    echo Your repository is now live at:
    echo https://github.com/naveen-virat/MyTravel
    echo.
    echo Features available:
    echo - Complete source code
    echo - Comprehensive documentation
    echo - Setup scripts for easy installation
    echo - Docker support
    echo - CI/CD pipeline
    echo.
) else (
    echo.
    echo ERROR: Failed to push to repository
    echo Please ensure:
    echo 1. Repository exists on GitHub
    echo 2. You have proper access rights
    echo 3. Your PAT is correctly configured
    echo.
)

pause