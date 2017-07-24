import React from 'react';
import Slider from 'react-slick';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.imageCount = 3;
    this.sliderSettings = {
      id: 'gallery',
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

  images() {
    let toReturn = [];
    for(let i = 1; i <= this.imageCount; i++) {
      toReturn.push(<img src={'assets/images/img' + i + '.png'} className='image'></img>)
    }
    return toReturn;
  }

  render() {
    return (
      <div id='header'>
        <Slider {...this.sliderSettings}>
          {this.images()}
        </Slider>
      </div>
    )
  }
}