'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import CardView from './CardView';

function Home() {
    return (
        <div align="center">
            <h1>CoViD-19 Bot</h1>
            <CardView/>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));