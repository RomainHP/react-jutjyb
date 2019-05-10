import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  img: {
    display: 'block', 
    margin: '0 auto', 
    cursor: 'pointer',
    maxWidth: '100%',
  },
};

class AvatarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Avatar
          src={this.props.src}
          alt="Image"
          onMouseOut={() => this.setState({hovered: false})}
          onMouseOver={() => this.setState({hovered: true})}
          className={classes.img}
          style={{opacity: `${this.state.hovered ? '0.5' : '1'}`, filter: `${this.state.hovered ? 'grayscale(100%)' : 'grayscale(0%)'}`, width: `${this.props.width}`, height: `${this.props.height}`}}
          onClick={this.props.action}
        />
        <div style={{opacity: `${this.state.hovered ? '1' : '0'}`, textAlign: 'center'}}>
          <Typography>{this.props.text}</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AvatarWrapper);