# Base image
FROM node:14-alpine

# Install Yarn
RUN apk add --no-cache yarn

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy app source code
COPY . .

# Build Nuxt.js app for production
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
