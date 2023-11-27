# Use a base image with Node.js installed
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built React app
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx to serve the application
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
