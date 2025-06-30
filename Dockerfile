FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Указываем явный путь к schema.prisma
RUN npx prisma generate --schema=src/prisma/schema.prisma

EXPOSE 3000 8081

CMD ["node", "dist/index.js"]
