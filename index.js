// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// App Setup
// app.use() is used to register middleware
// morgan is a logging framework
// bodyParser is used to parse incoming requests into JSON
// nodemon automatically restarts the server whenver a change is made
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
