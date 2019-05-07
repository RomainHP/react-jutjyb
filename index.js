import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Components/Navbar.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
