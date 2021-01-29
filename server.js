"use strict";
// comment line here
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const Bundler = require("parcel-bundler");
const morgan = require("morgan");
const bundler = new Bundler("./public/index.html");

const Telegraf = require("telegraf");
const cors = require("cors");

const op = require("./analytics/botdata");
const messages = require("./extra/Constants");

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

const http = require("http");
const server = http.Server(app);

const tg = new Telegraf(process.env.BOT_TOKEN);

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// changed comment line
app.use(bundler.middleware());

app.use(express.static("./dist"));

app.get("/", (req, res) => {
  res.sendFile("./dist/index.html");
});

async function _covidstat() {
  const apiURL = "https://hpb.health.gov.lk/api/get-current-statistical";
  const fetchResult = fetch(apiURL);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

// general bot commands
tg.start((ctx) => ctx.replyWithMarkdown(messages.getStartMessage()));

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

// covid-19 related commands

// local status commands
tg.hears("local stat", async (ctx) => {
  const _data = await _covidstat();
  var _msg = messages.getLocalStatMessage();
  op.saveSender(ctx);
  ctx.replyWithMarkdown(_msg);
});

tg.hears("Local stat", async (ctx) => {
  const _data = await _covidstat();
  var _msg =
    "*CoViD19 Updates - Sri Lanka*\n\n" +
    "`Updated time` : " +
    _data.data.update_date_time +
    "\n\n`Deaths`: " +
    _data.data.local_deaths +
    "\n`New Cases Today`: " +
    _data.data.local_new_cases +
    "\n`Active Cases`: " +
    _data.data.local_active_cases +
    "\n`Recovered`: " +
    _data.data.local_recovered +
    "\n`Individuals in hospitals`: " +
    _data.data.local_total_number_of_individuals_in_hospitals +
    "\n`Total Cases`: " +
    _data.data.local_total_cases;
  op.saveSender(ctx);
  ctx.replyWithMarkdown(_msg);
});

// global status
tg.hears("global stat", async (ctx) => {
  const _data = await _covidstat();
  var _msg =
    "*CoViD19 Updates - Global*\n\n" +
    "`Updated time` : " +
    _data.data.update_date_time +
    "\n\n`Deaths`: " +
    _data.data.global_deaths +
    "\n`Recovered`: " +
    _data.data.global_recovered +
    "\n`New Cases`: " +
    _data.data.global_new_cases +
    "\n`Total Cases`: " +
    _data.data.global_total_cases;
  op.saveSender(ctx);
  ctx.replyWithMarkdown(_msg);
});

tg.hears("Global stat", async (ctx) => {
  const _data = await _covidstat();
  var _msg =
    "*CoViD19 Updates - Global*\n\n" +
    "`Updated time` : " +
    _data.data.update_date_time +
    "\n\n`Deaths`: " +
    _data.data.global_deaths +
    "\n`Recovered`: " +
    _data.data.global_recovered +
    "\n`New Cases`: " +
    _data.data.global_new_cases +
    "\n`Total Cases`: " +
    _data.data.global_total_cases;
  op.saveSender(ctx);
  ctx.replyWithMarkdown(_msg);
});

tg.use((ctx) => {
  op.saveSender(ctx);
});

tg.launch();

server.listen(PORT, () => {
  console.log("Telegram app listening on : http://127.0.0.1:" + PORT);
});
