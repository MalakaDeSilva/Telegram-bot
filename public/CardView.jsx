import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class CardView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _data: {}
        }
    }

    componentDidMount() {
        fetch("https://hpb.health.gov.lk/api/get-current-statistical")
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    _data: jsonRes
                });
            });
    }

    render() {
        if (typeof this.state._data.data === 'undefined') {
            return null;
        }

        return (
            <div class="deck">
                <CardDeck>
                    <Card border="dark" style={{ width: '40rem' }}>
                        <Card.Header as="h5">Global Updates</Card.Header>
                        <Card.Body>
                            <Card.Title>nCoV Global Updates</Card.Title>

                            
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated: {this.state._data.data.update_date_time}</small>
                        </Card.Footer>
                    </Card>

                    <Card bg="dark" text="white" style={{ width: '40rem' }} >
                        <Card.Header as="h5">Local Updates</Card.Header>
                        <Card.Body>
                            <Card.Title>nCoV Local Updates</Card.Title>

                            
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated: {this.state._data.data.update_date_time}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default CardView;