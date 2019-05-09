import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default class ImageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  render() {
    return (
      <img
        src={this.props.src}
        alt="Image"
        width={this.props.width}
        height={this.props.height}
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{opacity: `${this.state.hovered ? '0.5' : '1'}`}}
      />
    );
  }
}