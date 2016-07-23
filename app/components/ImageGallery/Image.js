'use strict';

const React = require('react');

const plusRender = require('../../assets/images/plus.png');

class Image extends React.Component {
  constructor(props) {
    super(props)
  
  }

  // anchor tag inside each li is going to pull a 
  render() {
    return (
      <li>
        <a href='#'><img src={plusRender}></img></a>
        <img src={ this.props.item.url } ></img>
      </li>
    )
  }

}

module.exports = Image;