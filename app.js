const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.listen(process.env.PORT || port, function () {
  console.log("server up");
});
