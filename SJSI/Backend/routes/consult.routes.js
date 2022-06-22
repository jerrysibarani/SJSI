const express = require("express");
const router = express.Router();

const consultController = require("../controllers/consult.controller.js");

// Retrieve all consult
router.get("/", consultController.findAll);

// Create a new consult
router.post("/", consultController.create);

// Retrieve a single consult with id
router.get("/:id", consultController.findById);

// Update a consult with id
router.put("/:id", consultController.update);

// Delete a consult with id
router.delete("/:id", consultController.delete);

module.exports = router;
