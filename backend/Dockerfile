FROM node:16-alpine3.11

RUN mkdir /server

WORKDIR /server

COPY /server/ /server

RUN npm install

EXPOSE 5151

CMD node index

LABEL Description="backend image"
