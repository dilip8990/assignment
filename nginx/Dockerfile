FROM nginx:1.19.10

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

LABEL Description="nginx image"
