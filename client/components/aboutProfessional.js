import React from 'react';
import ProfessionalSections from './professionalSections';
import AboutSect from './aboutSect';

export default class AboutProfessional extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return ProfessionalSections.map((e, i) => 
      // even numbers have picture on right, odd on left
      <AboutSect data={e} key={i} layout={i%2}/>
    )
  }

  render() {
    return (
      <div id="intro" className="content">
        {this.list()}
        <h1 className="aboutsectTitle">Skills</h1>
        <div id="skills" className="aboutsectContent">
          <img id="skillsChart" src="assets/images/Skills Chart Edited.png"></img>
        </div>
      </div>
      )
  }
}