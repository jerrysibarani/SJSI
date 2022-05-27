const express = require("express");
const router = express.Router();

const temp_consultController = require("../controllers/temp_consult.controller.js");

// Retrieve all temp_consult
router.get("/", temp_consultController.findAll);

// Create a new temp_consult
router.post("/", temp_consultController.create);

// Retrieve a single temp_consult with id
router.get("/:id", temp_consultController.findById);

// Update a temp_consult with id
router.put("/:id", temp_consultController.update);

// Delete a temp_consult with id
router.delete("/:id", temp_consultController.delete);

module.exports = router;
