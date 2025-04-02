# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all project files into the container
COPY . .

# Expose the port the app will run on
EXPOSE 5001

# Command to start the app
CMD ["node", "server.js"]
