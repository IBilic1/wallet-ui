FROM jitesoft/node:18.16.0


WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

RUN yarn install

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3000

CMD [ "yarn", "start" ]
