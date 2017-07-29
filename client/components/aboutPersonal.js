import React from 'react';
import PersonalSections from './personalSections';
import AboutSect from './aboutSect';

export default class AboutProfessional extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return PersonalSections.map((e, i) => 
      // even numbers have picture on right, odd on left
      <AboutSect data={e} key={i} layout={i%2}/>
    )
  }

  render() {
    return (
      <div id="intro" className="content">
        {this.list()}
      </div>
      )
  }
}