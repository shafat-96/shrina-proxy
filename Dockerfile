# Use official Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for better caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose the port (optional, if your app runs on specific port)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
