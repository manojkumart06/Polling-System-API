
const express= require("express");
const router= express.Router();

const optionController = require("../../controllers/option_controller");

router.post('/:optionId/add_vote',  optionController.addVote)
router.get('/:optionId/delete', optionController.delete)

module.exports = router;