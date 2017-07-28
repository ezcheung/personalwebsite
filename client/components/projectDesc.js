import React from 'react';

export default class ProjectDesc extends React.Component {

  constructor(props) {
    super(props);
  }

  bullets() {
    if(!this.props.project || !this.props.project.bullets) return null;
    return this.props.project.bullets.map((e, i) => 
      <div className="bullet" key={i}>{"- " + e}</div>
    )
  }

  render() {
    if(!this.props.project) {
      return null;
    }
    return (
      <div className="projDesc">
        <h2>{this.props.project.name}</h2>
        <div className="description">{this.props.project.desc}</div>
        <div className="bulletList">{this.bullets()}</div>
      </div>
    )
  }
}