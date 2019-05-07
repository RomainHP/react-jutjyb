import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Components/Menu.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
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

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={App} />
      <Route path="/contact" component={App} />
    </div>
  </Router>
)

render(<App />, document.getElementById('root'));
