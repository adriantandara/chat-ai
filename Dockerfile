FROM node:20 AS base
WORKDIR /app
COPY package*.json ./

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install

FROM builder AS final
WORKDIR /app
COPY --from=builder /app .
RUN npm install --omit=dev

CMD ["npm", "start"]