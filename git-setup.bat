@echo off
echo ================================
echo  Git Repository Setup
echo ================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please download from: https://git-scm.com/
    pause
    exit /b 1
)

echo Initializing Git repository...
git init

echo Adding files to staging...
git add .

echo Making initial commit...
git commit -m "Initial commit: MyTravel Full Stack Application

Features:
- ASP.NET Core 8.0 Web API with Swagger
- Angular 15 Frontend  
- SQL Server Database with sample data
- Complete travel booking functionality
- Docker support
- Comprehensive documentation"

echo.
echo Next steps:
echo 1. Create a repository at: https://github.com/naveen-virat/MyTravel
echo 2. Run: git remote add origin https://github.com/naveen-virat/MyTravel.git
echo 3. Run: git branch -M main
echo 4. Run: git push -u origin main
echo.
echo Repository setup complete!
pause