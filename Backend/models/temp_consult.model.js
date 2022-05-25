"use strict";
var dbConn = require("../db.config.js");

//temp_consult object create
var temp_consult = function (temp_consult) {
  this.userid = temp_consult.userid;
  this.no_transaction = temp_consult.no_transaction;
  this.PIC = temp_consult.PIC;
  this.transactiondate = temp_consult.transactiondate;
};

temp_consult.create = function (newtemp_consult, result) {
  dbConn.query("INSERT INTO temp_consult set ?", newtemp_consult, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

temp_consult.findById = function (id, result) {
  dbConn.query("Select * from temp_consult where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

temp_consult.findAll = function (result) {
  dbConn.query("Select * from temp_consult", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("temp_consult : ", res);
      result(null, res);
    }
  });
};

temp_consult.update = function (id, temp_consult, result) {
  dbConn.query(
    "UPDATE temp_consult SET userid=?, no_transaction=?, PIC=?,  transaction_date=? WHERE id = ?",
    [temp_consult.userid, temp_consult.no_transaction, temp_consult.PIC, temp_consult.transaction_date,  userid],
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

temp_consult.delete = function (id, result) {
  dbConn.query("DELETE FROM temp_consult WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = temp_consult;
