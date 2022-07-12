"use strict";
var dbConn = require("../db.config.js");


var consult_transaction = function (consult) {  
  this.userid = consult.userid;
  this.no_transaction = consult.no_transaction;
  this.PIC = consult.PIC;
  this.transaction_date = consult.transaction_date;
  this.createdAt = new Date();
  this.updatedAt = new Date();
}; 
  
consult_transaction.create = function (newconsult, result) {
  dbConn.query("INSERT INTO consult set ?", newconsult, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });

  dbConn.query("INSERT into consult_details(userid, no_transaction, Case_id, Case_name, quantity, price, discount) " +  
  "SELECT userid, no_transaction, Case_id, Case_name, quantity, price, discount FROM temp_consult_details WHERE userid=" +newconsult.userid);

  dbConn.query("DELETE FROM temp_consult_details WHERE userid=" +newconsult.userid);
  
  console.log("jeremia berhasil membuat transaksi, skripsi kelar");
};

consult_transaction.findById = function (id, result) {
  dbConn.query("Select * from consult where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

consult_transaction.findAll = function (result) {
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
module.exports = consult_transaction;
