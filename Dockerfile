FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps
COPY ./ ./
CMD ["npm", "start"]