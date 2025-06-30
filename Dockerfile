# ✅ Use Debian 11 slim (has libssl1.1)
FROM node:18-bullseye-slim

# Set working dir
WORKDIR /app

# Install dependencies including libssl1.1
RUN apt-get update && \
    apt-get install -y curl openssl libssl1.1 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Start
CMD ["npm", "run", "start"]
