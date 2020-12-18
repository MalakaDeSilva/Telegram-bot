const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  isBot: {
    type: Boolean,
  },
  language: {
    type: String,
  },
});

module.exports = mongoose.model("User", userModel);
