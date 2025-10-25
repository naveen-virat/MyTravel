@echo off
echo ================================
echo  Create Release Tag for Deployment
echo ================================
echo.

set /p version="Enter version number (e.g., 1.0.0): "

if "%version%"=="" (
    echo Error: Version number is required
    pause
    exit /b 1
)

echo Creating release tag v%version%...

git tag -a v%version% -m "Release version %version%

Features:
- Full-stack travel booking application
- ASP.NET Core 8.0 Web API with Swagger
- Angular 15 responsive frontend
- SQL Server database with sample data
- Docker containerization support
- CI/CD pipeline with automated testing
- Comprehensive documentation"

echo Pushing tag to GitHub...
git push origin v%version%

if %errorlevel% equ 0 (
    echo.
    echo ================================
    echo  Release Tag Created Successfully!
    echo ================================
    echo.
    echo Tag: v%version%
    echo.
    echo This will trigger:
    echo ✅ Automated deployment workflow
    echo ✅ GitHub release creation
    echo ✅ Production build and deploy
    echo.
    echo View the deployment at:
    echo https://github.com/naveen-virat/MyTravel/actions
    echo.
    echo View the release at:
    echo https://github.com/naveen-virat/MyTravel/releases
    echo.
) else (
    echo ERROR: Failed to push tag to GitHub
)

pause