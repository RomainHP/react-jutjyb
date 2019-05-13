import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Topbar from './Topbar';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    border: '3px solid green',
  },
};

class Mail extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={12} className={classes.root}>
        <Grid item xs={6}>
          <Avatar>
            {this.props.from}
          </Avatar>
          {this.props.from}
        </Grid>
        <Grid item xs={6}>
          <p>{this.props.subject}</p>
          <p>{this.props.message}</p>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Mail);