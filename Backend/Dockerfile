# Use the official .NET SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the .csproj file and restore dependencies
COPY *.csproj .
RUN dotnet restore

# Copy the rest of the project files and build the application
COPY . .
RUN dotnet publish -c Release -o out

# Use a runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

# Expose the port your application will run on
EXPOSE 5000
ENTRYPOINT ["dotnet", "Backend.dll"]
