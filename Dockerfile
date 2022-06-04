FROM node:17

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . ./
CMD ["npm", "run", "dev"]