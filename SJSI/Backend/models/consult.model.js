"use strict";
var dbConn = require("../db.config.js");

var consult = function (consult) {  
  this.userid = consult.userid;
  this.no_transaction = consult.no_transaction;
  this.PIC = consult.PIC;
  this.transaction_date = consult.transaction_date;
  this.createdAt = new Date();
  this.updatedAt = new Date();
}; 
  
consult.create = function (newconsult, result) {
  dbConn.query("INSERT INTO consult set ?", newconsult, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

consult.findById = function (id, result) {
  dbConn.query("Select * from consult where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

consult.findAll = function (result) {
  dbConn.query("Select * from consult", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("consult : ", res);
      result(null, res);
    }
  });
};

consult.update = function (id, consult, result) {
  dbConn.query("UPDATE consult SET userid=?, no_transaction=?, PIC=?, transaction_date=? WHERE id = ?", 
  [consult.userid, consult.no_transaction, consult.PIC, consult.transaction_date, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

consult.delete = function (id, result) {
  dbConn.query("DELETE FROM consult WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = consult;
