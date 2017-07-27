import React from 'react';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
    {
      name: "Stately Shower",
      image: "statelyshower.png",
      url: "www.statelyshower.club"
    },
    {
      name: "PartnerUp",
      image: "partnerup.png",
      url: "partnerup.makerpass.com"
    },
    {
      name: "Co-Star",
      image: "costar.png",
      url: "co-star.herokuapp.com"
    },
    {
      name: "This Website!",
      image: "personalwebsite.png",
      url: "www.elliotccheung.com"
    }]
  }

  render() {

  }
}