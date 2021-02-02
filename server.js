"use strict";
// comment line here
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Bundler = require("parcel-bundler");
const morgan = require("morgan");

const bundler = new Bundler("./public/index.html");

const Telegraf = require("telegraf");
const cors = require("cors");

const bot = require("./bot/bot");

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

server.listen(PORT, () => {
  console.log("Telegram app listening on : http://127.0.0.1:" + PORT);
});
