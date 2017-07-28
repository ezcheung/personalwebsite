import React from 'react';

export default class ProjectDesc extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.project) {
      return null;
    }
    return (
      <div className="projDesc">
        <h2>{this.props.project.name}</h2>
        <p>{this.props.project.desc}</p>
      </div>
    )
  }
}