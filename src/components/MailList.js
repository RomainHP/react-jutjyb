import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Topbar from './Topbar';
import Mail from './Mail';

const styles = {

};

class MailList extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar />
        <p/>
        <MailComponent message="test" objet="titre"/>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(MailList));