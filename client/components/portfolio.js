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
      github: "https://www.github.com/makersquad/partnerup",
      desc: `An application for automating the process of selecting student groupings at Hack Reactor Software Engineering Immersive. Designed to be fully integrated with Hack Reactor's existing frameworks and employed at schools across the nation.`,
      bullets: [
        "Facilitated the instruction of Hack Reactor classes of 30 students in Austin, TX",
        "Integrated login authentication with the existing Hack Reactor user database for seamless deployment",
        "Architected using a PostGreSQL, Express, AngularJS, and Node tech stack",
        "Designed an algorithm for generating randomized student groups while avoiding repeating partners",
        "Interfaced with Hack Reactor instructors throughout production for client-focused development",
        "Managed the git workflow of the team of 4, resolving merge conflicts and ensuring smooth remote development"
      ]
    },
    {
      name: "Co-Star (2016)",
      image: "Co-Star.png",
      url: "https://co-star.herokuapp.com",
      github: "https://www.github.com/hackmeco/co-star",
      desc: `Co-Star is an application for searching movies by multiple actors, for identifying films in which specific actors and actresses have starred together. 
      Co-Star also features a trivia game in which users are presented with multiple actors and must guess the correct movies. High scores are tracked on a persistent leaderboard`,
      bullets: [
        "Implemented the responsive single-page application with multiple routes using AngularJS",
        "Designed gameplay and engineered logic for the game component",
        "Created back-end endpoints using Express and Node.js to connect the front end to our database",
        "Persisted actor data using a Mongo database, structured using Mongoose schemas",
        "Deployed live on Heroku, available for public use",
        "NB: Unfortunately, due to a change to the TMDB API, Co-Star no longer functions as intended"
      ]
    },
    {
      name: "This Website! (2017)",
      image: "PartnerUp.png",
      url: "https://www.elliotccheung.com",
      github: "https://www.github.com/ezcheung/personalwebsite",
      desc: `This website that you're on was also built from scratch-- no templates or external site-builders here, just JavaScript!
      I built elliotccheung.com primarily using React.js, backed up by a simple Node-Express server. Hope you find it pretty neat! :D`,
      bullets: [
      ]
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