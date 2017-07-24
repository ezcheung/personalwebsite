/**
The head app page
*/

import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}