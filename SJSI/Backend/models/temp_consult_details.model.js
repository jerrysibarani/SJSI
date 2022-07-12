"use strict";
var dbConn = require("../db.config.js");

//temp_consult_details object create
var temp_consult_details = function (temp_consult_details) {
  this.userid = temp_consult_details.userid;
  this.no_transaction = temp_consult_details.no_transaction;
  this.Case_id = temp_consult_details.Case_id;
  this.Case_name = temp_consult_details.Case_name;
  this.quantity = temp_consult_details.quantity;
  this.price = temp_consult_details.price;
  this.discount = temp_consult_details.discount;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

temp_consult_details.create = function (newtemp_consult_details, result) {
  dbConn.query("INSERT INTO temp_consult_details set ?", newtemp_consult_details, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

temp_consult_details.findById = function (id, result) {
  dbConn.query("Select * from temp_consult_details where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

temp_consult_details.findAll = function (result) {
  dbConn.query("Select * from temp_consult_details", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("temp_consult_details : ", res);
      result(null, res);
    }
  });
};

temp_consult_details.update = function (id, temp_consult_details, result) {
  dbConn.query(
    "UPDATE temp_consult_details SET userid=?, no_transaction=?, Case_id=?, Case_name=?, quantity=?, price=?, discount=?  WHERE id = ?",
    [temp_consult_details.userid, temp_consult_details.no_transaction, temp_consult_details.Case_id, temp_consult_details.Case_name, temp_consult_details.quantity, temp_consult_details.price, temp_consult_details.discount, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

temp_consult_details.delete = function (id, result) {
  dbConn.query("DELETE FROM temp_consult_details WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = temp_consult_details;
