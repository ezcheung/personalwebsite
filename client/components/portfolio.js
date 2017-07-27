import React from 'react';
import Project from './project';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
    {
      name: "Stately Shower",
      image: "StatelyShower.png",
      url: "https://www.statelyshower.club"
    },
    {
      name: "PartnerUp",
      image: "PartnerUp.png",
      url: "https://partnerup.makerpass.com"
    },
    {
      name: "Co-Star",
      image: "Co-Star.png",
      url: "https://co-star.herokuapp.com"
    },
    {
      name: "This Website!",
      image: "PartnerUp.png",
      url: "https://www.elliotccheung.com"
    },
    ]
  }

  projectList() {
    return this.projects.map((e, i) => <Project key={i} project={e}/>)
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