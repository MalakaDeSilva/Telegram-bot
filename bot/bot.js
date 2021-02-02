const Telegraf = require("telegraf");

const op = require("../analytics/botdata");
const messages = require("../config/Constants");
const api = require("../api/api");

const tg = new Telegraf(process.env.BOT_TOKEN);

// general bot commands
tg.start((ctx) => {
  op.saveSender(ctx);
  ctx.replyWithMarkdown(messages.getStartMessage());
});

// local status commands
tg.hears("local stat", async (ctx) => {
  const _data = await api.getCovidUpdates();
  var _msg = messages.getLocalStatMessage(_data);
  ctx.replyWithMarkdown(_msg);
});

tg.hears("Local stat", async (ctx) => {
  const _data = await api.getCovidUpdates();
  var _msg = messages.getLocalStatMessage(_data);
  ctx.replyWithMarkdown(_msg);
});

// global status
tg.hears("global stat", async (ctx) => {
  const _data = await api.getCovidUpdates();
  var _msg = messages.getGlobalStatMessage(_data);
  ctx.replyWithMarkdown(_msg);
});

tg.hears("Global stat", async (ctx) => {
  const _data = await api.getCovidUpdates();
  var _msg = messages.getGlobalStatMessage(_data);
  ctx.replyWithMarkdown(_msg);
});

// covid-19 related commands

tg.use((ctx) => {
  if (ctx.message.text === "hi" || ctx.message.text === "Hi") {
    if (ctx.from.id == process.env.CREATOR) {
      ctx.reply("Hello Sir!");
    } else {
      op.saveSender(ctx);
      ctx.reply("Hey, " + ctx.from.first_name);
    }
  }
});

tg.launch();

module.exports = {
  tg,
};
