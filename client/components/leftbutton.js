import React from 'react';

export default class LeftButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }

  render() {
    return (
      <div id='leftbtn'>{`< $(this.state.name)`}</div>
    )
  }
}