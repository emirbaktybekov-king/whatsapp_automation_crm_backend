FROM node:18-alpine

WORKDIR /app

# Установка зависимостей
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Копирование исходников
COPY . .

# Сборка TypeScript
RUN yarn build

# Генерация Prisma клиента
RUN npx prisma generate

# Открытые порты
EXPOSE 3000 8081

# Запуск приложения
CMD ["node", "dist/index.js"]
