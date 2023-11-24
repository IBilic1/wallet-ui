FROM node:lts as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

COPY . .

RUN rm -rf node_modules && yarn install --production=true

RUN yarn build
  
FROM node:lts
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3000

CMD [ "yarn", "start" ]
