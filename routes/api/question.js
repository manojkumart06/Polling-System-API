const express= require("express");
const router = express.Router();
const questionController= require("../../controllers/question_controller");
const optionController = require("../../controllers/option_controller");

router.post('/create', questionController.create)
router.get('/:questionId', questionController.question)
router.get('/:questionId/delete' , questionController.delete)
router.post('/:questionId/options/create', optionController.create)

module.exports = router;