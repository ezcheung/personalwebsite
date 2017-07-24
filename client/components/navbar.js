import React from 'react';
import Slider from 'react-slick';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    let _this = this;
    this.sliderProps = {
      slidesToShow: 1,
      afterChange: function(pageNum) {
        _this.props.changePage(pageNum);
      }
    }
  }

  render() {
    return (
      <div id="navContainer">
        <Slider {...this.sliderProps}>
          <div className="page">Portfolio</div>
          <div className="page">Introduction</div>
          <div className="page">Skills</div>
        </Slider>
      </div>)
  }
}