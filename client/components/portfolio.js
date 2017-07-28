import React from 'react';
import Project from './project';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
    {
      name: "Stately Shower",
      image: "StatelyShower.png",
      url: "https://www.statelyshower.club",
      github: "https://www.github.com/ezcheung/stately-shower"
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