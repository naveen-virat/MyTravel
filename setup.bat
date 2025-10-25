@echo off
echo ================================
echo  MyTravel Application Setup
echo ================================
echo.

echo Checking prerequisites...

REM Check if .NET is installed
dotnet --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: .NET 8.0 SDK is not installed!
    echo Please download from: https://dotnet.microsoft.com/download
    pause
    exit /b 1
)
echo ✓ .NET SDK found

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download from: https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js found

REM Check if Angular CLI is installed
ng version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Angular CLI globally...
    npm install -g @angular/cli
)
echo ✓ Angular CLI ready

echo.
echo Setting up backend (.NET Web API)...
cd MyTravelAPIServices
dotnet restore
if %errorlevel% neq 0 (
    echo ERROR: Failed to restore .NET packages
    pause
    exit /b 1
)

dotnet build
if %errorlevel% neq 0 (
    echo ERROR: Failed to build .NET project
    pause
    exit /b 1
)
echo ✓ Backend setup complete

cd ..

echo.
echo Setting up frontend (Angular)...
cd MyTravelAngular
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install npm packages
    pause
    exit /b 1
)
echo ✓ Frontend setup complete

cd ..

echo.
echo ================================
echo  Setup Complete! 
echo ================================
echo.
echo To start the application:
echo 1. Run backend:  'cd MyTravelAPIServices && dotnet run'
echo 2. Run frontend: 'cd MyTravelAngular && ng serve'
echo.
echo Or use the convenience scripts:
echo - 'npm run start:backend'
echo - 'npm run start:frontend'
echo - 'npm run start' (starts both)
echo.
echo Don't forget to set up your database using DBScript.sql!
echo.
pause