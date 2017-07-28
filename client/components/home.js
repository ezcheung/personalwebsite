import React from 'react';
import Slider from 'react-slick';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.imageCount = 3;
    this.sliderSettings = {
      dots: true,
    }
  }

  images() {
    let toReturn = [];
    for(let i = 1; i <= this.imageCount; i++) {
      toReturn.push(<img src={'assets/images/img' + i + '.png'} className='image'></img>)
    }
    return toReturn;
  }

  // <Slider {...this.sliderSettings}>
  //   {this.images()}
  // </Slider>

  render() {
    return (
      <div id='home' className='content'>
        <div id='gallery'>
          <img className='image' src='assets/images/img1.png'></img>
        </div>
        <h1 id='myName'>Elliot Cheung</h1>
        <h3 className='info'>Houston, TX</h3>
        <h3 className='info'>elliotccheung@gmail.com</h3>
        <div id='links'>
          <a href='https://github.com/ezcheung'>
            <img className='link' src='assets/GitHub-Mark-32px.png'></img>
          </a>
          <a href='https://linkedin.com/in/elliot-cheung'>
            <img className='link' src='assets/linkedin.png'></img>
          </a>
        </div>
        <a href='/cv.pdf'>My CV</a> 
      </div>
    )
  }
}