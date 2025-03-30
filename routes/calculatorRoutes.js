const express = require("express");

const calculatorController = require("../controllers/calculatorController");

const router = express.Router();

router.post("/add", calculatorController.add);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

module.exports = router;
