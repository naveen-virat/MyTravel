# Azure Deployment Guide for MyTravel

## Prerequisites
- Azure account (free tier)
- Azure CLI installed
- Docker (optional)

## Deployment Steps

### 1. Install Azure CLI
```bash
# Windows (PowerShell)
winget install -e --id Microsoft.AzureCLI

# Or download from: https://aka.ms/installazurecliwindows
```

### 2. Login to Azure
```bash
az login
```

### 3. Create Resource Group
```bash
az group create --name mytravel-rg --location "East US"
```

### 4. Deploy Backend (App Service)
```bash
# Create App Service Plan (Free tier)
az appservice plan create --name mytravel-plan --resource-group mytravel-rg --sku FREE --is-linux

# Create Web App
az webapp create --resource-group mytravel-rg --plan mytravel-plan --name mytravel-api-unique --runtime "DOTNETCORE:8.0" --deployment-local-git
```

### 5. Deploy Frontend (Static Web App)
```bash
# Create Static Web App
az staticwebapp create --name mytravel-frontend --resource-group mytravel-rg --source https://github.com/naveen-virat/MyTravel --branch main --app-location "/MyTravelAngular" --build-location "dist"
```

### 6. Database Options

#### Option A: Azure SQL Database (Free)
```bash
# Create SQL Server
az sql server create --name mytravel-sql-server --resource-group mytravel-rg --location "East US" --admin-user sqladmin --admin-password "YourPassword123!"

# Create Database (Free tier)
az sql db create --resource-group mytravel-rg --server mytravel-sql-server --name TravelAwayDB --service-objective Free
```

#### Option B: Supabase PostgreSQL (Easier)
- Go to https://supabase.com
- Create free project
- Import your schema
- Use connection string in app

## Environment Variables
Set these in Azure App Service:
- `ConnectionStrings__DefaultConnection`: Your database connection string
- `ASPNETCORE_ENVIRONMENT`: Production

## Deployment Commands
```bash
# Build and publish backend
dotnet publish MyTravelAPIServices/MyTravelAPIServices.csproj -c Release -o ./publish

# Deploy to Azure
az webapp deployment source config-local-git --name mytravel-api-unique --resource-group mytravel-rg
git remote add azure https://mytravel-api-unique.scm.azurewebsites.net:443/mytravel-api-unique.git
git push azure main
```