FROM node:6.1.0

WORKDIR /public

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server/index.js"]