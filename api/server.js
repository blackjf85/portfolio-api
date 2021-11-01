const express = require("express");

const projectsRouter = require("./projects/projects-router");

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use("/projects", projectsRouter);

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to Jeremy's Portfolio API",
  });
});

module.exports = app;
