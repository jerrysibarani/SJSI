"use strict";
const client = require("../models/client.model.js");
exports.findAll = function (req, res) {
  client.findAll(function (err, client) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", client);
    res.send(client);
  });
};

exports.create = function (req, res) {
  const new_client = new client(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    client.create(new_client, function (err, client) {
      if (err) res.send(err);
      res.json({ error: false, message: "client added successfully!", data: client });
    });
  }
};

exports.findById = function (req, res) {
  client.findById(req.params.id, function (err, client) {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    client.update(req.params.id, new client(req.body), function (err, client) {
      if (err) res.send(err);
      res.json({ error: false, message: "client successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  client.delete(req.params.id, function (err, client) {
    if (err) res.send(err);
    res.json({ error: false, message: "client successfully deleted" });
  });
};
