/*
 *   File: app.ts 
 *
 *   Purpose: this file contains the main code for the back-end server 
 *
 */ 

// Express
import express from 'express';
import greetRouter from './routes/greetRoutes';

const app = express();
const port = 3001;

// Create a route
app.use("/api/greet", greetRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://127.0.0.1:${port}`);
});
