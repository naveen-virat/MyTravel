#!/bin/bash

echo "================================"
echo " MyTravel Application Setup"
echo "================================"
echo

echo "Checking prerequisites..."

# Check if .NET is installed
if ! command -v dotnet &> /dev/null; then
    echo "ERROR: .NET 8.0 SDK is not installed!"
    echo "Please download from: https://dotnet.microsoft.com/download"
    exit 1
fi
echo "✓ .NET SDK found"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download from: https://nodejs.org/"
    exit 1
fi
echo "✓ Node.js found"

# Check if Angular CLI is installed
if ! command -v ng &> /dev/null; then
    echo "Installing Angular CLI globally..."
    npm install -g @angular/cli
fi
echo "✓ Angular CLI ready"

echo
echo "Setting up backend (.NET Web API)..."
cd MyTravelAPIServices

dotnet restore
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to restore .NET packages"
    exit 1
fi

dotnet build
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to build .NET project"
    exit 1
fi
echo "✓ Backend setup complete"

cd ..

echo
echo "Setting up frontend (Angular)..."
cd MyTravelAngular

npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install npm packages"
    exit 1
fi
echo "✓ Frontend setup complete"

cd ..

echo
echo "================================"
echo " Setup Complete! "
echo "================================"
echo
echo "To start the application:"
echo "1. Run backend:  'cd MyTravelAPIServices && dotnet run'"
echo "2. Run frontend: 'cd MyTravelAngular && ng serve'"
echo
echo "Or use the convenience scripts:"
echo "- 'npm run start:backend'"
echo "- 'npm run start:frontend'"
echo "- 'npm run start' (starts both)"
echo
echo "Don't forget to set up your database using DBScript.sql!"
echo