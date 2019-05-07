import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Components/Menu.js';
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
        <Menu />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
