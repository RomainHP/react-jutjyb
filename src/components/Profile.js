import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from "@material-ui/core/styles/withStyles";
import Topbar from './Topbar';
import ImageWrapper from './ImageWrapper';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  container: {
    width: 100,
  },
  image: {
    width: 100,
  },
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    width: 100,
    opacity: 0,
  },
  icon: {
    top: 50,
    left: 50,
  },
};

class Profile extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar />
        <ImageWrapper src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" width='100' height='100' text="Modifier"/>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Profile));