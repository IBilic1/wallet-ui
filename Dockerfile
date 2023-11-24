FROM node:lts as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

COPY . .
RUN rm -Rf app/.env.development

RUN rm -rf node_modules && \
  yarn install --production=true

RUN yarn build

RUN yarn global add serve
RUN serve -s build
