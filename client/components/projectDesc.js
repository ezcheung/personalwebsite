import React from 'react';

export default class ProjectDesc extends React.Component {

  constructor(props) {
    super(props);
    this.project = this.props.project;
  }

  render() {
    return (
      <div className="projDesc">
        <h2>{this.project.name}</h2>
        <p>{this.project.desc}</p>
      </div>
    )
  }
}