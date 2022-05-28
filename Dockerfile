FROM node:alpine

# create the application working directory
WORKDIR /usr/src/app

# Copy the package.json to ensure correct dependencies are installed
COPY package.json ./

COPY . ./

# install dependencies
RUN npm install --silent

CMD [ "npm", "run", "start" ]