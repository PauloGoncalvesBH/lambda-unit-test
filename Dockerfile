FROM node:14-alpine3.12 as base

WORKDIR /app

FROM base as test

COPY package*.json ./

RUN npm ci

COPY . .

FROM base as serverless

RUN npm install -g serverless@2.64.1

COPY package*.json ./

RUN npm ci --production

COPY . .

EXPOSE 3000
