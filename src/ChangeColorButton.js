import React, { Component } from 'react';

class ChangeColorButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onClick();
        console.log("click under button");
    }
    render() {
        return(
            <button onClick={this.handleClick}>Change Color</button>
        );
    }
}
export default ChangeColorButton;