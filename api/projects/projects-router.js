const express = require("express");
const router = express.Router();

const { getAllProjects } = require("./projects-model");

router.get("/", async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);
  try {
    res.json({
      status: "Success",
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      mssage: "Something went wrong.",
      error: err.message,
      stack: err.stack,
    });
  }
});

module.exports = router;
