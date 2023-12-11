FROM node:18-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

RUN npm install -g yarn --force && yarn install

CMD [ "yarn", "dev" ]