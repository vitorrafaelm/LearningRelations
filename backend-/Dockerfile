FROM node:14-alpine

WORKDIR /backend-api

COPY package*.json ./

run yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
