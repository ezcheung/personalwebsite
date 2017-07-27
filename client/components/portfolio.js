import React from 'react';
import Project from './project';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
    {
      name: "Stately Shower",
      image: "StatelyShower.png",
      url: "www.statelyshower.club"
    },
    {
      name: "PartnerUp",
      image: "PartnerUp.png",
      url: "partnerup.makerpass.com"
    },
    {
      name: "Co-Star",
      image: "Co-Star.png",
      url: "co-star.herokuapp.com"
    },
    // {
    //   name: "This Website!",
    //   image: "personalwebsite.png",
    //   url: "www.elliotccheung.com"
    // }
    ]
  }

  projectList() {
    return this.projects.map((e, i) => <Project key={i} project={e} className="project"/>)
  }

  render() {
    return (
      <div id="portfolio" className="content">
        <div id="projectList">
          {this.projectList()}
        </div>
      </div>)
  }
}