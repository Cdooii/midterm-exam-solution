/*
Node.js and Express
Create a simple Express.js server that listens on port 3000.
Define a route /test that sends a JSON response { message: 'Express is working! Write your full name' }.
Hint: Focus on basic Express.js setup and routing.
*/
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { //this routes to the home page
    res.send('Express is working! Well done, Mr. Cedric Enriquez') //this is displayed in the homepage
});

app.listen(port, () => {  // this listens in on port 3000
    console.log(`Server is running at http://localhost:${port}`); // displays a message in terminal
});                                                               // to ensure the server is up