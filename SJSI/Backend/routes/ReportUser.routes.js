const express = require("express");
const router = express.Router();

const ReportUserController = require("../controllers/ReportUser.controller.js");

// Retrieve all ReportUser
router.get("/", ReportUserController.findAll);

// Create a new ReportUser
router.post("/", ReportUserController.create);

// Retrieve a single ReportUser with id
router.get("/:id", ReportUserController.findById);

// Update a ReportUser with id
router.put("/:id", ReportUserController.update);

// Delete a ReportUser with id
router.delete("/:id", ReportUserController.delete);

module.exports = router;
