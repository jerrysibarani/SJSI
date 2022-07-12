const express = require("express");
const router = express.Router();

const consult_transactionController = require("../controllers/consult_transaction.controller.js");

// Retrieve all consult_transaction
router.get("/", consult_transactionController.findAll);

// Create a new consult_transaction
router.post("/", consult_transactionController.create);

// Retrieve a single consult_transaction with id
router.get("/:id", consult_transactionController.findById);


module.exports = router;
