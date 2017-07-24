import React from 'react';

export default class RightButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }

  render() {
    return (
      <div id='rightbtn'>{`$(this.state.name) >`}</div>
    )
  }
}