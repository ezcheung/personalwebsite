import React from 'react';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.spiel = 
    // `Hi! I am a fresh graduate of the University of Cambridge. I am a passionate software engineer
    // equipped with skills in full-stack JavaScript development from attending Hack Reactor Software Engineering Immersive.
    // I am proficient in a variety of front-end frameworks, having built projects (including this website!) in React.js, Angular.js, jQuery, and the lesser-known Mithril.js.
    // On the back-end, I've used several different database structures, both schema-based (MySQL, PostgreSQL) and document-based (MongoDB), writing endpoints in Node.js and Express.js to interact with them.
    // Overall, I just love using programming to solve problems and create useful applications, whether it's in a team or solo development.
    // Use the arrows above to check out some of my projects, or use the icons under my contact info to visit my LinkedIn and Github profiles!`
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }

  render() {
    return (
      <div id="intro" className="spiel">
        {this.spiel}
      </div>
      )
  }
}