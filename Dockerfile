FROM node:lts as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

RUN yarn install

RUN yarn build

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3000

CMD [ "yarn", "start" ]
