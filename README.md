# BlueJobs

BlueJobs is an application designed to assist blue-collar workers in finding job opportunities and enable companies to hire skilled workers efficiently.

## Technology Stack

- **Frontend:** React with TypeScript (generated with Vite)
- **Backend:** ASP.NET Web API (C#)
- **Database:** MySQL (Dockerized, using Entity Framework)

## Setup and Installation

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/bluejobs.git
cd bluejobs
```

### 2. Setup the Backend
#### Prerequisites:
- Install .NET SDK
- Install Docker
- Install MySQL

#### Environment Variables
Update the database connection string in `appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost,1433;Database=BlueJobs;User Id=YourUserId;Password=SecretPassword;Encrypt=false;"
  }
}
```

#### Run the Backend
```sh
cd backend
# Run database migrations
dotnet ef database update
# Start the API
dotnet run
```

### 3. Setup the Frontend
#### Prerequisites:
- Install Node.js
- Install Yarn or npm

#### Run the Frontend
```sh
cd frontend
# Install dependencies
yarn install # or npm install
# Start the development server
yarn dev # or npm run dev
```

## Running with Docker
Ensure Docker is installed, then execute the following command:
```sh
docker-compose up --build
```
This will set up the API and database within containers.

## API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | /api/Employer/EmployerJobOffers | Retrieve all job listings |
| POST   | /api/Employer/CreateOffer | Create a new job listing |

## Features
- **Job Listings** - Companies can post job opportunities.
- **Worker Profiles** - Blue-collar workers can create and manage profiles.

## Contributing
Contributions in the form of issues and pull requests are welcome.

## License
This project is licensed under the MIT License.

---
Developed by:
Benedek Dániel
Buzási Zsombor
Székely Márton
Takács Vilmos

