# Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
# Using npm ci ensures clean installs and uses package-lock.json if present
RUN npm install

# Copy the rest of the application code to the working directory
# This includes server.js and the 'public' directory containing your game files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
