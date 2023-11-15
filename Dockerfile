FROM registry-vpc.cn-shenzhen.aliyuncs.com/ihome-base/nginx:1.14.0-alpine
ENV TZ=Asia/Shanghai
ARG NODE_ENV=prod
WORKDIR /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./NQOYaFgidV.txt /usr/share/nginx/html/
COPY ./quA3sBrDxd.txt /usr/share/nginx/html/
COPY ./Ob0etfszC0.txt /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
