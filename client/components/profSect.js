import React from 'react';

export default class ProfSect extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.layout) {
      return (
        <div className="profsect0">
          <h3 className="profsectTitle">
            {this.props.data.title}
          </h3>
          <div className="profsectContent">
            <img className="profsectImg" src={this.props.data.image}></img>
            <p className="spiel">{this.props.data.spiel}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="profsect1">
          <h3 className="profsectTitle">
            {this.props.data.title}
          </h3>
          <div className="profsectContent">
            <p className="spiel">{this.props.data.spiel}</p>
            <img className="profsectImg" src={this.props.data.image}></img>
          </div>
        </div>
      )
    }
  }
}