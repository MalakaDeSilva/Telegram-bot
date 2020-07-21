'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import CardView from './CardView';
import TelegramLogo from '../images/telegram-logo.png';

function Home() {
    return (
        <div align="center">
            <p className="header-name">CoViD-19 Dashboard</p>
            <CardView />
            <p id="telegram-connect">To get the updates via Telegram, connect with the bot: <a href="https://t.me/rw9_bot"><img src={TelegramLogo} className="telegram-logo"></img></a></p>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));