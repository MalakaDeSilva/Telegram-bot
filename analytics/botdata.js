const mongoose = require("mongoose");
const User = require("../model/user");

function saveMessage(ctx) {
  console.log(ctx.message);
}

function saveSender(ctx) {
  const user = new User({
    _id: ctx.from.id,
    firstName: ctx.from.first_name,
    lastName: ctx.from.last_name,
    isBot: ctx.from.is_bot,
    language: ctx.from.language,
  });

  user
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {});
}

module.exports = {
  saveMessage,
  saveSender,
};
