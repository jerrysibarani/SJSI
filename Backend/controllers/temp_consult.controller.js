"use strict";
const temp_consult = require("../models/temp_consult.model.js");
exports.findAll = function (req, res) {
  temp_consult.findAll(function (err, temp_consult) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", temp_consult);
    res.send(temp_consult);
  });
};

exports.create = function (req, res) {
  const new_temp_consult = new temp_consult(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    temp_consult.create(new_temp_consult, function (err, temp_consult) {
      if (err) res.send(err);
      res.json({ error: false, message: "temp_consult added successfully!", data: temp_consult });
    });
  }
};

exports.findById = function (req, res) {
  temp_consult.findById(req.params.id, function (err, temp_consult) {
    if (err) res.send(err);
    res.json(temp_consult);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    temp_consult.update(req.params.id, new temp_consult(req.body), function (err, temp_consult) {
      if (err) res.send(err);
      res.json({ error: false, message: "temp_consult successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  temp_consult.delete(req.params.id, function (err, temp_consult) {
    if (err) res.send(err);
    res.json({ error: false, message: "temp_consult successfully deleted" });
  });
};
