const logger = require("../utils/logger"); // Make sure to import your logger

exports.add = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 + num2;
    logger.info(`Addition successful: ${num1} + ${num2} = ${result}`);
    res.json({ success: true, message: "Addition successful", result });
  } catch (error) {
    logger.error(`Error in add operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

exports.subtract = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 - num2;
    logger.info(`Subtraction successful: ${num1} - ${num2} = ${result}`);
    res.json({ success: true, message: "Subtraction successful", result });
  } catch (error) {
    logger.error(`Error in subtract operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

exports.multiply = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 * num2;
    logger.info(`Multiplication successful: ${num1} * ${num2} = ${result}`);
    res.json({ success: true, message: "Multiplication successful", result });
  } catch (error) {
    logger.error(`Error in multiply operation: ${error.message}`);
    res.status(500).json({ error: "Calculator service unavailable" });
  }
};

exports.divide = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  if (num2 === 0) {
    logger.warn(`Division by zero attempt: ${num1} / ${num2}`);
    return res.status(400).json({
      success: false,

      error: "Cannot divide by zero",
    });
  }

  try {
    const result = num1 / num2;
    logger.info(`Division successful: ${num1} / ${num2} = ${result}`);
    res.json({ success: true, message: "Division successful", result });
  } catch (error) {
    logger.error(`Error in divide operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

function validateInputs(req) {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return {
      valid: false,
      error: "Missing parameters: num1 and num2 are required",
    };
  }

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    return {
      valid: false,
      error: "Invalid input: num1 and num2 must be valid numbers",
    };
  }

  return { valid: true };
}

function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}
