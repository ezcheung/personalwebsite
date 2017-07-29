import React from 'react';

export default class AboutSect extends React.Component {

  constructor(props) {
    super(props);
  }

  paragraphs() {
    return this.props.data.spiels.map((e, i) => 
      <p>{e} <br/></p>
      )
  }

  render() {
    if(!this.props.layout) {
      return (
        <div className="aboutsect0">
          <h1 className="aboutsectTitleL">
            {this.props.data.title}
          </h1>
          <div className="aboutsectContent">
            <div className="spiel">
              {this.paragraphs()}
            </div>
            <div className="aboutsectImgDiv">
              <img className={this.props.data.doNotRound ? "aboutsectImg doNotRound" : "aboutsectImg"} src={this.props.data.image}></img>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="aboutsect1">
          <h1 className="aboutsectTitleR">
            {this.props.data.title}
          </h1>
          <div className="aboutsectContent">
            <div className="aboutsectImgDiv">
              <img className={this.props.data.doNotRound ? "aboutsectImg doNotRound" : "aboutsectImg"} src={this.props.data.image}></img>
            </div>
            <div className="spiel">
              {this.paragraphs()}
            </div>
          </div>
        </div>
      )
    }
  }
}