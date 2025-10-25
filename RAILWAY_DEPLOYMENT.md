# Railway Deployment Guide for MyTravel

Railway is an excellent choice for full-stack deployment with automatic GitHub integration.

## Why Railway?
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Built-in PostgreSQL database
- ✅ Simple configuration
- ✅ Supports both .NET and Node.js

## Deployment Steps

### 1. Sign Up for Railway
- Go to https://railway.app
- Sign up with your GitHub account
- Connect your MyTravel repository

### 2. Deploy Backend (.NET API)
```bash
# Create railway.json in MyTravelAPIServices folder
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "dotnet MyTravelAPIServices.dll",
    "healthcheckPath": "/api/ApiInfo/health"
  }
}
```

### 3. Deploy Frontend (Angular)
```bash
# Create railway.json in MyTravelAngular folder
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

### 4. Environment Variables
Set in Railway dashboard:
- `ASPNETCORE_ENVIRONMENT=Production`
- `ConnectionStrings__DefaultConnection=${{DATABASE_URL}}`
- `PORT=8080`

### 5. Database Setup
Railway automatically provides PostgreSQL. Update your connection string to use PostgreSQL instead of SQL Server.

## Quick Deploy Commands
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy from repository
railway link
railway up
```

## Cost: FREE
- 512 MB RAM
- 1 GB Disk
- $5 credit monthly (covers most small apps)
- Custom domains supported