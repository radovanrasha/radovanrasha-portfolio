# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build your app
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

# Run the app
CMD ["serve", "-s", "build"]
