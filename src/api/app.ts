/*
 *   File: app.ts 
 *
 *   Purpose: this file contains the main code for the back-end server 
 *
 */ 

// Express
import express from 'express';
const app = express();
const port = 3001;

// Allow Access from different origin to enable react to make calls 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

// GET route
app.get('/api/greet', (req, res) => {
  // Return a json
  res.json({text: `Hello World from Backend!`});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
