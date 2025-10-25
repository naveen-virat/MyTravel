# Git Repository Setup Commands

# Navigate to your project directory
cd /path/to/MyTravel

# Initialize Git repository
git init

# Add all files to staging
git add .

# Make initial commit
git commit -m "Initial commit: MyTravel Full Stack Application

Features:
- ASP.NET Core 8.0 Web API with Swagger
- Angular 15 Frontend
- SQL Server Database with sample data
- Complete travel booking functionality
- Docker support
- Comprehensive documentation"

# Add remote repository (replace with your actual GitHub repo URL)
git remote add origin https://github.com/naveen-virat/MyTravel.git

# Push to GitHub
git branch -M main
git push -u origin main

echo "Repository setup complete!"
echo "Your repository is now available at: https://github.com/naveen-virat/MyTravel"