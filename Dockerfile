# Frontend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Add lockfile and package.json's
COPY package.json package-lock.json* ./

# Использование npm ci вместо npm install
# Установка только production dependencies
RUN npm ci --only=production

# Добавляем dev dependencies только для development
RUN if [ "$NODE_ENV" = "development" ]; then npm install --only=dev; fi

# Копируем исходный код
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]