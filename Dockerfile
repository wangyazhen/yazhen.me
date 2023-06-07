FROM nginx:1.13.7-alpine

RUN echo $'http://mirrors.aliyun.com/alpine/v3.5/main\n\
http://mirrors.aliyun.com/alpine/v3.5/community' > /etc/apk/repositories
RUN apk add --update git
RUN apk add --update ca-certificates
RUN update-ca-certificates
RUN apk add --update tzdata
ENV TZ=Asia/Shanghai

COPY dist.tar.gz /
COPY nginx-template.conf /
RUN tar -zxf /dist.tar.gz -C /usr/share/nginx/html --strip-components 1
RUN chown -R nginx:nginx /usr/share/nginx/html




