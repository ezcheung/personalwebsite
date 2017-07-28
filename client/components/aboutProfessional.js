import React from 'react';

export default class AboutProfessional extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="intro" className="spiel content">
        {this.spiel}
      </div>
      )
  }
}