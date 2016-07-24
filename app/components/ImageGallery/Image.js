'use strict';

const React = require('react');

const ItemInfo = require('./ItemInfo');
const plusSign = require('../../assets/images/plus.png');

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showOverlay: false
    }
  
    this.expandInfo = this.expandInfo.bind(this);
  }
  
  expandInfo(event) {
    event.preventDefault();
    this.state.showOverlay === false ? this.setState({showOverlay: true})  : this.setState({showOverlay: false});
  }

  render() {
    return (
      <li className="foodItem">
        <a href='#' onClick={ this.expandInfo }><img src={plusSign}></img></a>
        <img src={ this.props.item.url } ></img>
        { this.state.showOverlay ? <ItemInfo item={ this.props.item } /> : null } 
      </li>
    )
  }

}



module.exports = Image;