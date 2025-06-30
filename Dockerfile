FROM node:18-bullseye-slim

WORKDIR /app

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y curl openssl libssl1.1 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json* ./

RUN npm install

# Copy entire source code including prisma schema
COPY . .

# Generate Prisma client with explicit schema path
RUN npx prisma generate --schema=src/prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "start"]
