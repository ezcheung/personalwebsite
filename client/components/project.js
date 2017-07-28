import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project" onMouseEnter={this.props.setSelected}>
        <h3 className="projTitle">{this.props.project.name}</h3>
        <img src={`assets/images/${this.props.project.image}`} onClick={() => {window.location.href=this.props.project.url}} className="projImg"></img>
        <a href={this.props.project.github}>
          <img className="projGit" src='assets/GitHub-Mark-32px.png'></img>
        </a>
      </div>)
  }
}