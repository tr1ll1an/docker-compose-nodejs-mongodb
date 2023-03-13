const db = require("../models");
const Courses = db.courses;

exports.saveAll = (req, res) => {

  if (!req.body.length) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Courses.insertMany(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });


  // Save Tutorial in the database

}

function courseModel(body) {
  const { name, responsible_name, responsible_id, responsible_email, status, start_date,
    slug,
    id,
    is_paid,
    currency,
    price,
    count_student } = body


  return new Courses({
    name,
    responsible_name,
    responsible_id,
    responsible_email,
    status,
    start_date,
    slug,
    id,
    is_paid,
    currency,
    price,
    count_student
  });
}


exports.create = (req, res) => {

  // Validate request
  if (!req.body.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial

  var course = courseModel(req.body)
  // Save Tutorial in the database
  course
    .save(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  console.log('Courses get list');
  Courses.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};



// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
