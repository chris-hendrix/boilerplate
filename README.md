# Ping Boilerplate

### Description
A boilerplate web project using the NodeJS framework and Typescript. It consists of the following
- database: Postgres
- backend: Express
- frontend: React

It allows the user to "create" pings (with a message attached), that will display on the frontend.

**Note that this is a work currently a WIP**

### Technologies
A non-exhaustive list of technologies in this project:
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Express](https://expressjs.com/)
- [Github Actions](https://github.com/features/actions)
- [Jest](https://jestjs.io/)
- [Node](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/)
- [Sequelize](https://sequelize.org/)
- [Typescript](https://www.typescriptlang.org/)

### Installation
1. Install [Node LTS](https://nodejs.org/en/)
2. Install [Docker](https://www.docker.com/)
3. Clone this repo
4. Run the following command in the root directory
```
npm run install:all
```
### Start
The following command will containerize, build, and start the database, backend, and frontend
```
npm run up
```