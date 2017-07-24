import React from 'react';
import Slider from 'react-slick';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.sliderProps = {
      slidesToShow: 3,
      afterChange: function(slick, slide) {
        console.log("Slick: ", slick);
        console.log("Slide: ", slide);
      }
    }
  }

  render() {
    return (
      <div id="navContainer">
        <Slider {...this.sliderProps}>
          <div className="page">Intro</div>
          <div className="page">Portfolio</div>
          <div className="page">Education</div>
        </Slider>
      </div>)
  }
}