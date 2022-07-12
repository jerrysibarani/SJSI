"use strict";
const temp_consult_details = require("../models/temp_consult_details.model.js");
exports.findAll = function (req, res) {
  temp_consult_details.findAll(function (err, temp_consult_details) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", temp_consult_details);
    res.send(temp_consult_details);
  });
};

exports.create = function (req, res) {
  const new_temp_consult_details = new temp_consult_details(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    temp_consult_details.create(new_temp_consult_details, function (err, temp_consult_details) {
      if (err) res.send(err);
      res.json({ error: false, message: "temp_consult_details added successfully!", data: temp_consult_details });
    });
  }
};

exports.findById = function (req, res) {
  temp_consult_details.findById(req.params.id, function (err, temp_consult_details) {
    if (err) res.send(err);
    res.json(temp_consult_details);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    temp_consult_details.update(req.params.id, new temp_consult_details(req.body), function (err, temp_consult_details) {
      if (err) res.send(err);
      res.json({ error: false, message: "temp_consult_details successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  temp_consult_details.delete(req.params.id, function (err, temp_consult_details) {
    if (err) res.send(err);
    res.json({ error: false, message: "temp_consult_details successfully deleted" });
  });
};
