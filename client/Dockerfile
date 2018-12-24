FROM node:9.6.1 as BUILD

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm install react-scripts@1.1.1 -g --silent

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=BUILD /usr/src/app/build/  /usr/share/nginx/html
