import React from 'react';
import Project from './project';
import ProjectDesc from './projectDesc';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
    this.projects = [
    {
      name: "Stately Shower",
      image: "StatelyShower.png",
      url: "https://www.statelyshower.club",
      github: "https://www.github.com/ezcheung/stately-shower",
      desc: "Lorem Ipsum :D"
    },
    {
      name: "PartnerUp",
      image: "PartnerUp.png",
      url: "https://partnerup.makerpass.com",
      github: "https://www.github.com/makersquad/partnerup"
    },
    {
      name: "Co-Star",
      image: "Co-Star.png",
      url: "https://co-star.herokuapp.com",
      github: "https://www.github.com/hackmeco/co-star"
    },
    {
      name: "This Website!",
      image: "PartnerUp.png",
      url: "https://www.elliotccheung.com",
      github: "https://www.github.com/ezcheung/personalwebsite"
    },
    ]
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