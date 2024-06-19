from nginx as dev
RUN apt-get install nginx-module-njs
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./njs/ /etc/nginx/njs/


from --platform=linux/amd64 nginx:alpine
RUN apt-get install nginx-module-njs
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./njs/ /etc/nginx/njs/
COPY ./docs /var/www
CMD ["nginx", "-g", "daemon off;"]
