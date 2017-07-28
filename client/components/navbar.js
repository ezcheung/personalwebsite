import React from 'react';
import Slider from 'react-slick';
import NavButton from './navButton';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currPage: 0
    }
    let _this = this;
    this.pages = ['Home', 'About Me - Professional', 'Portfolio'];
    this.sliderProps = {
      dots: false,
      arrows: false,
      slidesToShow: this.pages.length,
      focusOnSelect: true,
      centerMode: true,
      afterChange: function(pageNum) {
        _this.props.changePage(_this.pages[pageNum]);
        _this.setState({currPage: pageNum});
        _this.forceUpdate();
      },
    }
  }

  buildPages() {
    return this.pages.map((e, i) => 
      <div className="page" key={i}>{e}</div>
    )
  }

  render() {
    return (
      <div id="navContainer">
        <Slider {...this.sliderProps}>
          {this.buildPages()}
        </Slider>
      </div>)
  }
}