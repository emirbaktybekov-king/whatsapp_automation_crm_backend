FROM node:18-bullseye-slim

WORKDIR /app

# Обновляем списки пакетов и устанавливаем curl и openssl, если их нет
RUN apt-get update && \
    apt-get install -y curl openssl && \
    rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=src/prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "start"]
