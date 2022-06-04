FROM node:17

WORKDIR /usr/src/app
COPY . .

ENV NODE_ENV=development
RUN npm ci

CMD ["npm", "run", "server"]