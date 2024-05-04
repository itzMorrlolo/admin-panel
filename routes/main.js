const mainRoute = require("express").Router();
const fs = require("fs")

mainRoute.get("/", (req, res) => {
  fs.readFile("./public/index.html", "utf-8").then((data) => {
    res.header("Content-Type", "text/html").send(data);
  });
});

module.exports = mainRoute;