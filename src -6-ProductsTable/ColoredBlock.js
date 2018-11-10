import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends Component {
    constructor(props) {
        super(props);
        this.ChangeColor = this.ChangeColor.bind(this);
        this.state = {
            backgroundColor: "red"
        };
    }
    ChangeColor(event) {
        this.setState( (prevState) => {
            let newColor = prevState.backgroundColor === "red" ? "blue" : "red";
            return {
                backgroundColor : newColor
            };
        });
        console.log("clicked");
    }
    render() {
        return(
            <div style={{width:"200px", height:"200px", backgroundColor:this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.ChangeColor}/>
            </div>
        );
    }
}
export default ColoredBlock;