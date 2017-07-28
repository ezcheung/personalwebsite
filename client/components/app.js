/**
The head app page
*/

import React from 'react';
import Home from './home';
import Navbar from './navbar';
import AboutProfessional from './aboutProfessional';
import Portfolio from './portfolio';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    }
    this.pageMap = {
      'Home': <Home/>,
      'About Me - Professional': <AboutProfessional/>,
      'Portfolio': <Portfolio/>
    }
  }

  changePage(page) {
    this.setState({page: page});
  }

  render() {
    return (
      <div>
        <Navbar changePage={this.changePage.bind(this)}/>
        {this.pageMap[this.state.page]}
      </div>
    )
  }
}