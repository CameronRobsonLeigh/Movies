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

FROM node:20-alpine as serve

WORKDIR /app

COPY --from=build /app/build /app

# Install http-server globally
RUN npm install -g http-server@14.1.1

EXPOSE 80

CMD ["http-server", "-p", "80"]