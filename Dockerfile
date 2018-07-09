FROM node:9.11.2-slim

WORKDIR /app

ADD . /app

RUN yarn install

CMD ["yarn", "start"]
