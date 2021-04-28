FROM node:14

WORKDIR /usr/src/app

COPY ./node .

RUN yarn install

EXPOSE 9090

CMD ["yarn", "start"]