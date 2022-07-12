const express = require("express");
const router = express.Router();

const temp_consult_detailsController = require("../controllers/temp_consult_details.controller.js");

// Retrieve all temp_consult_details
router.get("/", temp_consult_detailsController.findAll);

// Create a new temp_consult_details
router.post("/", temp_consult_detailsController.create);

// Retrieve a single temp_consult_details with id
router.get("/:id", temp_consult_detailsController.findById);

// Update a temp_consult_details with id
router.put("/:id", temp_consult_detailsController.update);

// Delete a temp_consult_details with id
router.delete("/:id", temp_consult_detailsController.delete);

module.exports = router;
