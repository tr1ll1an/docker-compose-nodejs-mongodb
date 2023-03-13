module.exports = app => {
  const courses = require("../controllers/courses.controller.js");

  var router = require("express").Router();

  router.post("/", courses.create);
  router.post("/all", courses.saveAll);


  router.get("/", courses.findAll);
  app.use("/api/courses", router);
};
