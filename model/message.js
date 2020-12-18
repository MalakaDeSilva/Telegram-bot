const mongoose = require("mongoose");
const user = require("./user");

const messageModel = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  from: {
    type: [user],
  },
  message: {
    type: String,
  },
});
