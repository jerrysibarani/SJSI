"use strict";
const consult_transaction = require("../models/consult_transaction.model.js");
exports.findAll = function (req, res) {
  consult_transaction.findAll(function (err, consult_transaction) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", consult_transaction);
    res.send(consult_transaction);
  });
};

exports.create = function (req, res) {
  const new_consult_transaction = new consult_transaction(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    consult_transaction.create(new_consult_transaction, function (err, consult_transaction) {
      if (err) res.send(err);
      res.json({ error: false, message: "consult_transaction added successfully!", data: consult_transaction });
    });
  }
};

exports.findById = function (req, res) {
  consult_transaction.findById(req.params.id, function (err, consult_transaction) {
    if (err) res.send(err);
    res.json(consult_transaction);
  });
};

