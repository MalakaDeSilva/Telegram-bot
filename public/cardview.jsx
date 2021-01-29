import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Chart from "./chart";

class CardView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _data: {},
    };
  }

  componentDidMount() {
    fetch("https://hpb.health.gov.lk/api/get-current-statistical")
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({
          _data: jsonRes,
        });
      });
  }

  render() {
    if (typeof this.state._data.data === "undefined") {
      return null;
    }

    const data = this.state._data.data;

    return (
      <div className="container-fluid">
        <Chart></Chart>
        <div className="row">
          <Card border="dark" className="col-sm-6">
            <Card.Header as="h5">Global Updates</Card.Header>
            <Card.Body>
              <Card.Title>nCoV Global Updates</Card.Title>
              <div className="grid-container">
                <div className="grid-item">
                  <p className="global-stat">{data.global_deaths}</p>
                  <p>Deaths</p>
                </div>
                <div className="grid-item">
                  <p className="global-stat">{data.global_new_deaths}</p>
                  <p>New Deaths</p>
                </div>
                <div className="grid-item">
                  <p className="global-stat">{data.global_recovered}</p>
                  <p>Recovered</p>
                </div>
                <div className="grid-item">
                  <p className="global-stat">{data.global_new_cases}</p>
                  <p>New Cases</p>
                </div>
              </div>
              <div className="grid-item">
                <p className="global-stat">{data.global_total_cases}</p>
                <p>Total Cases</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated: {data.update_date_time}
              </small>
            </Card.Footer>
          </Card>
          <Card bg="dark" text="white" className="col-sm-6">
            <Card.Header as="h5">Local Updates</Card.Header>
            <Card.Body>
              <Card.Title>nCoV Local Updates</Card.Title>
              <div className="grid-item">
                <p className="local-stat">{data.local_new_cases}</p>
                <p>New Cases</p>
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  <p className="local-stat">{data.local_deaths}</p>
                  <p>Deaths</p>
                </div>
                <div className="grid-item">
                  <p className="local-stat">{data.local_active_cases}</p>
                  <p>Active Cases</p>
                </div>
                <div className="grid-item">
                  <p className="local-stat">{data.local_recovered}</p>
                  <p>Recovered</p>
                </div>
                <div className="grid-item">
                  <p className="local-stat">{data.local_total_cases}</p>
                  <p>Total Cases</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated: {this.state._data.data.update_date_time}
              </small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  }
}

export default CardView;
