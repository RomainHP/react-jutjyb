import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Topbar from './Topbar';
import AvatarWrapper from './AvatarWrapper';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  grid: {
    backgroundColor: 'blue',
  },
  griditem: {
    backgroundColor: 'orange',
  },
};

class Profile extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      file: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
    }
  }

  handleClick(e) {
      this.refs.fileUploader.click();
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar />
        <p/>
        <Paper>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={2} className={classes.griditem}>
              <AvatarWrapper src={this.state.file} width='100px' height='100px' text='Modifier' action={this.handleClick}/>
              <input type="file" id="file" ref="fileUploader" accept="image/*" style={{display: "none"}} onChange={this.handleChange}/>
            </Grid>
            <Grid item xs={10}>
              <Typography variant='h1' align='center' color='text.primary'>Title</Typography>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Profile));