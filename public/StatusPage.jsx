'use strict'

import React, { Component } from 'react';

class StatusPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            covid_dat : []
        }
    }

    componentDidMount() {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default StatusPage;

