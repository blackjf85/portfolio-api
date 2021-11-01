const express = require("express");
const app = require("./api/server");
require("dotenv").config();

const { PORT } = process.env;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Jeremy's portfolio API up and running!");
});
