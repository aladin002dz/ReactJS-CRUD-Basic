import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import MyComponent from './MyComponent';
import ColoredBlock from './ColoredBlock';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ColoredBlock/>
          <Clock/>
          <MyComponent/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hi {this.props.name} ! </h1>
        </header>
      </div>
    );
  }
}

export default App;
