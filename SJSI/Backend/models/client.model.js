"use strict";
var dbConn = require("../db.config.js");

//client object create
var client = function (client) {
  this.nik = client.nik;
  this.password_number = client.password_number;
  this.firstname = client.firstname;
  this.lastname = client.lastname;
  this.place_birth = client.place_birth;
  this.date_birth = client.date_birth;
  this.nationality = client.nationality;
  this.gender = client.gender;
  this.occupation = client.occupation;
  this.address = client.address;
  this.email = client.email;
  this.contact_person = client.contact_person;
  this.office_number = client.office_number;
  this.join_date = client.join_date;
  this.marital = client.marital;
  this.status = client.status;
  this.created_at = new Date();
  this.updated_at = new Date();
};

client.create = function (newclient, result) {
  dbConn.query("INSERT INTO client set ?", newclient, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

client.findById = function (id, result) {
  dbConn.query("Select * from client where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

client.findAll = function (result) {
  dbConn.query("Select * from client", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("client : ", res);
      result(null, res);
    }
  });
};

client.update = function (id, client, result) {
    dbConn.query("UPDATE client SET nik=?, password_number=?, firstname=?, lastname=?, place_birth=?, date_birth=?, nationality=?, gender=?, occupation=?, address=?, email=?, contact_person=?, office_number=?, join_date=?, marital=?, status=? WHERE id = ?", 
    [client.nik, client.password_number, client.firstname, client.lastname, client.place_birth, client.date_birth, client.nationality, client.gender, client.occupation, client.address, client.email, client.contact_person, client.office_number, client.join_date, client.marital, client.status, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

client.delete = function (id, result) {
  dbConn.query("DELETE FROM client WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = client;
