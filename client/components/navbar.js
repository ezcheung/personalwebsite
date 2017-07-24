import React from 'react';
import Slider from 'react-slick';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currPage: 0
    }
    let _this = this;
    this.pages = ['Introduction', 'Skills', 'Portfolio'];
    this.sliderProps = {
      slidesToShow: 1,
      afterChange: function(pageNum) {
        _this.props.changePage(_this.pages[pageNum]);
        _this.setState({currPage: pageNum})
      }
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