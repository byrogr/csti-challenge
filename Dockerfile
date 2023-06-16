FROM node:lts-alpine3.17 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:lts-alpine3.17  as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:lts-alpine3.17 as prop-deps
WORKDIR /app
COPY ./package.json .
RUN npm install --prod

FROM node:lts-alpine3.17 as dist
WORKDIR /app
COPY --from=prop-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY ./package.json .
COPY ./.env.example .
RUN cp .env.example .env
EXPOSE 8000
CMD ["npm", "run", "start"]

