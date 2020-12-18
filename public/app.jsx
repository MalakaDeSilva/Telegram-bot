import React from "react";
import CardView from "./cardview";
import TelegramLogo from "../images/telegram-logo.png";

function App(props) {
  return (
    <div>
      <div className="container-fluid">
        <CardView />
      </div>
      <p id="telegram-connect">
        To get the updates via Telegram, connect with the bot:{" "}
        <a href="https://t.me/rw9_bot">
          <img src={TelegramLogo} className="telegram-logo"></img>
        </a>
      </p>
    </div>
  );
}

export default App;
