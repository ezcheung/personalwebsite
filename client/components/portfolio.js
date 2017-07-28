import React from 'react';
import Project from './project';
import ProjectDesc from './projectDesc';
import PastProjects from './pastProjects';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
    this.projects = PastProjects;
  }

  projectList() {
    return this.projects.map((e, i) => <Project setSelected={this.setSelected.bind(this, e)} key={i} project={e}/>)
  }

  setSelected(proj) {
    console.log("Selecting: ", proj.name);
    this.setState({selected: proj});
    this.forceUpdate();
  }

  description() {
    if(!this.state.selected) return null;
    return <ProjectDesc project={this.state.selected}/>
  }

  render() {
    console.log("Rendering portfolio, selected is: ", this.state.selected);
    return (
      <div id="portfolio" className="content">
        <div id="projectList">
          {this.projectList()}
        </div>
        <ProjectDesc project={this.state.selected}/>
      </div>)
  }
}