"use strict";
const auth = require("../models/auth.model.js");
exports.findAll = function (req, res) {
  auth.findAll(function (err, auth) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", auth);
    res.send(auth);
  });
};

exports.create = function (req, res) {
  const new_auth = new auth(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    auth.create(new_auth, function (err, auth) {
      if (err) res.send(err);
      res.json({ error: false, message: "auth added successfully!", data: auth });
    });
  }
};

exports.findById = function (req, res) {
  auth.findById(req.params.id, function (err, auth) {
    if (err) res.send(err);
    res.json(auth);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    auth.update(req.params.id, new auth(req.body), function (err, auth) {
      if (err) res.send(err);
      res.json({ error: false, message: "auth successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  auth.delete(req.params.id, function (err, auth) {
    if (err) res.send(err);
    res.json({ error: false, message: "auth successfully deleted" });
  });
};
