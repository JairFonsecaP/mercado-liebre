const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.use("/static", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, function () {
  console.log("server up");
});
