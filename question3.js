const express = require('express');
const app = express();
const port = 3000;

// add middleware
app.use(express.json());

// define a GET 
app.get('/test', (req, res) => {
    const response = {
        message: 'Express is working! Marianne Mae Calderon'
    };
    res.json(response);
});

// start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});