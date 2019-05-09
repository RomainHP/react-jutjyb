import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import Topbar from './Topbar';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

class Profile extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar />
        <div onClick={this.insideAvatarFunction}>
            <Avatar alt="Avatar" src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className={classes.avatar} />
          </div>
        
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Profile));