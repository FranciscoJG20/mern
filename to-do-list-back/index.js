const express = require("express");
const app = express();
const parser = require("body-parser");
// what does body parser do?

const Song = require("./models/song");

app.use(parser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Listen to port " + app.get("port"));
});
