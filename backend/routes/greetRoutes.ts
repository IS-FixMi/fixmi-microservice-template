import express from 'express' 

// '/api/greet'
const greetRouter = express.Router();

// GET route
greetRouter.get('/', (req, res) => {
  // Return a json
  res.json({text: `Hello World from Backend!`});
});

export default greetRouter;
