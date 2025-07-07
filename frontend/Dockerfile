FROM node:20

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (including dev dependencies)
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
