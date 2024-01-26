# fixmi-microservice-template

This repository is designed to function as a comprehensive template for each microservice within the Fix-Mi application, streamlining the development process by providing a standardized foundation. By serving as a template, it aims to significantly reduce the time spent on configuration tasks and enhance overall consistency across the various microservices.

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
npm run startback
```

To run the frontend
```bash 
npm ru startfront
```

Run Both
```bash 
npm run start
```

## Project structure

- `public/`: all static data such as images and fonts
- `src/`: source code 
  - `api/`: backend 
  - `components/`: react's components 
  `index.tsx`: main react file

A list of all the commands I used to make this template can be found in `commands/` 

## TODO
- [x] Base project + Express
- [x] Typescript and eslint
- [ ] Mongodb
- [x] React 
- [ ] Docker
