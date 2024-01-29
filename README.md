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

## Docker

To build the docker container run 
```bash 
docker build -t example-microservice . 
```

And then run the container, it will take some time the first time
```bash 
docker run -dp 3001:3001 -p 3002:3002 example-microservice
```
You can then connect to `localhost:3001` to access the backend and `localhost:3002` to connect to frontend 

Stop the container 
```bash 
docker ps 
docker stop ae9da2c07d45
```

See logs 
```bash 
docker ps 
docker logs ae9da2c07d45
```

---

## Testing

To run the backend 
```bash 
npm run startback
```

To run the frontend
```bash 
npm run startfront
```

Run Both
```bash 
npm run start
```

## Project structure

- `backend/`: everything backend
- `public/`: all static data such as images and fonts
- `src/`: source code 
  - `components/`: react's components 
  - `index.tsx`: main react file

A list of all the commands I used to make this template can be found in `commands/` 

To use a dabatase, look [here](https://github.com/IS-FixMi/fixmi-database-template).

## TODO
- [x] Base project + Express
- [x] Typescript and eslint
- [x] React 
- [x] Docker
