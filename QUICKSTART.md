# 🚀 Quick Start Guide

## Prerequisites
- .NET 8.0 SDK
- Node.js (v16+)
- SQL Server (Express/LocalDB)

## Setup (5 minutes)

### 1. Clone & Setup
```bash
git clone https://github.com/naveen-virat/MyTravel.git
cd MyTravel

# Windows
setup.bat

# macOS/Linux
chmod +x setup.sh
./setup.sh
```

### 2. Database Setup
Execute `DBScript.sql` in SQL Server Management Studio or:
```bash
sqlcmd -S "(localdb)\MSSQLLocalDB" -i DBScript.sql
```

### 3. Run Application
```bash
# Option 1: Use npm scripts
npm run start

# Option 2: Manual start
# Terminal 1:
cd MyTravelAPIServices
dotnet run

# Terminal 2:
cd MyTravelAngular
ng serve
```

## Access Points
- **Frontend**: http://localhost:4200
- **Backend API**: https://localhost:44393
- **Swagger UI**: https://localhost:44393/

## Default Test Users
*Check DBScript.sql for sample login credentials*

## Need Help?
- 📖 Read the full [README.md](README.md)
- 🐛 Report issues on [GitHub](https://github.com/naveen-virat/MyTravel/issues)

**That's it! Happy coding! 🎉**