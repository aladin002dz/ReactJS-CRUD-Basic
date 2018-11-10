import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            foo: 'Click me'
        };
    }
    handleClick(event) {
        this.setState({
            foo : 'Clicked'
        });
        console.log('click');
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.foo}
            </button>
        );
    }
}
export default MyComponent;