/**
The head app page
*/

import React from 'react';
import Header from './header';
import Navbar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'intro',
    }
    this.pageMap = {
      0: 'intro',
      1: 'education',
      2: 'portfolio'
    }
  }

  changePage() {

  }

  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
      </div>
    )
  }
}