# 🧳 MyTravel - Full Stack Travel Booking Application

A comprehensive travel booking and management system built with **ASP.NET Core Web API** backend and **Angular** frontend.

![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![Angular](https://img.shields.io/badge/Angular-15-red)
![SQL Server](https://img.shields.io/badge/SQL%20Server-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Project Overview

MyTravel is a modern, full-stack travel booking application that allows users to:

- **Browse Travel Packages** - Explore various travel destinations and packages
- **Book Hotels & Vehicles** - Reserve accommodations and transportation
- **Manage Bookings** - View and manage your travel bookings
- **Customer Support** - Access customer care services
- **User Authentication** - Secure login for customers and employees
- **Admin Panel** - Employee portal for managing bookings and packages

## 🏗️ Architecture

This project follows a clean, multi-layered architecture:

```
├── 🖥️ Frontend (Angular)
│   ├── Components & Services
│   ├── Routing & Guards
│   └── Responsive UI
│
├── 🌐 Backend (ASP.NET Core Web API)
│   ├── Controllers (API Endpoints)
│   ├── Business Logic
│   └── Swagger Documentation
│
├── 🗄️ Data Layer (Entity Framework Core)
│   ├── Models & Entities
│   ├── Repository Pattern
│   └── Database Context
│
└── 💾 Database (SQL Server)
    ├── Tables & Relationships
    ├── Stored Procedures
    └── Sample Data
```

## 🛠️ Technology Stack

### Backend
- **Framework**: ASP.NET Core 8.0 Web API
- **ORM**: Entity Framework Core
- **Database**: SQL Server
- **Documentation**: Swagger/OpenAPI
- **Authentication**: Built-in Authentication

### Frontend
- **Framework**: Angular 15
- **UI Components**: Custom Components
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Styling**: CSS3

### Development Tools
- **IDE**: Visual Studio / VS Code
- **Package Manager**: NuGet (Backend), npm (Frontend)
- **Version Control**: Git

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **.NET 8.0 SDK** - [Download](https://dotnet.microsoft.com/download)
- **SQL Server** (Express/Developer/LocalDB) - [Download](https://www.microsoft.com/sql-server)
- **Git** - [Download](https://git-scm.com/)

### Optional (Recommended)
- **Visual Studio 2022** or **VS Code** with C# extension
- **SQL Server Management Studio (SSMS)**
- **Angular CLI** (will be installed globally)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/naveen-virat/MyTravel.git
cd MyTravel
```

### 2. Database Setup

#### Option A: Using SQL Server Management Studio
1. Open SSMS and connect to your SQL Server instance
2. Open the `DBScript.sql` file
3. Execute the script to create the database and sample data

#### Option B: Using Command Line
```bash
# Navigate to the project root
cd MyTravel

# Execute the SQL script (replace with your connection string)
sqlcmd -S "(localdb)\MSSQLLocalDB" -i DBScript.sql
```

### 3. Backend Setup (.NET Web API)

```bash
# Navigate to the API project
cd MyTravelAPIServices

# Restore NuGet packages
dotnet restore

# Update connection string (if needed)
# Edit appsettings.json with your SQL Server connection string

# Build the project
dotnet build

# Run the API
dotnet run
```

The API will start on `https://localhost:44393` and Swagger UI will be available at the root URL.

### 4. Frontend Setup (Angular)

```bash
# Open a new terminal and navigate to Angular project
cd MyTravelAngular

# Install Node.js dependencies
npm install

# Install Angular CLI globally (if not already installed)
npm install -g @angular/cli

# Start the development server
ng serve
```

The Angular app will start on `http://localhost:4200`.

## 🔧 Configuration

### Backend Configuration

Update `appsettings.json` in `MyTravelAPIServices` project:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=TravelAwayDB;Trusted_Connection=true;MultipleActiveResultSets=true"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Frontend Configuration

Update API base URL in Angular services if needed:
- Default API URL: `https://localhost:44393`
- Update in service files under `src/travelAway-services/`

## 📚 API Documentation

Once the backend is running, access the Swagger documentation at:
- **Swagger UI**: `https://localhost:44393/`
- **OpenAPI Spec**: `https://localhost:44393/swagger/v1/swagger.json`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/TravelAway/GetPackages` | GET | Retrieve all travel packages |
| `/api/TravelAway/ValidateLoginCustomer` | GET | Customer authentication |
| `/api/TravelAway/GetCustomerDetails` | GET | Get customer information |
| `/api/TravelAway/GetPackageCategories` | GET | Get package categories |
| `/api/ApiInfo/info` | GET | API information and health |

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start Backend**:
   ```bash
   cd MyTravelAPIServices
   dotnet run
   ```

2. **Start Frontend** (in a new terminal):
   ```bash
   cd MyTravelAngular
   ng serve
   ```

3. **Access the Application**:
   - Frontend: `http://localhost:4200`
   - Backend API: `https://localhost:44393`
   - Swagger UI: `https://localhost:44393/`

### Production Build

#### Backend
```bash
cd MyTravelAPIServices
dotnet publish -c Release -o ./publish
```

#### Frontend
```bash
cd MyTravelAngular
ng build --prod
# Files will be in dist/ folder
```

## 🧪 Testing

### Backend Testing
```bash
cd MyTravelAPIServices
dotnet test
```

### Frontend Testing
```bash
cd MyTravelAngular
ng test
```

## 📁 Project Structure

```
MyTravel/
├── 📄 README.md
├── 📄 DBScript.sql                 # Database creation script
├── 📄 MyTravel.sln                 # Solution file
├── 🗂️ MyTravelAPIServices/         # Web API project
│   ├── Controllers/
│   ├── Properties/
│   ├── appsettings.json
│   └── Program.cs
├── 🗂️ MyTravelDAL/                 # Data Access Layer
│   ├── Models/
│   └── TravelAwayRepository.cs
├── 🗂️ MyTravelAngular/             # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   ├── package.json
│   └── angular.json
└── 🗂️ TestApp/                     # Test project
```

## 🔍 Features Overview

### For Customers
- 🔐 **User Registration & Login**
- 🏖️ **Browse Travel Packages** by category
- 🏨 **Hotel Booking** with availability check
- 🚗 **Vehicle Rental** booking
- 💳 **Payment Processing**
- 📱 **Booking Management**
- 🆘 **Customer Support**

### For Employees
- 👨‍💼 **Employee Login Portal**
- 📊 **Booking Management Dashboard**
- 🏨 **Hotel Management**
- 🚗 **Vehicle Management**
- 👥 **Customer Management**
- 📈 **Analytics & Reports**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Issues
- Ensure SQL Server is running
- Check connection string in `appsettings.json`
- Verify database exists and script has been executed

#### CORS Issues
- Backend CORS is configured for `AllowAnyOrigin`
- If issues persist, check Angular service URLs

#### Port Conflicts
- Backend default: `44393`
- Frontend default: `4200`
- Update configurations if ports are in use

#### Node.js/Angular Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/naveen-virat/MyTravel/issues) section
2. Create a new issue with detailed description
3. Include error messages and environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naveen Virat**
- GitHub: [@naveen-virat](https://github.com/naveen-virat)

## 🙏 Acknowledgments

- Built with ASP.NET Core and Angular
- Swagger for API documentation
- Entity Framework Core for data access
- Angular CLI for frontend tooling

---

### 🌟 Star this repository if you find it helpful!

**Happy Coding!** 🚀