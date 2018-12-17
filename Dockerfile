# base image
FROM node:9.6.1

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 5000

CMD node server.js