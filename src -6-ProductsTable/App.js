import React, { Component } from 'react';
import './App.css';
import Products from './Products';

class App extends Component {

  render() {
    return (
      <div>      
        <header>
          <h2>My React App</h2>
        </header>
        <section>
          <Products />
        </section>
      </div>
    );
  }
}

export default App;
