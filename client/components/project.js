import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.project = this.props.project;
  }

  render() {
    return (
      <div className="project">
        <h3 className="projTitle">{this.project.name}</h3>
        <img src={`assets/images/${this.project.image}`} onClick={() => {window.location.href=this.project.url}} className="projImg"></img>
        <a href={this.project.github}>
          <img className="projGit" src='assets/GitHub-Mark-32px.png'></img>
        </a>
      </div>)
  }
}