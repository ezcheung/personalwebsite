import React from 'react';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.spiel = 
    `Hi! I am a fresh graduate of the University of Cambridge. I am a passionate software engineer
    equipped with skills in full-stack JavaScript development from attending Hack Reactor Software Engineering Immersive.
    I am proficient in a variety of front-end frameworks, having built projects (including this website!) in React.js, Angular.js, jQuery, and the lesser-known Mithril.js.
    On the back-end, I've used several different database structures, both schema-based (MySQL, PostgreSQL) and document-based (MongoDB), writing endpoints in Node.js and Express.js to interact with them.
    Overall, I just love using programming to solve problems and create useful applications, whether it's in a team or solo development.
    Use the arrows above to check out some of my projects, or use the icons under my contact info to visit my LinkedIn and Github profiles!`
  }

  render() {
    return (
      <div id="intro" className="spiel">
        {this.spiel}
      </div>
      )
  }
}