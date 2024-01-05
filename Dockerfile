from nginx as dev
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

from --platform=linux/amd64 nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docs /var/www
CMD ["nginx", "-g", "daemon off;"]
