const express = require('express');
const app = express();
const port = 3000;
const routes = require("./routes");

//Enable static routes
app.use(express.static("public"));
app.use(express.static ('components'));

// Use the router file
app.use(routes)

//Listening port
app.listen(3000, ()=>{console.log(`listening on port ${port}`)})