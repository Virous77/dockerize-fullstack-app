FROM node:18-alpine
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . /app

ENV NODE_ENV=development

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
