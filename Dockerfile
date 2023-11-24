FROM node:lts as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

COPY . .

RUN rm -rf node_modules && \
  yarn install -g serve

RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
