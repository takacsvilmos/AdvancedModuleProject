# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the app
RUN npm run build

# Serve the app on port 3000
EXPOSE 3000


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
