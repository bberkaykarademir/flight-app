FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build -- --no-lint

EXPOSE 3000

CMD ["npm", "start"]

