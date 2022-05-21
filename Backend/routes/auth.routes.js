const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller.js");

// Retrieve all auth
router.get("/", authController.findAll);

// Create a new auth
router.post("/", authController.create);

// Retrieve a single auth with id
router.get("/:id", authController.findById);

// Update a auth with id
router.put("/:id", authController.update);

// Delete a auth with id
router.delete("/:id", authController.delete);

module.exports = router;
