FROM nginx:stable
MAINTAINER Your Name "rosliani@alterra.id"

RUN mkdir -p /deploy/www/BridestoryFE
RUN mkdir -p /deploy/log

COPY default.conf /etc/nginx/conf.d
ADD build/. /deploy/www/BridestoryFE

WORKDIR /deploy/www/BridestoryFE
