/**
The head app page
*/

import React from 'react';
import Home from './home';
import Navbar from './navbar';
import Introduction from './introduction';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    }
    this.pageMap = {
      'Home': <Home/>,
      'Introduction': <Introduction/>
    }
  }

  changePage(page) {
    this.setState({page: page});
    console.log("App state: ", this.state);
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