FROM node:18-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm install -g yarn --force && yarn install

CMD [ "yarn", "dev" ]