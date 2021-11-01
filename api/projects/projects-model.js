const db = require("../../data/dbConfig");

const getAllProjects = async () => {
  const projects = await db("projects").select();
  return projects;
};

module.exports = { getAllProjects };
