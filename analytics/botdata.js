const User = require("../model/user");

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

function dailyUsage(ctx) {}

module.exports = {
  saveSender,
};
