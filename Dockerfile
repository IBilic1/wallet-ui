# Use an official Node.js runtime as a parent image
FROM node:latest as build

WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# Build the React app for production
RUN yarn build

FROM nginx:latest

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
