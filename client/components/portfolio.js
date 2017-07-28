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
      name: "Stately Shower (2016-2017)",
      image: "StatelyShower.png",
      url: "https://www.statelyshower.club",
      github: "https://www.github.com/ezcheung/stately-shower",
      desc: `Stately Shower is an app built for the residents of Mallory Court, Magdalene College at the University of Cambridge for reserving the limited shower and bath facilities of the building`,
      bullets: [
        "Core project built in one afternoon, with continuing edits and updates throughout the year",
        "Integrated with Facebook OAuth for easy user login",
        "Facilitated the everyday lives of 10 students living in several different residential blocks",
        "Employs Google's Firebase.js for real-time interaction between user and database",
        "Constructed in React.js, styled with CSS flexbox, and supported by a Node-Express back-end server",
      ]   
    },
    {
      name: "PartnerUp (2016)",
      image: "PartnerUp.png",
      url: "https://partnerup.makerpass.com",
      github: "https://www.github.com/makersquad/partnerup"
    },
    {
      name: "Co-Star (2016)",
      image: "Co-Star.png",
      url: "https://co-star.herokuapp.com",
      github: "https://www.github.com/hackmeco/co-star"
    },
    {
      name: "This Website! (2017)",
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