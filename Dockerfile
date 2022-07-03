FROM node:17

WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
CMD ["npm", "run", "dev"]