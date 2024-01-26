# fixmi-microservice-template

This repo will serve the function of being a template for every microservice of the Fix-Mi application. This will save a lot of time for configuration and consistency.

Each microservice runs in a docker container, and uses:

- [Node.js](https://github.com/nodejs/node) with TypeScript language

- [eslint](https://github.com/eslint/eslint) to analyze code

- [Nodemon](https://github.com/remy/nodemon) to automatically update the server

- [Express](https://github.com/expressjs/express) backend

- [React](https://github.com/facebook/react) frontend

- [Mongodb](https://github.com/mongodb/mongo) database

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) for styles


To run the backend 
```bash 
npm run start
```

To run the frontend
```bash 
cd client/
npm start
```

A list of all the commands I used to make this template can be found in `commands/` 

## TODO
- [x] Base project + Express
- [x] Typescript and eslint
- [ ] Mongodb
- [x] React 
- [ ] Docker
