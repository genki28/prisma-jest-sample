FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn prisma generate

EXPOSE 9090

CMD ["yarn", "start"]