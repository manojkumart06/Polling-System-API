const mongoose = require('mongoose');

const Optionsschema = new mongoose.Schema({
      text: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        default: 0
      },
      link_to_vote: {
        type: String,
      },
    },
    {
      timeStamps: true,
    }
  );
  
  const Options = mongoose.model("Options", Optionsschema);
  module.exports = Options;

