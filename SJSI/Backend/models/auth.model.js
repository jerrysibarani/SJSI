"use strict";
var dbConn = require("../db.config.js");
var bcrypt = require("bcrypt");

var auth = function (auth) {  
  const salt = bcrypt.genSaltSync();
  const hashPassword =  bcrypt.hashSync(auth.password, salt).toString();
  this.name = auth.name;
  this.email = auth.email;
  this.password = hashPassword.toString();
  this.refresh_token = auth.refresh_token;
  this.createdAt = new Date();
  this.updatedAt = new Date();
}; 
  
auth.create = function (newauth, result) {
  dbConn.query("INSERT INTO auth set ?", newauth, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

auth.findById = function (id, result) {
  dbConn.query("Select * from auth where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

auth.findAll = function (result) {
  dbConn.query("Select * from auth", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("auth : ", res);
      result(null, res);
    }
  });
};

auth.update = function (id, auth, result) {
  dbConn.query("UPDATE auth SET name=?, email=?, password=?, refresh_token=? WHERE id = ?", 
  [auth.name, auth.email, auth.password, auth.refresh_token, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

auth.delete = function (id, result) {
  dbConn.query("DELETE FROM auth WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = auth;
