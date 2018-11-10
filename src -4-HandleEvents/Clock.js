import React, { Component } from 'react';

class Clock extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    };

    componentDidMount() {
        this.intervalID = setInterval (
            () => this.updateClock(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    updateClock() {
        this.setState ({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return(
            <p>The time is {this.state.time} </p>
        );
    }
}

export default Clock;