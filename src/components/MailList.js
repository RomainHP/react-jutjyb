import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Topbar from './Topbar';
import Mail from './Mail';
import mailData from './mailData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
        <GridList spacing={10}>
          {mailData.map(msg => (
            <Mail subject={msg.subject} from={msg.from} message={msg.message}/>
          ))}
        </GridList>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(MailList));