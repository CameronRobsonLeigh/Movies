# Stage 1: Build the app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app
FROM node:20-alpine as serve

WORKDIR /app

COPY --from=build /app/build /app/build

# Install http-server globally
RUN npm install -g http-server

# Expose port 80 (not necessary unless you want to document that the container will use this port)
EXPOSE 80

# Command to run the server
CMD ["http-server", "-p", "80"]
