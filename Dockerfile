FROM node:alpine

WORKDIR /usr/src/app/official-site/

RUN yarn config set registry https://registry.npm.taobao.org && yarn global add serve

COPY ./build ./

EXPOSE 5000

ENTRYPOINT ["serve", "-s"]