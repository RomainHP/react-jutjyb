import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Topbar from './Topbar';

class Main extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar />
      </React.Fragment>
    )
  }
}

export default withRouter(Main);