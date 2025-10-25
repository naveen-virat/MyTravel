@echo off
echo ================================
echo  Creating GitHub Repository
echo ================================
echo.

echo Creating MyTravel repository on GitHub...
"C:\Program Files\GitHub CLI\gh.exe" repo create naveen-virat/MyTravel --public --description "Full Stack Travel Booking Application with .NET Core Web API and Angular" --clone=false

if %errorlevel% equ 0 (
    echo.
    echo Repository created successfully!
    echo.
    echo Pushing code to GitHub...
    git push -u origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo ================================
        echo  SUCCESS! Repository is Live!
        echo ================================
        echo.
        echo Your repository is now available at:
        echo https://github.com/naveen-virat/MyTravel
        echo.
        echo Features included:
        echo ✅ Complete source code
        echo ✅ Comprehensive README documentation
        echo ✅ Setup scripts for easy installation
        echo ✅ Docker containerization support
        echo ✅ CI/CD GitHub Actions pipeline
        echo ✅ Cross-platform compatibility
        echo.
        echo Next steps for users:
        echo 1. git clone https://github.com/naveen-virat/MyTravel.git
        echo 2. cd MyTravel
        echo 3. Run setup.bat (Windows) or ./setup.sh (Linux/Mac)
        echo 4. Follow the README instructions
        echo.
    ) else (
        echo ERROR: Failed to push code to repository
    )
) else (
    echo ERROR: Failed to create repository
    echo Please ensure you are authenticated with: gh auth login
)

pause