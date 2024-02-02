const express = require('express');
const router = express.Router();
const optionRouter = require('./option');

router.use("/questions", require("./question"));
router.use('/options', optionRouter);

module.exports = router;

