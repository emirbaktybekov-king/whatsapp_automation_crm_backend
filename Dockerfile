FROM node:18-bullseye-slim

WORKDIR /app

# Install necessary packages
RUN apt-get update && apt-get install -y curl openssl && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies first (to leverage cache)
COPY package.json package-lock.json* ./
RUN npm install

# Copy all source code
COPY . .

# Generate Prisma client
RUN npx prisma generate --schema=src/prisma/schema.prisma

# Build your TypeScript code (create /app/dist)
RUN npm run build

EXPOSE 3000

# Start the compiled app
CMD ["node", "dist/index.js"]
