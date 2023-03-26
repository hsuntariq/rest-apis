// require express
const express = require("express");
// require dotenv to use .env variables
const dotenv = require("dotenv").config();
// require colors for styling in the terminal
const colors = require("colors");
// initialize express to a variable
const app = express();
// all the api's hit the same end point
app.use("/api/rest", require("./routes/testRotes"));
// build a server
app.listen(process.env.PORT, () =>
  console.log(`Server started on port:${process.env.PORT.cyan}`)
);
// this is a change
