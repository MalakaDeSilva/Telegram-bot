var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var schedule = require("node-schedule");
const fetch = require("node-fetch");

const Telegraf = require("telegraf");
const Telegram = require("telegraf/telegram");
var date = new Date("April 08, 2020 08:00:00");

const env = {
  GROUP_ID: -1001440768236,
  BOT_TOKEN: "1222653443:AAGWS9lrRn-vD4OZ5lg3eo_mBFVRwNV7Ucs"
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

//bot commands
tg.start((ctx) => ctx.reply("Hello... Let's start then."))
tg.hears('hi', (ctx) => {
  if(ctx.from.id == 1007382901){
    ctx.reply('My lord Murazor');
  } else {
    ctx.reply('Hello there');
  }
})
tg.hears('Hi', (ctx) => {
  if(ctx.from.id == 1007382901){
    ctx.reply('My lord Murazor');
  } else {
    ctx.reply('Hello there');
  }
})
tg.hears('covidstat', async (ctx) => {
  _data = await _covidstat();
  var _msg = "*CoViD19 Updates - Sri Lanka*\n\n" + "`Deaths`: " + _data.data.local_deaths + "\n`Active Cases`: " + _data.data.local_active_cases + "\n`Recovered`: " + _data.data.local_recovered + "\n`Individuals in hospitals`: " + _data.data.local_total_number_of_individuals_in_hospitals + "\n`Total Cases`: " + _data.data.local_total_cases;
  ctx.replyWithMarkdown(_msg);
});
tg.hears('අලුත් එකෙක් ආවා', (ctx) => ctx.reply('කෝ කෝ කවුද කවුද?'))

tg.hears('Hi sexy', (ctx) => {
  ctx.replyWithMarkdown('ම්ම්ම්ම්ම්ම්ම්හ්හ්හ්හ්හ්... කොල්ලෝඕඕඕඔහ්හ්හ්හ්හ්හ්....');
})

var j = schedule.scheduleJob(date, function(){
  _tg.sendMessage(env.GROUP_ID, "9.30ට PPW Assignment එක... ලෑස්ති වෙයන්..");
});

tg.launch();

// Finally, start our server
app.listen(3000,  () => {
  console.log("Telegram app listening on port 3000!");

});
