var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const fetch = require("node-fetch");

const Telegraf = require("telegraf");
const Telegram = require("telegraf/telegram");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

app.use(cors());

const http = require("http");
const server = http.Server(app);

const env = {
  GROUP_ID: -1001440768236,
  BOT_TOKEN: "1222653443:AAGWS9lrRn-vD4OZ5lg3eo_mBFVRwNV7Ucs",
  CREATOR: 1007382901
}

const tg = new Telegraf(env.BOT_TOKEN);
const _tg = new Telegram(env.BOT_TOKEN);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.send('GET request to the homepage')
});

async function _covidstat() {
  const apiURL = "https://hpb.health.gov.lk/api/get-current-statistical";
  const fetchResult = fetch(apiURL);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

// general bot commands
tg.start((ctx) => ctx.replyWithMarkdown("Hey there...\n\n*Commands*\n\n`local stat/Local stat - ශ්‍රී ලංකාව තුල CoViD19 නවතම තත්වය දැනගැනීමට`\n\n`global stat/Global stat - ලෝකය පුරා CoViD19 නවතම තත්වය දැනගැනීමට`\n"))

tg.hears('hi', (ctx) => {
  if (ctx.from.id == env.CREATOR) {
    ctx.reply('My lord Murazor');
  } else {
    ctx.reply('Hello there');
  }
})

tg.hears('Hi', (ctx) => {
  if (ctx.from.id == 1007382901) {
    ctx.reply('My lord Murazor');
  } else {
    ctx.reply('Hello there');
  }
})

tg.hears('අලුත් එකෙක් ආවා', (ctx) => ctx.reply('කෝ කෝ කවුද කවුද?'))

tg.hears('Hi sexy', (ctx) => {
  ctx.replyWithMarkdown('ම්ම්ම්ම්ම්ම්ම්හ්හ්හ්හ්හ්... කොල්ලෝඕඕඕඔහ්හ්හ්හ්හ්හ්....');
})

// covid-19 related commands

// local status commands
tg.hears('local stat', async (ctx) => {
  _data = await _covidstat();
  var _msg = "*CoViD19 Updates - Sri Lanka*\n\n" + "`Updated time` : " + _data.data.update_date_time + "\n\n`Deaths`: " + _data.data.local_deaths + "\n`New Cases Today`: " + _data.data.local_new_cases + "\n`Active Cases`: " + _data.data.local_active_cases + "\n`Recovered`: " + _data.data.local_recovered + "\n`Individuals in hospitals`: " + _data.data.local_total_number_of_individuals_in_hospitals + "\n`Total Cases`: " + _data.data.local_total_cases;
  ctx.replyWithMarkdown(_msg);
});

tg.hears('Local stat', async (ctx) => {
  _data = await _covidstat();
  var _msg = "*CoViD19 Updates - Sri Lanka*\n\n" + "`Updated time` : " + _data.data.update_date_time + "\n\n`Deaths`: " + _data.data.local_deaths + "\n`New Cases Today`: " + _data.data.local_new_cases + "\n`Active Cases`: " + _data.data.local_active_cases + "\n`Recovered`: " + _data.data.local_recovered + "\n`Individuals in hospitals`: " + _data.data.local_total_number_of_individuals_in_hospitals + "\n`Total Cases`: " + _data.data.local_total_cases;
  ctx.replyWithMarkdown(_msg);
});


// global status
tg.hears('global stat', async (ctx) => {
  _data = await _covidstat();
  var _msg = "*CoViD19 Updates - Global*\n\n" + "`Updated time` : " + _data.data.update_date_time + "\n\n`Deaths`: " + _data.data.global_deaths + "\n`Recovered`: " + _data.data.global_recovered + "\n`New Cases`: " + _data.data.global_new_cases + "\n`Total Cases`: " + _data.data.global_total_cases;
  ctx.replyWithMarkdown(_msg);
});

tg.hears('Global stat', async (ctx) => {
  _data = await _covidstat();
  var _msg = "*CoViD19 Updates - Global*\n\n" + "`Updated time` : " + _data.data.update_date_time + "\n\n`Deaths`: " + _data.data.global_deaths + "\n`Recovered`: " + _data.data.global_recovered + "\n`New Cases`: " + _data.data.global_new_cases + "\n`Total Cases`: " + _data.data.global_total_cases;
  ctx.replyWithMarkdown(_msg);
});

tg.launch();

server.listen(PORT, () => {
  console.log("Telegram app listening on port " + PORT);

});
