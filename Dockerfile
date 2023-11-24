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

# Create a non-root user to run Nginx
RUN adduser -D -u 1001 nginx-user

# Set the ownership of the Nginx directories to the non-root user
RUN chown -R nginx-user:nginx-user /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

# Switch to the non-root user
USER nginx-user

# Copy the built React app from the build stage
COPY --from=build --chown=nginx-user:nginx-user /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
