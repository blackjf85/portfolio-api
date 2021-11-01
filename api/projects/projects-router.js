const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "sucess",
    message: "Hello from the projects router.",
  });
});

module.exports = router;
