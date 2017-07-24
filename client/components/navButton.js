import React from 'react';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
    this.dir = this.props.dir;
    this.pages = this.props.pages;
  }

  text() {
    return this.dir === 'left' ? '<' : '>';
    // if(this.dir === 'left') return '< ' + this.state.name;
    // return this.state.name + ' >';
  }

  render() {
    return (
      <div id='rightbtn' onClick={this.props.onClick}>{this.text()}</div>
    )
  }
}