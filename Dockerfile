FROM node:18.14.0-alpine3.17

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM node:lts
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3000

CMD [ "yarn", "start" ]