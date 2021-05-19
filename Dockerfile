FROM node:12.13-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache git
RUN npm install

COPY . .

CMD [ "node", "dist/main.js" ]