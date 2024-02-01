const mongoose = require('mongoose');

const Optionsschema = new mongoose.Schema({
    id : {
        type:String,
        required : true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      text: {
        type: String,
      },
      votes: {
        type: Number,
        default: 0
      },
      link: {
        type: String,
      },
    },
    {
      timeStamps: true,
    }
  );
  
  const Options = mongoose.model("Options", Optionsschema);
  module.exports = Options;

