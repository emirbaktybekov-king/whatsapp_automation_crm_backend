# ✅ 1. Use node:18-slim as base (alpine is problematic for Prisma binary)
FROM node:18-slim

# ✅ 2. Set working directory
WORKDIR /app

# ✅ 3. Install required packages (curl, OpenSSL 1.1, etc.)
RUN apt-get update && \
    apt-get install -y curl openssl libssl1.1 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# ✅ 4. Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# ✅ 5. Copy all source code
COPY . .

# ✅ 6. Generate Prisma client
RUN npx prisma generate

# ✅ 7. Expose app port
EXPOSE 3000

# ✅ 8. Start the app
CMD ["npm", "run", "start"]
