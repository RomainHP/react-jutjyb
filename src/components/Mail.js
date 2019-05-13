import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Topbar from './Topbar';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";

const styles = {

};

class Mail extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hidden: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.hidden = !this.state.hidden;
  }

  render() {
    const { classes } = this.props;
    const message = "";
    if (!this.state.hidden) {
      message = <p>{this.props.message}</p>;
    }
    return (
      <div onClick={this.handleClick}>
        <Avatar>
          RC
        </Avatar>
        <p>{this.props.objet}</p>
        {message}
      </div>
    )
  }
}

export default withStyles(styles)(Mail);