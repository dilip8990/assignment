FROM node:16-alpine3.11

RUN mkdir /app

WORKDIR /app

COPY /app/ /app


RUN npm install

EXPOSE 3000

CMD ["npm","start"]

LABEL Description="frontend image"
