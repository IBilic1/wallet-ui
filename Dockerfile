FROM node:lts as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

COPY . .

RUN rm -rf node_modules && \
  yarn install -g serve

RUN yarn build
CMD [ "serve", "-s", "build" ]
